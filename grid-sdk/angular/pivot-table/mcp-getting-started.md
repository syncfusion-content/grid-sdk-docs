---
layout: post
title: WebMCP tool integration for Angular Pivot Table | Syncfusion
description: Learn how to integrate WebMCP with the Syncfusion Angular Pivot Table, configure tools, and control their execution.
control: WebMCP
platform: grid-sdk
documentation: ug
domainurl: ##DomainURL##
---

# WebMCP Tools Integration for Syncfusion® Angular Pivot Table

WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® components through natural language prompts. Instead of relying on DOM inspection or simulated user interactions, an AI assistant can use structured tools to update a Pivot Table report, apply filters and sorting, drill through headers, format values, change chart views, and export the report.

The Angular wrapper supplies the PivotView component and its module providers. `PivotViewAllModule` includes `WebMcpPivotViewService`, which provides the core adapter when `enableWebMcp` is enabled. Registration runs in the browser through `document.modelContext.registerTool`.

> WebMCP is an experimental browser capability. Availability and setup requirements may change as the specification evolves.

## Prerequisites

- Syncfusion® Angular Pivot Table packages
- Angular CLI and Node.js
- A Chromium-based browser with WebMCP support

## WebMCP setup

The [Chrome documentation for WebMCP](https://developer.chrome.com/docs/ai/webmcp) describes an origin trial beginning with Chrome 149 and local testing with `chrome://flags/#enable-webmcp-testing`. Enable the flag and relaunch Chrome for local testing, or follow the current origin-trial instructions for an eligible deployed origin. Other browser/version support is not established by that documentation.

The page must expose `document.modelContext.registerTool`. The adapter skips registration and logs a warning if it is unavailable. The official WebMCP setup does not require the extension or API key mentioned in some unrelated demos.

## Tools

The built-in PivotView tools update report state or initiate exports; all built-in descriptors set `readOnlyHint: false`. Unless noted, successful calls return JSON text with `success`, `data`, and `message`. Cancellation returns an action, cancellation status, and message; errors set `isError: true`.

| Tool | What it does | Changes | On by default | Needs confirmation |
| --- | --- | --- | --- | --- |
| `setDataSource` | Replaces the source with a `dataSource` array; object arrays are JSON and array-of-arrays are CSV. The schema requires `dataSource`, but the handler also accepts `url` and `type` (`JSON` or `CSV`); `.csv` URLs default to CSV. | DataMutation | Yes | No |
| `addFieldToAxis` | Adds `fieldName` to `rows`, `columns`, `values`, or `filters` using `axis`. | ViewStateMutation | Yes | No |
| `removeFieldFromAxis` | Removes `fieldName` from the specified `axis`. | ViewStateMutation | Yes | No |
| `moveFieldBetweenAxes` | Moves `fieldName` from `fromAxis` to `toAxis`. | ViewStateMutation | Yes | No |
| `applyFiltering` | Adds or updates `filters[]` entries with a required `name` and optional `type`, `items`, `condition`, `value1`, and `value2`. Supported types are `Include`, `Exclude`, `Label`, `Date`, `Number`, and `Value`; values may be strings or numbers, and `value2` supports ranges. | ViewStateMutation | Yes | No |
| `applySorting` | Adds or updates `sortSettings[]` entries with `name` and `order` (`Ascending`, `Descending`, or `None`). Requires `dataSourceSettings.enableSorting: true`. | ViewStateMutation | Yes | No |
| `applyValueSorting` | Sets `valueSortSettings` with `headerText` and `sortOrder`, and optional `headerDelimiter`, `columnHeaderText`, `columnSortOrder`, `rowHeaderText`, and `rowSortOrder`. Requires `enableValueSorting: true`. | ViewStateMutation | Yes | No |
| `clearAllFilters` | Clears all filters. | ViewStateMutation | Yes | No |
| `applyConditionalFormatting` | Adds `formatRules[]` with `conditions`, `value1`, and `style`; optional properties include `measure`, `value2`, `style.backgroundColor`, `style.color`, `style.fontFamily`, `style.fontSize`, and `applyGrandTotals`. Requires `allowConditionalFormatting: true` and `ConditionalFormatting`. | ViewStateMutation | Yes | No |
| `manageCalculatedField` | Creates, updates, or deletes a calculated field using `action` (`create`, `update`, or `delete`) and `fieldName`; create and update also require `formula`. Requires `allowCalculatedField: true` and `CalculatedField`. | ViewStateMutation | Yes | No |
| `clearSorting` | Clears all sorts. Requires `dataSourceSettings.enableSorting: true`. | ViewStateMutation | Yes | No |
| `clearConditionalFormatting` | Clears conditional formatting rules. Requires `allowConditionalFormatting: true` and `ConditionalFormatting`. | ViewStateMutation | Yes | No |
| `clearNumberFormatting` | Clears number formats. Requires `allowNumberFormatting: true` and `NumberFormatting`. | ViewStateMutation | Yes | No |
| `exportToExcel` | Initiates Excel export; accepts an optional file name through `exportProperties.fileName` or `fileName`. Requires `allowExcelExport: true` and `ExcelExport`. | ExternalExport | Yes | No |
| `exportToPDF` | Initiates PDF export; accepts an optional file name through `exportProperties.fileName` or `fileName`. Requires `allowPdfExport: true` and `PDFExport`. | ExternalExport | Yes | No |
| `exportToCSV` | Initiates CSV export; accepts an optional file name through `exportProperties.fileName` or `fileName`. Requires `allowExcelExport: true` and `ExcelExport`. | ExternalExport | Yes | No |
| `drillDownField` | Expands a field or members on the `rows` or `columns` axis using `fieldName`, `axis`, and optional `drillMembers` and `delimiter`. The default member delimiter is `**`. | ViewStateMutation | Yes | No |
| `drillUpField` | Collapses a field or members on the `rows` or `columns` axis using `fieldName`, `axis`, and optional `drillMembers` and `delimiter`. The default member delimiter is `**`. | ViewStateMutation | Yes | No |
| `expandAllHeaders` | Expands all headers. | ViewStateMutation | Yes | No |
| `collapseAllHeaders` | Collapses all headers. | ViewStateMutation | Yes | No |
| `setChartType` | Sets `chartSettings.chartSeries.type` using `chartType`. Inject `PivotChart` to render a PivotChart. | ViewStateMutation | Yes | No |
| `toggleViewMode` | Sets `displayOption.view` to `Table`, `Chart`, or `Both`. Values are case-sensitive; chart rendering requires `PivotChart`. | ViewStateMutation | Yes | No |
| `applyNumberFormat` | Adds or updates `formatSettings[]` entries with a required `name` and optional `format`, `useGrouping`, and `currency`. Requires `allowNumberFormatting: true` and `NumberFormatting`. | ViewStateMutation | Yes | No |

The `Needs confirmation` column indicates whether the built-in tool displays a confirmation prompt. `showConfirmationDialog` does not display a prompt for built-in PivotView actions; `beforeWebMcpToolExecute` can cancel a tool call.

The module names in the requirements column are PivotView core exports. In Angular, use the corresponding wrapper services, such as `ExcelExportService`, `PDFExportService`, `ConditionalFormattingService`, `NumberFormattingService`, `CalculatedFieldService`, and `PivotChartService`. `PivotViewAllModule` includes these services; provide the corresponding services when importing modules individually.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into a Syncfusion® Angular Pivot Table.

### Step 1: Set up the Angular project

Create a standalone Angular application and install the PivotView and theme packages:

```bash
ng new my-pivot-webmcp --standalone --style=css
cd my-pivot-webmcp
npm install @syncfusion/ej2-angular-pivotview @syncfusion/ej2-material3-theme
```

In `src/styles.css`, import the PivotView styles:

```css
@import '../node_modules/@syncfusion/ej2-material3-theme/styles/pivotview/index.css';
```

### Step 2: Enable WebMCP support

Import `PivotViewAllModule` into the standalone component. It provides the `<ejs-pivotview>` component and `WebMcpPivotViewService`.

### Step 3: Register component tools

Set `enableWebMcp` to `true` to register the built-in tools with the WebMCP runtime. The adapter registers tools during PivotView initialization.

`src/app/app.ts`:

```typescript
import { Component } from '@angular/core';
import { PivotViewAllModule, type IDataSet } from '@syncfusion/ej2-angular-pivotview';

const salesData: IDataSet[] = [
    { Country: 'France', Category: 'Bikes', Year: '2025', Sales: 1200 },
    { Country: 'France', Category: 'Parts', Year: '2025', Sales: 450 },
    { Country: 'Germany', Category: 'Bikes', Year: '2025', Sales: 980 }
];

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [PivotViewAllModule],
    template: `
        <ejs-pivotview
            id="SalesPivot"
            height="350"
            [enableWebMcp]="true"
            [webMcpSettings]="webMcpSettings"
            [dataSourceSettings]="dataSourceSettings">
        </ejs-pivotview>
    `
})
export class App {
    public webMcpSettings = {
        name: 'sales',
        tools: [],
        exposedTo: []
    };

    public dataSourceSettings = {
        dataSource: salesData,
        rows: [{ name: 'Country' }, { name: 'Category' }],
        columns: [{ name: 'Year' }],
        values: [{ name: 'Sales', type: 'Sum' }]
    };
}
```

Run the app with `ng serve`, then open the local URL in a supported Chrome build with WebMCP enabled.

### Step 4: Customize tool registration

Use `webMcpSettings` to customize how the tools are exposed. The default tool-name prefix is the rendered PivotView element id. With `name: 'sales'`, registered tool names use the `sales_<toolName>` form.

| Property | Description |
| --- | --- |
| `name` | Optional prefix applied to registered tool names. Defaults to the component element id. |
| `tools` | Optional tool names or `WebMcpTool` definitions. When omitted or empty, the built-in tools are selected. |
| `exposedTo` | Optional origins passed to tool registration; omitted when empty. |

### Step 5: Monitor and control tool execution

The `beforeWebMcpToolExecute` event runs before a tool handler. Its event arguments can set `cancel = true` and provide `cancellationResponse`. Use this event to audit tool usage, validate requests, cancel operations, and apply application-specific rules.

> AI-generated requests should be validated before executing operations that change report state or initiate exports. Use `beforeWebMcpToolExecute` to enforce application-specific rules.

## Best practices

- Expose only the tools required by the application by configuring `webMcpSettings.tools`.
- Use the `name` property when multiple PivotView instances exist on the same page.
- Configure `exposedTo` with the origins allowed by the application.
- Monitor tool activity and validate requests in `beforeWebMcpToolExecute`.
- Enable the required PivotView feature properties and modules for feature-dependent tools.

## Explore the demo

Explore the Syncfusion® Angular Pivot Table with WebMCP integration through this [demo](https://demos.syncfusion.com/grid-sdk/pivot-table/webmcp/index.html).