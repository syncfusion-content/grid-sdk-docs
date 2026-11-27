---
layout: post
title: WebMCP Getting Started with React Pivot Table | Syncfusion
description: Learn to enable browser-based WebMCP tools in the Syncfusion React Pivot Table with wrapper-based module injection and tool settings.
platform: grid-sdk
control: WebMCP
documentation: ug
domainurl: ##DomainURL##
---

# WebMCP Getting Started with React Pivot Table

WebMCP lets a browser-based AI agent discover and invoke structured tools exposed by a web page. The Syncfusion® Pivot Table registers tools for report changes, filtering, sorting, drill operations, formatting, charts, and export. The tools can change PivotView state or initiate exports; all built-in descriptors set `readOnlyHint: false`.

The React wrapper renders PivotView in the browser. The `WebMcpPivotView` module registers the tools through `document.modelContext.registerTool` when `enableWebMcp` is enabled.

## Browser requirements

This browser API is experimental. The [Chrome WebMCP documentation](https://developer.chrome.com/docs/ai/webmcp) describes an origin trial beginning with Chrome 149 and local testing with `chrome://flags/#enable-webmcp-testing`. Enable the flag and relaunch Chrome for local testing, or follow the current origin-trial instructions for an eligible deployed origin. Other browser/version support is not established by that documentation.

The page must expose `document.modelContext.registerTool`. The adapter skips registration and logs a warning if it is unavailable. The official WebMCP setup does not require the extension or API key mentioned in some unrelated demos.

## Create a React Pivot Table with WebMCP

Create a Vite React app and install the React PivotView and theme packages:

```bash
npm create vite@latest my-pivot-webmcp -- --template react
cd my-pivot-webmcp
npm install
npm install @syncfusion/ej2-react-pivotview @syncfusion/ej2-material3-theme
```

In `src/index.css`, replace the starter styles with the theme import:

```css
@import '@syncfusion/ej2-material3-theme/styles/pivotview/index.css';
```

Use the React wrapper component and its `Inject` component in `src/App.jsx`:

```jsx
import { Inject, PivotViewComponent, WebMcpPivotView } from '@syncfusion/ej2-react-pivotview';

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

export default function App() {
    return (
        <PivotViewComponent
            id="SalesPivot"
            height="350"
            enableWebMcp={true}
            webMcpSettings={webMcpSettings}
            dataSourceSettings={{
                dataSource: salesData,
                rows: [{ name: 'Country' }, { name: 'Category' }],
                columns: [{ name: 'Year' }],
                values: [{ name: 'Sales', type: 'Sum' }]
            }}>
            <Inject services={[WebMcpPivotView]} />
        </PivotViewComponent>
    );
}
```

Run the app with `npm run dev`, then open the local Vite URL in a supported Chrome build with WebMCP enabled. `Inject` supplies the wrapper’s module injection pattern; do not call the core static `PivotView.Inject` in this React example.

## Tool registration and settings

The adapter registers tools during PivotView initialization. The default name prefix is the rendered component element id; with `name: 'sales'`, registered tools use the `sales_<toolName>` form.

| Setting | Behavior |
|---|---|
| `name` | Optional tool-name prefix. If omitted, the component element id is used. |
| `tools` | Optional tool names or `WebMcpTool` definitions. Omitted or empty selects built-in tools. |
| `exposedTo` | Optional origin list passed to tool registration; omitted when empty. |

`beforeWebMcpToolExecute` runs before a tool handler. Its event arguments can set `cancel = true` and provide `cancellationResponse`. `showConfirmationDialog` requests confirmation, but the current core helper does not display a prompt; it is checked only in the unimplemented-tool fallback and does not confirm built-in PivotView actions.

## Built-in PivotView tools

Unless noted, success returns text content containing JSON with `success`, `data`, and `message`; `data` is `{}`. Cancellation returns `action`, `cancelled: true`, and `message`; errors set `isError: true`. Export handlers return the initiated file name as `data.fileName`, although the declared output schema says `filePath`.

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

## Example requests

- “Add `Sales` to values and `Country` to rows.” — `addFieldToAxis`
- “Filter `Country` to France.” — `applyFiltering`
- “Sort the report by `Sales` descending.” — `applySorting`
- “Expand all headers.” — `expandAllHeaders`
- “Show a line chart.” — `setChartType` and `toggleViewMode`
- “Export the report as `sales.csv`.” — `exportToCSV`

## Troubleshooting

- If no tools register, check `enableWebMcp`, confirm the `Inject` services include `WebMcpPivotView`, and verify `document.modelContext.registerTool` is available.
- If an agent cannot find tool names, check the component id or configured `webMcpSettings.name`.
- If a feature tool reports that a feature is unavailable, enable its listed property and inject its required module.

## See also

- [Getting Started with React Pivot Table](./getting-started)
- [Filtering](./filtering)
- [Sorting](./sorting)
- [Excel export](./excel-export)

## Sources

- [PivotView WebMCP adapter source](https://github.com/Syncfusion/ej2-javascript-ui-controls/blob/03de1a97556505c42f353cbd34a25673bd197c4b/controls/pivotview/src/pivotview/actions/webmcp-adapter.ts)
- [PivotView core source](https://github.com/Syncfusion/ej2-javascript-ui-controls/blob/03de1a97556505c42f353cbd34a25673bd197c4b/controls/pivotview/src/pivotview/base/pivotview.ts)
- [React PivotView wrapper exports](https://github.com/Syncfusion/ej2-react-ui-components/blob/master/components/pivotview/src/index.ts)
- [React Pivot Table Getting Started](./getting-started)
- [Chrome WebMCP documentation](https://developer.chrome.com/docs/ai/webmcp)
