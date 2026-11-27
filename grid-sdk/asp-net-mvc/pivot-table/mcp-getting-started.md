---
layout: post
title: WebMCP tool integration for ASP.NET MVC Pivot Table | Syncfusion
description: Learn how to integrate WebMCP with the Syncfusion ASP.NET MVC Pivot Table, configure tools, and control their execution.
platform: grid-sdk
control: WebMCP
documentation: ug
---

# WebMCP Tools Integration for Syncfusion® ASP.NET MVC Pivot Table

WebMCP lets a browser-based AI agent discover and invoke structured tools exposed by a web page. The Syncfusion® Pivot Table registers tools for PivotView report changes, filtering, sorting, drill operations, formatting, charts, and export. These tools change PivotView state or initiate exports; all built-in descriptors set `readOnlyHint: false`.

ASP.NET MVC renders PivotView in the browser. The MVC HTML helper exposes `EnableWebMcp`; the WebMCP adapter is JavaScript running in the page, not a server-side .NET API.

## Prerequisites

- Syncfusion® ASP.NET MVC Pivot Table package
- Visual Studio or the .NET Framework development tools
- A Chromium-based browser with WebMCP support

## WebMCP setup

The [Chrome AI documentation](https://developer.chrome.com/docs/ai/) describes the WebMCP origin-trial and local-testing setup. WebMCP is experimental, and browser/version availability may change.

For local testing with the browser extension:

1. Enable **WebMCP for testing** in `chrome://flags/` and relaunch Chrome. The extension listing currently requires Chrome 155.0.8052.0 or later.
2. Install [WebMCP - Model Context Tool Inspector](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd) from the Chrome Web Store.
3. To use Gemini through the extension, create or copy an API key from [Google AI Studio](https://aistudio.google.com/app/apikey) and enter it in the extension.

The extension can also inspect and invoke tools manually. It is optional: the PivotView adapter registers tools through `document.modelContext.registerTool` when the browser API is available, without the extension or an API key. The extension listing warns that it does not provide production-level security boundaries; do not use it on untrusted websites.

## Tools

Unless otherwise noted, successful execution returns text content containing JSON with `success`, `data`, and `message`; `data` is `{}`. Cancellation responses contain an action, a cancellation status, and a message; errors set `isError: true`. Export handlers return the initiated file name as `data.fileName`, although the declared output schema says `filePath`.

| Tool | Inputs | Behavior and prerequisites |
|---|---|---|
| `setDataSource` | `dataSource` array; optional `url`, `type` | Replaces source data; arrays of objects are JSON and arrays of arrays are CSV. The schema requires `dataSource`, but the handler also accepts a URL; `type` may be JSON or CSV, and `.csv` URLs default to CSV. |
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

The module names are the PivotView core exports. Set each related `allow...` property when its tool requires it and confirm the MVC package's browser build includes the module.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into a Syncfusion® ASP.NET MVC Pivot Table.

### Step 1: Set up the ASP.NET MVC project

Create an ASP.NET MVC application and install the Syncfusion MVC5 package as described in [Getting Started with ASP.NET MVC Pivot Table](./getting-started):

```powershell
Install-Package Syncfusion.EJ2.MVC5
```

### Step 2: Enable WebMCP support

Add the Syncfusion script and theme references and `@Html.EJS().ScriptManager()` to the shared layout as shown in the getting-started guide. In a Razor view, use the MVC `PivotView` HTML helper and set the verified `EnableWebMcp(true)` property.

### Step 3: Register component tools

`Views/Home/Index.cshtml`:

```cshtml
@using System.Collections.Generic

@(Html.EJS().PivotView("SalesPivot")
    .Height("350")
    .EnableWebMcp(true)
    .DataSourceSettings(settings => settings
        .DataSource((IEnumerable<object>)ViewBag.SalesData)
        .ExpandAll(true)
        .Rows(rows =>
        {
            rows.Name("Country").Add();
            rows.Name("Category").Add();
        })
        .Columns(columns =>
        {
            columns.Name("Year").Add();
        })
        .Values(values =>
        {
            values.Name("Sales").Type("Sum").Add();
        })
    )
    .Render())
```

In `Controllers/HomeController.cs`, provide data for the view:

```csharp
using System.Collections.Generic;
using System.Web.Mvc;

namespace PivotWebMcp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.SalesData = new List<object>
            {
                new { Country = "France", Category = "Bikes", Year = "2025", Sales = 1200 },
                new { Country = "France", Category = "Parts", Year = "2025", Sales = 450 },
                new { Country = "Germany", Category = "Bikes", Year = "2025", Sales = 980 }
            };
            return View();
        }
    }
}
```

Run the MVC application and open the page in a supported Chrome build with WebMCP enabled. The MVC helper configures the browser PivotView; the adapter registers tools through `document.modelContext.registerTool`.

### Step 4: Customize tool registration

The ASP.NET MVC API reference exposes `PivotView.WebMcpSettings` as a `PivotViewWebMcpSettings` object with `Name`, `Tools`, and `ExposedTo` properties.

| Property | Behavior |
|---|---|
| `Name` | Optional tool-name prefix. When omitted, the PivotView element `id` is used. Registered names have the form `<prefix>_<toolName>`. |
| `Tools` | Optional list of tool names or `WebMcpTool` definitions. When omitted or empty, the core registers built-in tools. The API reference types this property as `object`; it does not document how to express the alternatives in MVC helper syntax. |
| `ExposedTo` | Optional list of origins passed as the `exposedTo` registration option. The adapter omits this option when the list is empty. |

**Unresolved wrapper syntax:** The published ASP.NET MVC API reference confirms `EnableWebMcp` and the settings properties, but does not show the HTML helper syntax for assigning a `WebMcpSettings` object or custom `Tools` collection. The runnable sample uses the verified enable flag and default tools instead of guessing nested-settings syntax.

### Step 5: Monitor and control tool execution

In the core implementation, `beforeWebMcpToolExecute` runs before a tool handler and receives `toolName` and `toolArgs`. Setting `cancel` to `true` cancels execution; `cancellationResponse` optionally supplies the cancellation message. `showConfirmationDialog` requests confirmation, but the current implementation does not display a confirmation UI: its helper only logs a warning and returns `true`, and the flag is checked only in the fallback for an unimplemented tool. It does not confirm built-in PivotView actions.

**Unresolved wrapper syntax:** The ASP.NET MVC API reference does not provide a verified `beforeWebMcpToolExecute` Razor callback example or confirm the callback argument shape. Bind a client-side callback only after verifying that syntax against the target package version.

## Example requests

- “Add `Sales` to values and `Country` to rows.” — `addFieldToAxis`
- “Filter `Country` to France.” — `applyFiltering`
- “Sort the report by `Sales` descending.” — `applySorting`
- “Expand all headers.” — `expandAllHeaders`
- “Show a line chart.” — `setChartType` and `toggleViewMode`
- “Export the report as `sales.csv`.” — `exportToCSV`

## Troubleshooting

- If no tools register, check `EnableWebMcp(true)`, confirm the page exposes `document.modelContext.registerTool`, and check the browser's WebMCP setup.
- If an agent cannot find tool names, check the rendered PivotView element id, which is the default prefix.
- If a feature tool reports that a feature is unavailable, enable its listed property and confirm that the browser-side build includes the required module.

## Best practices

- Enable only the PivotView features required by the application and include their corresponding browser modules.
- Use a unique PivotView element id when multiple instances are present.
- Apply application-specific validation before executing operations that change report state or initiate exports.
- Do not assume Razor syntax for WebMCP callbacks or nested settings that is not documented by the ASP.NET MVC wrapper.

## Explore the demo

Explore the Syncfusion® ASP.NET MVC Pivot Table with WebMCP integration through this [demo](https://demos.syncfusion.com/grid-sdk/pivot-table/webmcp/index.html).

## See also

- [Getting Started](./getting-started)
- [Filtering](./filtering)
- [Sorting](./sorting)
- [Excel export](./excel-export)

## Sources

- [PivotView WebMCP adapter source](https://raw.githubusercontent.com/Syncfusion/ej2-javascript-ui-controls/03de1a97556505c42f353cbd34a25673bd197c4b/controls/pivotview/src/pivotview/actions/webmcp-adapter.ts)
- [PivotView core source](https://raw.githubusercontent.com/Syncfusion/ej2-javascript-ui-controls/03de1a97556505c42f353cbd34a25673bd197c4b/controls/pivotview/src/pivotview/base/pivotview.ts)
- [ASP.NET MVC PivotView API reference](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotView.html)
- [ASP.NET MVC PivotView WebMCP settings API reference](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewWebMcpSettings.html)
- [ASP.NET MVC PivotView Getting Started](./getting-started)
- [Chrome documentation for this API](https://developer.chrome.com/docs/ai/webmcp)
