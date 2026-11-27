---
layout: post
title: WebMCP tool integration for ASP.NET Core Pivot Table | Syncfusion
description: Learn how to integrate WebMCP with the Syncfusion ASP.NET Core Pivot Table, configure tools, and control their execution.
platform: grid-sdk
control: WebMCP
documentation: ug
---

# WebMCP Tools Integration for Syncfusion® ASP.NET Core Pivot Table

WebMCP lets a browser-based AI agent discover and invoke structured tools exposed by a web page. The Syncfusion® Pivot Table registers tools for PivotView report changes, filtering, sorting, drill operations, formatting, charts, and export. These tools change PivotView state or initiate exports; the core descriptors mark every built-in tool `readOnlyHint: false`.

ASP.NET Core hosts the PivotView control in a Razor page, but WebMCP is configured by the JavaScript PivotView running in the browser. The .NET wrapper exposes the `EnableWebMcp` property; WebMCP is not a server-side .NET API.

## Prerequisites

- Syncfusion® ASP.NET Core Pivot Table package
- .NET SDK
- A Chromium-based browser with WebMCP support

## WebMCP setup

The [Chrome AI documentation](https://developer.chrome.com/docs/ai/) describes the WebMCP origin-trial and local-testing setup. WebMCP is experimental, and browser/version availability may change.

For local testing with the browser extension:

1. Enable **WebMCP for testing** in `chrome://flags/` and relaunch Chrome. The extension listing currently requires Chrome 155.0.8052.0 or later.
2. Install [WebMCP - Model Context Tool Inspector](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd) from the Chrome Web Store.
3. To use Gemini through the extension, create or copy an API key from [Google AI Studio](https://aistudio.google.com/app/apikey) and enter it in the extension.

The extension can also inspect and invoke tools manually. It is optional: the PivotView adapter registers tools through `document.modelContext.registerTool` when the browser API is available, without the extension or an API key. The extension listing warns that it does not provide production-level security boundaries; do not use it on untrusted websites.

## Tools

All tools below are registered with `readOnlyHint: false`. Unless otherwise noted, successful execution returns a WebMCP text content item containing JSON with `success`, `data`, and `message`; the `data` value is `{}`. Cancellation responses contain an action, a cancellation status, and a message; errors return `isError: true` and a text message. Export handlers return the initiated file name in `data.fileName`. Note that their declared output schema says `filePath`, while the implementation currently returns `fileName`.

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

The module names are the PivotView core exports. Set each related `allow...` property when its tool requires it; ensure the ASP.NET Core package version ships the matching browser module before enabling optional feature tools.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into a Syncfusion® ASP.NET Core Pivot Table.

### Step 1: Set up the ASP.NET Core project

Create a Razor Pages app and install the ASP.NET Core PivotView and theme packages, following [Getting Started with ASP.NET Core Pivot Table](./getting-started).

```bash
dotnet add package Syncfusion.AspNetCore.PivotView
dotnet add package Syncfusion.AspNetCore.Themes
```

### Step 2: Enable WebMCP support

Add the Tag Helpers in `Pages/_ViewImports.cshtml`, and reference the Syncfusion PivotView script and theme and `<ejs-scripts>` in the shared layout as shown in the [ASP.NET Core getting-started guide](./getting-started). On the Razor page, set the verified `enableWebMcp` Tag Helper property to `true`. The generated PivotView element id is used as the default tool-name prefix.

### Step 3: Register component tools

`Pages/Index.cshtml`:

```cshtml
@page
@model PivotWebMcp.Pages.IndexModel

<ejs-pivotview id="SalesPivot" height="350" enableWebMcp="true">
    <e-datasourcesettings dataSource="@Model.SalesData" expandAll="true">
        <e-rows>
            <e-field name="Country"></e-field>
            <e-field name="Category"></e-field>
        </e-rows>
        <e-columns>
            <e-field name="Year"></e-field>
        </e-columns>
        <e-values>
            <e-field name="Sales"></e-field>
        </e-values>
    </e-datasourcesettings>
</ejs-pivotview>
```

`Pages/Index.cshtml.cs`:

```csharp
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace PivotWebMcp.Pages
{
    public class IndexModel : PageModel
    {
        public List<SalesRecord> SalesData { get; } = new()
        {
            new SalesRecord { Country = "France", Category = "Bikes", Year = "2025", Sales = 1200 },
            new SalesRecord { Country = "France", Category = "Parts", Year = "2025", Sales = 450 },
            new SalesRecord { Country = "Germany", Category = "Bikes", Year = "2025", Sales = 980 }
        };
    }

    public class SalesRecord
    {
        public string Country { get; set; }
        public string Category { get; set; }
        public string Year { get; set; }
        public int Sales { get; set; }
    }
}
```

Run the app with `dotnet run`, then open it in a Chrome build with WebMCP enabled. The Tag Helper configures a browser PivotView; the WebMCP adapter calls `document.modelContext.registerTool(tool, options)` in that page.

### Step 4: Customize tool registration

The ASP.NET Core API reference exposes `PivotView.WebMcpSettings` as a `PivotViewWebMcpSettings` object. Its documented properties are `Name`, `Tools`, and `ExposedTo`. Their core behavior is:

| Property | Behavior |
|---|---|
| `Name` | Optional tool-name prefix. When omitted, the PivotView element `id` is used. Registered names have the form `<prefix>_<toolName>`. |
| `Tools` | Optional list of tool names or `WebMcpTool` definitions. When omitted or empty, the core registers the built-in tools. The ASP.NET Core API reference types this property as `object`; it does not document how to express the alternatives in Razor Tag Helper syntax. |
| `ExposedTo` | Optional list of origins passed as the `exposedTo` registration option. The adapter omits this option when the list is empty. |

**Unresolved wrapper syntax:** The published ASP.NET Core API reference confirms `EnableWebMcp` and the `PivotViewWebMcpSettings` properties, but does not show the Razor syntax for assigning a `WebMcpSettings` object or a custom `Tools` collection. The runnable sample therefore uses the verified enable flag and default settings (all built-in tools); it does not guess the nested-settings syntax.

### Step 5: Monitor and control tool execution

In the core implementation, `beforeWebMcpToolExecute` runs before a tool handler and receives `toolName` and `toolArgs`. Setting `cancel` to `true` cancels execution; `cancellationResponse` optionally supplies the cancellation message. Setting `showConfirmationDialog` requests confirmation, but the current implementation does not display a confirmation UI: its confirmation helper only logs a warning and returns `true`, and the flag is checked only in the fallback for an unimplemented tool. Do not treat it as confirmation for built-in PivotView tools.

**Unresolved wrapper syntax:** The ASP.NET Core API reference does not provide a verified `beforeWebMcpToolExecute` Razor callback example or confirm the callback argument shape for this wrapper. Bind a client-side callback only after verifying that syntax against the target package version.

## Example requests

- “Add `Sales` to the values axis and `Country` to rows.” — `addFieldToAxis`
- “Filter `Country` to France.” — `applyFiltering`
- “Sort the report by `Sales` descending.” — `applySorting`
- “Expand all headers.” — `expandAllHeaders`
- “Show the pivot chart as a line chart.” — `toggleViewMode` and `setChartType`
- “Export this pivot table as a CSV named `sales.csv`.” — `exportToCSV`

## Troubleshooting

- If no tools register, check `enableWebMcp`, confirm the browser page exposes `document.modelContext.registerTool`, and check the browser's WebMCP flag/origin-trial setup.
- If the console reports that `document.modelContext` is unavailable, the core adapter skips registration and logs a warning; enable WebMCP in Chrome as described above.
- If an agent cannot find an expected name, check the element `id`. The default prefix is the rendered PivotView element id.
- If a feature tool reports that a feature is disabled or its module is missing, enable the listed `allow...` property and confirm that the browser-side PivotView build includes the required module.

## Best practices

- Enable only the PivotView features required by the application and include their corresponding browser modules.
- Use a unique PivotView element id when multiple instances are present.
- Apply application-specific validation before executing operations that change report state or initiate exports.
- Do not assume Razor syntax for WebMCP callbacks or nested settings that is not documented by the ASP.NET Core wrapper.

## Explore the demo

Explore the Syncfusion® ASP.NET Core Pivot Table with WebMCP integration through this [demo](https://demos.syncfusion.com/grid-sdk/pivot-table/webmcp/index.html).

## See also

- [Getting Started](./getting-started)
- [Filtering](./filtering)
- [Sorting](./sorting)
- [Excel export](./excel-export)

## Sources

- [PivotView WebMCP adapter source](https://raw.githubusercontent.com/Syncfusion/ej2-javascript-ui-controls/03de1a97556505c42f353cbd34a25673bd197c4b/controls/pivotview/src/pivotview/actions/webmcp-adapter.ts)
- [PivotView core source](https://raw.githubusercontent.com/Syncfusion/ej2-javascript-ui-controls/03de1a97556505c42f353cbd34a25673bd197c4b/controls/pivotview/src/pivotview/base/pivotview.ts)
- [ASP.NET Core PivotView API reference](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PivotView.PivotView.html)
- [ASP.NET Core PivotView WebMCP settings API reference](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PivotView.PivotViewWebMcpSettings.html)
- [ASP.NET Core PivotView User Guide: Getting Started](./getting-started)
- [Chrome documentation for this API](https://developer.chrome.com/docs/ai/webmcp)
