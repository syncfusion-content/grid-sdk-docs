---
layout: post
title: WebMCP Getting Started with ASP.NET MVC Pivot Table | Syncfusion
description: Enable browser-based WebMCP tools for the Syncfusion ASP.NET MVC Pivot Table and review verified wrapper APIs.
platform: grid-sdk
control: WebMCP
documentation: ug
---

# WebMCP Getting Started with ASP.NET MVC Pivot Table

WebMCP lets a browser-based AI agent discover and invoke structured tools exposed by a web page. The Syncfusion® Pivot Table registers tools for PivotView report changes, filtering, sorting, drill operations, formatting, charts, and export. These tools change PivotView state or initiate exports; the core descriptors mark every built-in tool `readOnlyHint: false`.

ASP.NET MVC renders PivotView through its HTML helper, but WebMCP is configured by the JavaScript PivotView running in the browser. The .NET wrapper exposes the `EnableWebMcp` property; WebMCP is not a server-side .NET API.

## Browser requirements

WebMCP is an experimental browser API. The [Chrome WebMCP documentation](https://developer.chrome.com/docs/ai/webmcp) describes an origin trial beginning with Chrome 149 and local testing with the `chrome://flags/#enable-webmcp-testing` flag. Enable the flag and relaunch Chrome for local testing, or follow the current origin-trial instructions for an eligible deployed origin. Other browser/version support is not established by that documentation.

The page must expose `document.modelContext.registerTool`. The PivotView adapter checks for this API when registering tools. The official WebMCP setup does not require the extension or API key mentioned in some unrelated demos.

## Add WebMCP to an ASP.NET MVC Pivot Table

Create an ASP.NET MVC application and install the `Syncfusion.EJ2.MVC5` NuGet package, following [Getting Started with ASP.NET MVC Pivot Table](./getting-started). Reference the Syncfusion theme and browser scripts and register `EJS().ScriptManager()` in the shared layout as described in that guide.

In the MVC view, set the verified `EnableWebMcp` HTML helper property to `true`. If no `webMcpSettings.name` is supplied, the PivotView element id is used as the default tool-name prefix.

`Views/Home/Index.cshtml`:

```cshtml
@{
    var dataSource = (IEnumerable<object>)ViewBag.DataSource;
}

@Html.EJS().PivotView("SalesPivot")
    .Height("350")
    .EnableWebMcp(true)
    .DataSourceSettings(settings => settings
        .DataSource(dataSource)
        .Rows(rows => { rows.Name("Country").Add(); rows.Name("Category").Add(); })
        .Columns(columns => { columns.Name("Year").Add(); })
        .Values(values => { values.Name("Sales").Add(); }))
    .Render()
```

Provide data from the controller as in the existing getting-started page:

```csharp
public ActionResult Index()
{
    ViewBag.DataSource = new List<SalesRecord>
    {
        new SalesRecord { Country = "France", Category = "Bikes", Year = "2025", Sales = 1200 },
        new SalesRecord { Country = "France", Category = "Parts", Year = "2025", Sales = 450 },
        new SalesRecord { Country = "Germany", Category = "Bikes", Year = "2025", Sales = 980 }
    };
    return View();
}

public class SalesRecord
{
    public string Country { get; set; }
    public string Category { get; set; }
    public string Year { get; set; }
    public int Sales { get; set; }
}
```

Run the MVC application and open it in a Chrome build with WebMCP enabled. The HTML helper configures a browser PivotView; the WebMCP adapter calls `document.modelContext.registerTool(tool, options)` in that page.

### Configure the registered tools

The ASP.NET MVC API reference exposes `PivotView.WebMcpSettings` as a `PivotViewWebMcpSettings` object. Its documented properties are `Name`, `Tools`, and `ExposedTo`. Their core behavior is:

| Property | Behavior |
|---|---|
| `Name` | Optional tool-name prefix. When omitted, the PivotView element `id` is used. Registered names have the form `<prefix>_<toolName>`. |
| `Tools` | Optional list of tool names or `WebMcpTool` definitions. When omitted or empty, the core registers the built-in tools. The ASP.NET MVC API reference types this property as `object`; it does not document how to express the alternatives in HTML helper syntax. |
| `ExposedTo` | Optional list of origins passed as the `exposedTo` registration option. The adapter omits this option when the list is empty. |

**Unresolved wrapper syntax:** The published ASP.NET MVC API reference confirms `EnableWebMcp` and the `PivotViewWebMcpSettings` properties, but does not show the HTML helper syntax for assigning a `WebMcpSettings` object or a custom `Tools` collection. The runnable sample therefore uses the verified enable flag and default settings (all built-in tools); it does not guess the nested-settings syntax.

### Monitor or cancel a tool

In the core implementation, `beforeWebMcpToolExecute` runs before a tool handler and receives `toolName` and `toolArgs`. Setting `cancel` to `true` cancels execution; `cancellationResponse` optionally supplies the cancellation message. Setting `showConfirmationDialog` requests confirmation, but the current implementation does not display a confirmation UI: its confirmation helper only logs a warning and returns `true`, and the flag is checked only in the fallback for an unimplemented tool. Do not treat it as confirmation for built-in PivotView tools.

**Unresolved wrapper syntax:** The ASP.NET MVC API reference does not provide a verified `beforeWebMcpToolExecute` HTML helper callback example or confirm the callback argument shape for this wrapper. Bind a client-side callback only after verifying that syntax against the target package version.

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

The module names are the PivotView core exports. Set each related `allow...` property when its tool requires it; ensure the ASP.NET MVC package version ships the matching browser module before enabling optional feature tools.

## Example requests

- “Add `Sales` to the values axis and `Country` to rows.” — `addFieldToAxis`
- “Filter `Country` to France.” — `applyFiltering`
- “Sort the report by `Sales` descending.” — `applySorting`
- “Expand all headers.” — `expandAllHeaders`
- “Show the pivot chart as a line chart.” — `toggleViewMode` and `setChartType`
- “Export this pivot table as a CSV named `sales.csv`.” — `exportToCSV`

## Troubleshooting

- If no tools register, check `EnableWebMcp`, confirm the browser page exposes `document.modelContext.registerTool`, and check the browser's WebMCP flag/origin-trial setup.
- If the console reports that `document.modelContext` is unavailable, the core adapter skips registration and logs a warning; enable WebMCP in Chrome as described above.
- If an agent cannot find an expected name, check the rendered PivotView element id. The default prefix is the element id.
- If a feature tool reports that a feature is disabled or its module is missing, enable the listed `allow...` property and confirm that the browser-side PivotView build includes the required module.

## See also

- [Getting Started](./getting-started)
- [Filtering](./filtering)
- [Sorting](./sorting)
- [Excel export](./excel-export)

## Sources

- [PivotView WebMCP adapter source](https://github.com/Syncfusion/ej2-javascript-ui-controls/blob/03de1a97556505c42f353cbd34a25673bd197c4b/controls/pivotview/src/pivotview/actions/webmcp-adapter.ts)
- [PivotView core source](https://github.com/Syncfusion/ej2-javascript-ui-controls/blob/03de1a97556505c42f353cbd34a25673bd197c4b/controls/pivotview/src/pivotview/base/pivotview.ts)
- [ASP.NET MVC PivotView API reference](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotView.html)
- [ASP.NET MVC PivotView WebMCP settings API reference](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewWebMcpSettings.html)
- [ASP.NET MVC PivotView User Guide: Getting Started](./getting-started)
- [Chrome WebMCP documentation](https://developer.chrome.com/docs/ai/webmcp)
