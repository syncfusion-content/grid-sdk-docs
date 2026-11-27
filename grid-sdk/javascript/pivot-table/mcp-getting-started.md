---
layout: post
title: WebMCP tool integration for JavaScript Pivot Table | Syncfusion
description: Learn how to integrate WebMCP with the Syncfusion JavaScript Pivot Table, configure tools, and control their execution.
platform: grid-sdk
control: WebMCP
documentation: ug
domainurl: ##DomainURL##
---

# WebMCP Tools Integration for Syncfusion® JavaScript Pivot Table

WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® components through natural language prompts. Instead of relying on DOM inspection or simulated user interactions, an AI assistant can use structured tools to update a Pivot Table report, apply filters and sorting, drill through headers, format values, change chart views, and export the report. All built-in PivotView tool descriptors set `readOnlyHint: false`.

The `WebMcpPivotView` adapter runs in the browser and registers tools through `document.modelContext.registerTool`. This guide uses the JavaScript core package, `@syncfusion/ej2-pivotview`.

## Prerequisites

- Syncfusion® JavaScript Pivot Table package
- Node.js and Vite
- A Chromium-based browser with WebMCP support

## WebMCP setup

This browser API is experimental. The [Chrome documentation for this API](https://developer.chrome.com/docs/ai/webmcp) describes an origin trial beginning with Chrome 149 and local testing with `chrome://flags/#enable-webmcp-testing`. Enable the flag and relaunch Chrome for local testing, or follow the current origin-trial instructions for an eligible deployed origin. Other browser/version support is not established by that documentation.

The page must expose `document.modelContext.registerTool`. The adapter skips registration and logs a warning if this API is unavailable. The official WebMCP setup does not require the extension or API key mentioned in some unrelated demos.

## Tools

Unless noted, successful calls return text content containing JSON with `success`, `data`, and `message`; `data` is `{}`. Cancellation returns `action`, `cancelled: true`, and `message`; errors set `isError: true`. Export handlers return the initiated file name as `data.fileName`, although the declared schema says `filePath`.

| Tool | Inputs | Behavior and prerequisites |
|---|---|---|
| `setDataSource` | `dataSource` array; optional `url`, `type` | Replaces the source; object arrays are JSON and array-of-arrays are CSV. The schema requires `dataSource`, but the handler also accepts a URL; `type` may be JSON or CSV, and `.csv` URLs default to CSV. |
| `addFieldToAxis` | `fieldName`, `axis` | Adds a field to `rows`, `columns`, `values`, or `filters`. |
| `removeFieldFromAxis` | `fieldName`, `axis` | Removes a field from one of those axes. |
| `moveFieldBetweenAxes` | `fieldName`, `fromAxis`, `toAxis` | Moves a field between the four axes. |
| `applyFiltering` | `filters[]`: required `name`; optional `type` (`Include`, `Exclude`, `Label`, `Date`, `Number`, `Value`), `items[]`, `condition`, `value1`, `value2` | Adds or updates filter settings; values may be strings or numbers and `value2` supports ranges. |
| `applySorting` | `sortSettings[]`: `name`, `order` (`Ascending`, `Descending`, `None`) | Adds or updates sorts; requires `dataSourceSettings.enableSorting: true`. |
| `applyValueSorting` | `valueSortSettings`: `headerText`, `sortOrder`; optional `headerDelimiter`, `columnHeaderText`, `columnSortOrder`, `rowHeaderText`, `rowSortOrder` | Sets value sorting; requires `enableValueSorting: true`. |
| `clearAllFilters` | None | Clears all filters. |
| `applyConditionalFormatting` | `formatRules[]`: `conditions`, `value1`, `style`; optional `measure`, `value2`, `style.backgroundColor`, `style.color`, `style.fontFamily`, `style.fontSize`, `applyGrandTotals` | Adds rules; requires `allowConditionalFormatting: true` and `ConditionalFormatting`. |
| `manageCalculatedField` | `action` (`create`, `update`, `delete`), `fieldName`; `formula` for create/update | Manages a calculated field; requires `allowCalculatedField: true` and `CalculatedField`. |
| `clearSorting` | None | Clears all sorts; requires `dataSourceSettings.enableSorting: true`. |
| `clearConditionalFormatting` | None | Clears rules; requires `allowConditionalFormatting: true` and `ConditionalFormatting`. |
| `clearNumberFormatting` | None | Clears number formats; requires `allowNumberFormatting: true` and `NumberFormatting`. |
| `exportToExcel` | Optional `exportProperties.fileName` or top-level `fileName` | Initiates Excel export; requires `allowExcelExport: true` and `ExcelExport`. |
| `exportToPDF` | Optional `exportProperties.fileName` or top-level `fileName` | Initiates PDF export; requires `allowPdfExport: true` and `PDFExport`. |
| `exportToCSV` | Optional `exportProperties.fileName` or top-level `fileName` | Initiates CSV export; requires `allowExcelExport: true` and `ExcelExport`. |
| `drillDownField` | `fieldName`, `axis` (`rows` or `columns`); optional `drillMembers[]`, `delimiter` | Expands a field or members on the selected axis; default member delimiter is `**`. |
| `drillUpField` | `fieldName`, `axis` (`rows` or `columns`); optional `drillMembers[]`, `delimiter` | Collapses a field or members on the selected axis; default member delimiter is `**`. |
| `expandAllHeaders` | None | Expands all headers. |
| `collapseAllHeaders` | None | Collapses all headers. |
| `setChartType` | `chartType` string | Sets `chartSettings.chartSeries.type`; inject `PivotChart` to render a PivotChart. |
| `toggleViewMode` | `viewMode`: `Table`, `Chart`, or `Both` | Sets `displayOption.view`; values are case-sensitive and chart rendering needs `PivotChart`. |
| `applyNumberFormat` | `formatSettings[]`: required `name`; optional `format`, `useGrouping`, `currency` | Adds or updates number formatting; requires `allowNumberFormatting: true` and `NumberFormatting`. |

The module names are the PivotView core exports. Include the relevant modules and `allow...` properties when using feature-dependent tools.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into a Syncfusion® JavaScript Pivot Table.

### Step 1: Set up the JavaScript project

Create a Vite vanilla JavaScript app and install the PivotView package and a theme:

```bash
npm create vite@latest my-pivot-webmcp -- --template vanilla
cd my-pivot-webmcp
npm install
npm install @syncfusion/ej2-pivotview @syncfusion/ej2-material3-theme
```

In `src/style.css`, use the PivotView theme:

```css
@import '@syncfusion/ej2-material3-theme/styles/pivotview/index.css';
```

### Step 2: Enable WebMCP support

Import `WebMcpPivotView` and inject it with `PivotView.Inject(WebMcpPivotView)`.

### Step 3: Register component tools

Set `enableWebMcp: true` on the PivotView instance to register the built-in tools.

`src/main.js`:

```javascript
import './style.css';
import { PivotView, WebMcpPivotView } from '@syncfusion/ej2-pivotview';

PivotView.Inject(WebMcpPivotView);

const salesData = [
    { Country: 'France', Category: 'Bikes', Year: '2025', Sales: 1200 },
    { Country: 'France', Category: 'Parts', Year: '2025', Sales: 450 },
    { Country: 'Germany', Category: 'Bikes', Year: '2025', Sales: 980 }
];

const webMcpSettings = {
    name: 'sales',
    tools: [],
    exposedTo: []
};

const pivot = new PivotView({
    height: 350,
    enableWebMcp: true,
    webMcpSettings,
    dataSourceSettings: {
        dataSource: salesData,
        rows: [{ name: 'Country' }, { name: 'Category' }],
        columns: [{ name: 'Year' }],
        values: [{ name: 'Sales', type: 'Sum' }]
    }
});

pivot.appendTo('#SalesPivot');
```

In `index.html`, provide the element that matches the `appendTo` selector:

```html
<div id="SalesPivot"></div>
```

Run the app with `npm run dev`, then open the local Vite URL in a supported Chrome build with WebMCP enabled.

### Step 4: Customize tool registration

When enabled, the adapter registers tools during PivotView initialization. The default tool-name prefix is the PivotView element `id`; with `name: 'sales'`, registered tool names use the `sales_<toolName>` form.

| Setting | Behavior |
|---|---|
| `name` | Optional tool-name prefix. If omitted, the component element id is used. |
| `tools` | Optional tool names or `WebMcpTool` definitions. Omitted or empty selects the built-in tools. |
| `exposedTo` | Optional origin list passed to tool registration. The adapter omits the option when the list is empty. |

### Step 5: Monitor and control tool execution

`beforeWebMcpToolExecute` runs before a tool handler. Its event arguments can set `cancel = true` and provide `cancellationResponse`. Use it to validate requests, audit tool usage, or cancel operations. `showConfirmationDialog` does not display a prompt for built-in PivotView actions; use the event to enforce application-specific rules.

## Example requests

- “Add `Sales` to values and `Country` to rows.” — `addFieldToAxis`
- “Filter `Country` to France.” — `applyFiltering`
- “Sort the report by `Sales` descending.” — `applySorting`
- “Expand all headers.” — `expandAllHeaders`
- “Show a line chart.” — `setChartType` and `toggleViewMode`
- “Export the report as `sales.csv`.” — `exportToCSV`

## Troubleshooting

- If no tools register, check `enableWebMcp`, adapter injection, and whether `document.modelContext.registerTool` is available in the browser.
- If an agent cannot find tool names, check the element id or configured `webMcpSettings.name`.
- If a feature tool reports that a feature is unavailable, enable its listed property and inject its required module.

## Best practices

- Expose only the tools required by the application using `webMcpSettings.tools`.
- Use the `name` property when multiple PivotView instances exist on the same page.
- Configure `exposedTo` for the origins allowed by the application.
- Validate requests and cancel disallowed operations in `beforeWebMcpToolExecute`.
- Enable the required PivotView feature properties and modules for feature-dependent tools.

## Explore the demo

Explore the Syncfusion® JavaScript Pivot Table with WebMCP integration through this [demo](https://demos.syncfusion.com/grid-sdk/pivot-table/webmcp/index.html).

## See also

- [Getting Started](./getting-started)
- [Filtering](./filtering)
- [Sorting](./sorting)
- [Excel export](./excel-export)

## Sources

- [PivotView WebMCP adapter source](https://raw.githubusercontent.com/Syncfusion/ej2-javascript-ui-controls/03de1a97556505c42f353cbd34a25673bd197c4b/controls/pivotview/src/pivotview/actions/webmcp-adapter.ts)
- [PivotView core source](https://raw.githubusercontent.com/Syncfusion/ej2-javascript-ui-controls/03de1a97556505c42f353cbd34a25673bd197c4b/controls/pivotview/src/pivotview/base/pivotview.ts)
- [JavaScript Pivot Table Getting Started](./getting-started)
- [Chrome documentation for this API](https://developer.chrome.com/docs/ai/webmcp)
