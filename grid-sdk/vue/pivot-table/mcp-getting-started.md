---
layout: post
title: WebMCP Getting Started with Vue Pivot Table | Syncfusion
description: Enable browser-based WebMCP tools for the Syncfusion Vue Pivot Table and learn their inputs and requirements.
control: WebMCP
platform: grid-sdk
documentation: ug
domainurl: ##DomainURL##
---

# WebMCP Getting Started with Vue Pivot Table

WebMCP lets a browser-based AI agent discover and invoke structured tools exposed by a web page. The Syncfusion® Pivot Table registers tools for PivotView report changes, filtering, sorting, drill operations, formatting, charts, and export. These tools change the PivotView state or initiate exports; the core descriptors mark every built-in tool `readOnlyHint: false`.

## Browser requirements

WebMCP is an experimental browser API, not a Vue or Node.js feature. The [Chrome WebMCP documentation](https://developer.chrome.com/docs/ai/webmcp) describes an origin trial beginning with Chrome 149 and local testing with the `chrome://flags/#enable-webmcp-testing` flag. Enable the flag and relaunch Chrome for local testing, or follow the current origin-trial instructions for an eligible deployed origin. Other browser/version support is not established by that documentation.

The page must expose `document.modelContext.registerTool`. The PivotView adapter checks for this API when registering tools; an AI client or extension is separate from the PivotView integration. The official WebMCP setup does not require the extension or API key mentioned in some unrelated demos.

## Add WebMCP to a Vue Pivot Table

Create a Vue 3 application with Vite and install the Vue PivotView package and a theme, following [Getting Started with Vue 3 Pivot Table](./vue-3-getting-started).

```bash
npm create vite@latest my-project
cd my-project
npm install
npm install @syncfusion/ej2-vue-pivotview @syncfusion/ej2-material3-theme
```

In `src/App.vue`, provide `WebMcpPivotView` through Vue's `pivotview` injection key and bind the `enableWebMcp` property. The `pivotview` provider is the Vue wrapper's module-injection pattern.

```vue
<template>
  <ejs-pivotview
    id="SalesPivot"
    :enableWebMcp="true"
    :dataSourceSettings="dataSourceSettings">
  </ejs-pivotview>
</template>

<script setup>
import { provide } from 'vue';
import {
  PivotViewComponent as EjsPivotview,
  WebMcpPivotView
} from '@syncfusion/ej2-vue-pivotview';

provide('pivotview', [WebMcpPivotView]);

const dataSourceSettings = {
  dataSource: [
    { Country: 'France', Category: 'Bikes', Year: '2025', Sales: 1200 },
    { Country: 'France', Category: 'Parts', Year: '2025', Sales: 450 },
    { Country: 'Germany', Category: 'Bikes', Year: '2025', Sales: 980 }
  ],
  rows: [{ name: 'Country' }, { name: 'Category' }],
  columns: [{ name: 'Year' }],
  values: [{ name: 'Sales' }]
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-material3-theme/styles/pivotview/index.css';
</style>
```

Run the app with `npm run dev` and open it in a Chrome build with WebMCP enabled. The adapter registers tools during PivotView rendering. It calls `document.modelContext.registerTool(tool, options)`; registration is browser-side, not performed by Vue on the server.

### Configure the registered tools

Bind a `webMcpSettings` object on the Vue component:

```js
const webMcpSettings = {
  name: 'sales',
  tools: ['applyFiltering', 'applySorting', 'clearAllFilters'],
  exposedTo: ['https://example.com']
};
```

```vue
<ejs-pivotview
  id="SalesPivot"
  :enableWebMcp="true"
  :webMcpSettings="webMcpSettings"
  :dataSourceSettings="dataSourceSettings">
</ejs-pivotview>
```

| Setting | Behavior |
|---|---|
| `name` | Optional tool-name prefix. When omitted, the PivotView element `id` is used. Registered names have the form `<prefix>_<toolName>`. |
| `tools` | Optional array of tool names or `WebMcpTool` definitions. Omitted or empty registers the built-in tools; a non-empty list selects the tools to register. |
| `exposedTo` | Optional array of origins passed as the `exposedTo` registration option. The adapter omits this option when the array is empty. |

### Monitor or cancel a tool

`beforeWebMcpToolExecute` is raised before a tool handler runs. The event provides `toolName` and `toolArgs`. Set `args.cancel = true` to cancel execution; set `args.cancellationResponse` to supply the cancellation message. The adapter returns a cancelled response and does not run the tool handler.

Set `args.showConfirmationDialog = true` to request confirmation. However, the current core implementation does not show a user interface: its confirmation helper only logs a warning and returns `true`, and the flag is checked only in the fallback for an unimplemented tool. Do not treat it as confirmation for built-in PivotView tools. For a built-in action that needs approval, implement your own application confirmation and cancel through this event.

## Built-in PivotView tools

All tools below are registered with `readOnlyHint: false`. Unless otherwise noted, successful execution returns a WebMCP text content item containing JSON with `success`, `data`, and `message`; the `data` value is `{}`. Cancellation returns text JSON with `action`, `cancelled: true`, and `message`; errors return `isError: true` and a text message. Export handlers return the initiated file name in `data.fileName`. Note that their declared output schema says `filePath`, while the implementation currently returns `fileName`.

| Tool | Inputs | Behavior and prerequisites |
|---|---|---|
| `setDataSource` | `dataSource` array; optional `url`, `type` | Replaces source data; arrays of objects are treated as JSON and arrays of arrays as CSV. Although the schema marks `dataSource` required, the handler also accepts a URL; `type` can specify JSON or CSV, otherwise a URL ending in `.csv` is treated as CSV. |
| `addFieldToAxis` | `fieldName`, `axis` | Adds a field to `rows`, `columns`, `values`, or `filters`. |
| `removeFieldFromAxis` | `fieldName`, `axis` | Removes a named field from one of those four axes. |
| `moveFieldBetweenAxes` | `fieldName`, `fromAxis`, `toAxis` | Moves a named field between the four axes. |
| `applyFiltering` | `filters[]`: `name` (required), optional `type` (`Include`, `Exclude`, `Label`, `Date`, `Number`, `Value`), `items[]`, `condition`, `value1`, `value2` | Adds or updates filter settings. `value1` and `value2` accept strings or numbers; `value2` supports range conditions. |
| `applySorting` | `sortSettings[]`: `name`, `order` (`Ascending`, `Descending`, `None`) | Adds or updates sort settings. Requires `dataSourceSettings.enableSorting: true`. |
| `applyValueSorting` | `valueSortSettings`: required `headerText`, `sortOrder`; optional `headerDelimiter`, `columnHeaderText`, `columnSortOrder`, `rowHeaderText`, `rowSortOrder` | Sets value-based sorting. Requires `enableValueSorting: true`. |
| `clearAllFilters` | None | Clears all filter settings. |
| `applyConditionalFormatting` | `formatRules[]`: required `conditions`, `value1`, `style`; optional `measure`, `value2`, `style.backgroundColor`, `style.color`, `style.fontFamily`, `style.fontSize`, `applyGrandTotals` | Adds conditional formatting rules. Requires `allowConditionalFormatting: true` and the `ConditionalFormatting` module. |
| `manageCalculatedField` | `action` (`create`, `update`, `delete`), `fieldName`; `formula` for create/update | Creates, updates, or deletes a calculated field. Requires `allowCalculatedField: true` and the `CalculatedField` module. |
| `clearSorting` | None | Clears all sort settings. Requires `dataSourceSettings.enableSorting: true`. |
| `clearConditionalFormatting` | None | Clears conditional formatting rules. Requires `allowConditionalFormatting: true` and the `ConditionalFormatting` module. |
| `clearNumberFormatting` | None | Clears number-format settings. Requires `allowNumberFormatting: true` and the `NumberFormatting` module. |
| `exportToExcel` | Optional `exportProperties.fileName` (handler also accepts top-level `fileName`) | Initiates Excel export. Requires `allowExcelExport: true` and the `ExcelExport` module. |
| `exportToPDF` | Optional `exportProperties.fileName` (handler also accepts top-level `fileName`) | Initiates PDF export. Requires `allowPdfExport: true` and the `PDFExport` module. |
| `exportToCSV` | Optional `exportProperties.fileName` (handler also accepts top-level `fileName`) | Initiates CSV export. Requires `allowExcelExport: true` and the `ExcelExport` module. |
| `drillDownField` | `fieldName`, `axis` (`rows` or `columns`); optional `drillMembers[]`, `delimiter` | Expands a row/column field, or specified members. The field must be present on the selected axis; the default member delimiter is `**`. |
| `drillUpField` | `fieldName`, `axis` (`rows` or `columns`); optional `drillMembers[]`, `delimiter` | Collapses a row/column field, or specified members. The field must be present on the selected axis; the default member delimiter is `**`. |
| `expandAllHeaders` | None | Sets all headers to expanded. |
| `collapseAllHeaders` | None | Sets all headers to collapsed. |
| `setChartType` | `chartType` string | Sets `chartSettings.chartSeries.type`. Inject `PivotChart` when the page must render a PivotChart. |
| `toggleViewMode` | `viewMode`: `Table`, `Chart`, or `Both` | Changes `displayOption.view`. These values are case-sensitive in the handler; inject `PivotChart` to render chart view. |
| `applyNumberFormat` | `formatSettings[]`: required `name`; optional `format`, `useGrouping`, `currency` | Adds or updates number formatting. Requires `allowNumberFormatting: true` and the `NumberFormatting` module. |

To enable an optional feature tool, set its `allow...` property and add the listed module to the `pivotview` provider. For example, provide `NumberFormatting` when enabling number formatting, or `ExcelExport` when enabling Excel/CSV export.

## Example requests

- “Add `Sales` to the values axis and `Country` to rows.” — `addFieldToAxis`
- “Filter `Country` to France.” — `applyFiltering`
- “Sort the report by `Sales` descending.” — `applySorting`
- “Expand all headers.” — `expandAllHeaders`
- “Show the pivot chart as a line chart.” — `toggleViewMode` and `setChartType`
- “Export this pivot table as a CSV named `sales.csv`.” — `exportToCSV`

## Troubleshooting

- If no tools register, check that `enableWebMcp` is true, `WebMcpPivotView` is in the Vue `pivotview` provider, and `document.modelContext.registerTool` exists in the browser.
- If the console reports that `document.modelContext` is unavailable, enable WebMCP in Chrome as described above. The core logs a warning and skips registration when this API is absent.
- If an agent cannot find an expected name, check the `name` prefix, element `id`, and `tools` selection.
- If a feature tool reports that a feature is disabled or its module is missing, enable the listed `allow...` property and include the listed PivotView module in the `pivotview` provider.

## See also

- [Vue 3 Getting Started](./vue-3-getting-started)
- [Filtering](./filtering)
- [Sorting](./sorting)
- [Excel export](./excel-export)

## Sources

- [PivotView WebMCP adapter source](https://github.com/Syncfusion/ej2-javascript-ui-controls/blob/03de1a97556505c42f353cbd34a25673bd197c4b/controls/pivotview/src/pivotview/actions/webmcp-adapter.ts)
- [PivotView core source](https://github.com/Syncfusion/ej2-javascript-ui-controls/blob/03de1a97556505c42f353cbd34a25673bd197c4b/controls/pivotview/src/pivotview/base/pivotview.ts)
- [Vue PivotView wrapper exports](https://github.com/Syncfusion/ej2-vue-ui-components/blob/2fa364b894114d84f32381fe59b09a66ebad4ff3/components/pivotview/src/index.ts)
- [Vue PivotView wrapper properties and module injection](https://github.com/Syncfusion/ej2-vue-ui-components/blob/2fa364b894114d84f32381fe59b09a66ebad4ff3/components/pivotview/src/pivotview/pivotview.component.ts)
- [Vue 3 PivotView User Guide: Getting Started](./vue-3-getting-started)
- [Chrome WebMCP documentation](https://developer.chrome.com/docs/ai/webmcp)
