---
layout: post
title: Blazor Grid Methods Reference | Syncfusion®
description: Learn about the public methods of the Blazor Data Grid, grouped by task, with usage examples.
platform: grid-sdk
control: DataGrid
documentation: ug
---

<!-- markdownlint-disable MD033 -->

# Methods in Blazor Data Grid

Use `@ref` to access an `SfGrid<TValue>` instance and call its methods after the grid has rendered. You can call the methods from a button click handler or `OnAfterRenderAsync`. All methods in this page are asynchronous and must be awaited.

## Quick index

| Group | Methods |
|-------|---------|
| [Export and print](#export-and-print) | `PrintAsync`, `ExportToExcelAsync`, `ExportToPdfAsync`, `ExportToCsvAsync` |
| [Grouping](#grouping) | `GroupColumnAsync`, `UngroupColumnAsync`, `ExpandAllGroupAsync`, `CollapseAllGroupAsync`, `ClearGroupingAsync` |
| [Paging and navigation](#paging-and-navigation) | `GoToPageAsync`, `UpdatePageSizeAsync`, `FindGoToAsync` |
| [Selection](#selection) | `SelectRowAsync`, `SelectRowsAsync`, `SelectRowsByRangeAsync`, `SelectCellAsync`, `SelectCellsAsync`, `SelectCellsByRangeAsync`, `ClearSelectionAsync`, `ClearRowSelectionAsync`, `ClearCellSelectionAsync`, `GetSelectedRecordsAsync`, `GetSelectedRowIndexesAsync`, `GetSelectedRowCellIndexesAsync` |
| [Searching](#searching) | `SearchAsync`, `FindHighlightAsync`, `FindNextHighlightAsync`, `FindPreviousHighlightAsync`, `ResetFindAsync` |
| [Sorting and filtering](#sorting-and-filtering) | `SortColumnAsync`, `SortColumnsAsync`, `ClearSortingAsync`, `FilterByColumnAsync`, `ClearFilteringAsync` |
| [State persistence](#state-persistence) | `GetPersistDataAsync`, `SetPersistDataAsync`, `ResetPersistDataAsync` |
| [Clipboard](#clipboard) | `CopyAsync`, `PasteAsync` |
| [Layout and refresh](#layout-and-refresh) | `AutoFitColumnAsync`, `AutoFitColumnsAsync`, `ReorderColumnAsync`, `RefreshAsync`, `RefreshColumnsAsync`, `RefreshHeaderAsync`, `ShowSpinnerAsync`, `HideSpinnerAsync` |

## Export and print

Use these methods to print the grid or export it to Excel, CSV, or PDF. The export methods reflect the current grid state.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `PrintAsync` | Opens the browser print dialog for the grid content. | None | `Task` |
| `ExportToExcelAsync` | Exports the grid to an Excel file. | `ExcelExportProperties excelExportProperties = null` | `Task` |
| `ExportToPdfAsync` | Exports the grid to a PDF file. | `PdfExportProperties pdfExportProperties = null` | `Task` |
| `ExportToCsvAsync` | Exports the grid to a CSV file. | `bool isMultipleExport = false`, `ExcelExportProperties excelExportProperties = null` | `Task` |

Prerequisites:
- Set `AllowExcelExport="true"` for Excel and CSV export.
- Set `AllowPdfExport="true"` for PDF export.
- Add the `Print` toolbar item or call the method from a button.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Print" OnClick="PrintContent" />
<SfButton Content="Export to Excel" OnClick="ExportToExcelContent" />
<SfButton Content="Export to CSV" OnClick="ExportToCsvContent" />
<SfButton Content="Export to PDF" OnClick="ExportToPdfContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" AllowExcelExport="true" AllowPdfExport="true">
    <GridColumns>
        <GridColumn Field=@nameof(OrderData.OrderID) HeaderText="Order ID" Width="120" TextAlign="TextAlign.Right"></GridColumn>
        <GridColumn Field=@nameof(OrderData.CustomerID) HeaderText="Customer ID" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipCity) HeaderText="Ship City" Width="130"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipName) HeaderText="Ship Name" Width="120"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private SfGrid<OrderData> DefaultGrid;
    private List<OrderData> Orders { get; set; }

    protected override void OnInitialized() => Orders = OrderData.GetAllRecords();

    private async Task PrintContent()
    {
        await DefaultGrid.PrintAsync();
    }

    private async Task ExportToExcelContent()
    {
        await DefaultGrid.ExportToExcelAsync();
    }

    private async Task ExportToCsvContent()
    {
        await DefaultGrid.ExportToCsvAsync();
    }

    private async Task ExportToPdfContent()
    {
        await DefaultGrid.ExportToPdfAsync();
    }
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData
{
    private static readonly List<OrderData> Data = new();

    public OrderData(int orderID, string customerID, string shipCity, string shipName)
    {
        OrderID = orderID;
        CustomerID = customerID;
        ShipCity = shipCity;
        ShipName = shipName;
    }

    internal static List<OrderData> GetAllRecords()
    {
        if (Data.Count == 0)
        {
            Data.Add(new OrderData(10248, "VINET", "Reims", "Vins et alcools Cheval"));
            Data.Add(new OrderData(10249, "TOMSP", "Münster", "Toms Spezialitäten"));
            Data.Add(new OrderData(10250, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10251, "VICTE", "Lyon", "Victuailles en stock"));
            Data.Add(new OrderData(10252, "SUPRD", "Charleroi", "Suprêmes délices"));
            Data.Add(new OrderData(10253, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10254, "CHOPS", "Bern", "Chop-suey Chinese"));
            Data.Add(new OrderData(10255, "RICSU", "Genève", "Richter Supermarkt"));
            Data.Add(new OrderData(10256, "WELLI", "Resende", "Wellington Importado"));
        }

        return Data;
    }

    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
    public string ShipName { get; set; }
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

What each button does:
- `PrintAsync` opens the print dialog.
- `ExportToExcelAsync` exports the grid to Excel.
- `ExportToCsvAsync` exports the grid to CSV.
- `ExportToPdfAsync` exports the grid to PDF.

> The export methods use the current grid state.

## Grouping

Use the grouping methods to group and ungroup columns, or to expand and collapse grouped rows.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `GroupColumnAsync` | Groups a column by field name. | `string fieldName` | `Task` |
| `UngroupColumnAsync` | Removes grouping for a column by field name. | `string fieldName` | `Task` |
| `ExpandAllGroupAsync` | Expands all grouped rows. | None | `Task` |
| `CollapseAllGroupAsync` | Collapses all grouped rows. | None | `Task` |
| `ClearGroupingAsync` | Clears all grouped columns. | None | `Task` |

Prerequisites:
- Set `AllowGrouping="true"`.
- Call the methods after the grid renders.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Group Ship City" OnClick="GroupContent" />
<SfButton Content="Ungroup Ship City" OnClick="UngroupContent" />
<SfButton Content="Expand All" OnClick="ExpandContent" />
<SfButton Content="Collapse All" OnClick="CollapseContent" />
<SfButton Content="Clear Grouping" OnClick="ClearContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" AllowGrouping="true">
    <GridColumns>
        <GridColumn Field=@nameof(OrderData.OrderID) HeaderText="Order ID" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderData.CustomerID) HeaderText="Customer ID" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipCity) HeaderText="Ship City" Width="130"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipName) HeaderText="Ship Name" Width="120"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private SfGrid<OrderData> DefaultGrid;
    private List<OrderData> Orders { get; set; }

    protected override void OnInitialized() => Orders = OrderData.GetAllRecords();

    private async Task GroupContent() => await DefaultGrid.GroupColumnAsync(nameof(OrderData.ShipCity));
    private async Task UngroupContent() => await DefaultGrid.UngroupColumnAsync(nameof(OrderData.ShipCity));
    private async Task ExpandContent() => await DefaultGrid.ExpandAllGroupAsync();
    private async Task CollapseContent() => await DefaultGrid.CollapseAllGroupAsync();
    private async Task ClearContent() => await DefaultGrid.ClearGroupingAsync();
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData
{
    private static readonly List<OrderData> Data = new();

    public OrderData(int orderID, string customerID, string shipCity, string shipName)
    {
        OrderID = orderID;
        CustomerID = customerID;
        ShipCity = shipCity;
        ShipName = shipName;
    }

    internal static List<OrderData> GetAllRecords()
    {
        if (Data.Count == 0)
        {
            Data.Add(new OrderData(10248, "VINET", "Reims", "Vins et alcools Cheval"));
            Data.Add(new OrderData(10249, "TOMSP", "Münster", "Toms Spezialitäten"));
            Data.Add(new OrderData(10250, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10251, "VICTE", "Lyon", "Victuailles en stock"));
            Data.Add(new OrderData(10252, "SUPRD", "Charleroi", "Suprêmes délices"));
            Data.Add(new OrderData(10253, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10254, "CHOPS", "Bern", "Chop-suey Chinese"));
            Data.Add(new OrderData(10255, "RICSU", "Genève", "Richter Supermarkt"));
            Data.Add(new OrderData(10256, "WELLI", "Resende", "Wellington Importado"));
        }

        return Data;
    }

    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
    public string ShipName { get; set; }
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

What each button does:
- `GroupColumnAsync` groups the `ShipCity` column.
- `UngroupColumnAsync` removes grouping from the `ShipCity` column.
- `ExpandAllGroupAsync` expands every group.
- `CollapseAllGroupAsync` collapses every group.
- `ClearGroupingAsync` removes all grouped columns.

## Paging and navigation

Use these methods to move between pages and change page size.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `GoToPageAsync` | Moves to a page number. | `int pageNo` | `Task` |
| `UpdatePageSizeAsync` | Changes the page size. | `int pageSize` or `int pageSize, int currentPage` | `Task` |
| `FindGoToAsync` | Jumps to a row index in the current view. | `int index` | `Task` |

Prerequisites:
- Set `AllowPaging="true"` for paging methods.


{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Go to Page 2" OnClick="GoToPageContent" />
<SfButton Content="Set Page Size 12" OnClick="UpdatePageSizeContent" />
<SfButton Content="Go To Row 8" OnClick="FindGoToContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" AllowPaging="true">
    <GridPageSettings PageSize="6"></GridPageSettings>
    <GridColumns>
        <GridColumn Field=@nameof(OrderData.OrderID) HeaderText="Order ID" Width="120" TextAlign="TextAlign.Right"></GridColumn>
        <GridColumn Field=@nameof(OrderData.CustomerID) HeaderText="Customer ID" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipCity) HeaderText="Ship City" Width="130"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipName) HeaderText="Ship Name" Width="120"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private SfGrid<OrderData> DefaultGrid;
    private List<OrderData> Orders { get; set; }

    protected override void OnInitialized() => Orders = OrderData.GetAllRecords();

    private async Task GoToPageContent() => await DefaultGrid.GoToPageAsync(2);
    private async Task UpdatePageSizeContent() => await DefaultGrid.UpdatePageSizeAsync(12);
    private async Task FindGoToContent() => await DefaultGrid.FindGoToAsync(8);
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData
{
    private static readonly List<OrderData> Data = new();

    public OrderData(int orderID, string customerID, string shipCity, string shipName)
    {
        OrderID = orderID;
        CustomerID = customerID;
        ShipCity = shipCity;
        ShipName = shipName;
    }

    internal static List<OrderData> GetAllRecords()
    {
        if (Data.Count == 0)
        {
            Data.Add(new OrderData(10248, "VINET", "Reims", "Vins et alcools Cheval"));
            Data.Add(new OrderData(10249, "TOMSP", "Münster", "Toms Spezialitäten"));
            Data.Add(new OrderData(10250, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10251, "VICTE", "Lyon", "Victuailles en stock"));
            Data.Add(new OrderData(10252, "SUPRD", "Charleroi", "Suprêmes délices"));
            Data.Add(new OrderData(10253, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10254, "CHOPS", "Bern", "Chop-suey Chinese"));
            Data.Add(new OrderData(10255, "RICSU", "Genève", "Richter Supermarkt"));
            Data.Add(new OrderData(10256, "WELLI", "Resende", "Wellington Importado"));
        }

        return Data;
    }

    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
    public string ShipName { get; set; }
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

What each button does:
- `GoToPageAsync` moves to the requested page.
- `UpdatePageSizeAsync` changes the visible row count.
- `FindGoToAsync` jumps to a row in the current view.

> Set `AllowPaging="true"` before you call the paging methods.

## Selection

Use these methods to select rows or cells, clear the selection, and read the selected records or indexes. They work when grid selection is enabled.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `SelectRowAsync` | Selects a row by index. | `int rowIndex`, `bool? isToggle = null` | `Task` |
| `SelectRowsAsync` | Selects multiple rows by indexes. | `int[] rowIndexes` | `Task` |
| `SelectRowsByRangeAsync` | Selects a row range. | `int startIndex`, `int endIndex` | `Task` |
| `SelectCellAsync` | Selects a cell by row and column indexes. | `int rowIndex`, `int cellIndex` | `Task` |
| `SelectCellsAsync` | Selects multiple cells by row and column indexes. | `int[] rowIndexes`, `int[] cellIndexes` | `Task` |
| `SelectCellsByRangeAsync` | Selects a cell range. | `int startRowIndex`, `int startCellIndex`, `int endRowIndex`, `int endCellIndex` | `Task` |
| `ClearSelectionAsync` | Clears all selected rows and cells. | None | `Task` |
| `ClearRowSelectionAsync` | Clears selected rows. | None | `Task` |
| `ClearCellSelectionAsync` | Clears selected cells. | None | `Task` |
| `GetSelectedRecordsAsync` | Returns the selected records. | None | `Task<IEnumerable<TValue>>` |
| `GetSelectedRowIndexesAsync` | Returns the selected row indexes. | None | `Task<int[]>` |
| `GetSelectedRowCellIndexesAsync` | Returns the selected cell indexes. | None | `Task<List<CellIndex>>` |

Prerequisites:
- Set `AllowSelection="true"`.
- Use a selection mode that matches the type of selection you want.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Select Row 1" OnClick="SelectRowContent" />
<SfButton Content="Select Row Range" OnClick="SelectRowsRangeContent" />
<SfButton Content="Select Cell" OnClick="SelectCellContent" />
<SfButton Content="Clear Selection" OnClick="ClearSelectionContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" AllowSelection="true">
    <GridSelectionSettings Type="SelectionType.Multiple"></GridSelectionSettings>
    <GridColumns>
        <GridColumn Field=@nameof(OrderData.OrderID) HeaderText="Order ID" Width="120" TextAlign="TextAlign.Right"></GridColumn>
        <GridColumn Field=@nameof(OrderData.CustomerID) HeaderText="Customer ID" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipCity) HeaderText="Ship City" Width="130"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipName) HeaderText="Ship Name" Width="120"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private SfGrid<OrderData> DefaultGrid;
    private List<OrderData> Orders { get; set; }

    protected override void OnInitialized() => Orders = OrderData.GetAllRecords();

    private async Task SelectRowContent() => await DefaultGrid.SelectRowAsync(1);
    private async Task SelectRowsRangeContent() => await DefaultGrid.SelectRowsByRangeAsync(1, 3);
    private async Task SelectCellContent() => await DefaultGrid.SelectCellAsync(1, 1);
    private async Task ClearSelectionContent() => await DefaultGrid.ClearSelectionAsync();
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData
{
    private static readonly List<OrderData> Data = new();

    public OrderData(int orderID, string customerID, string shipCity, string shipName)
    {
        OrderID = orderID;
        CustomerID = customerID;
        ShipCity = shipCity;
        ShipName = shipName;
    }

    internal static List<OrderData> GetAllRecords()
    {
        if (Data.Count == 0)
        {
            Data.Add(new OrderData(10248, "VINET", "Reims", "Vins et alcools Cheval"));
            Data.Add(new OrderData(10249, "TOMSP", "Münster", "Toms Spezialitäten"));
            Data.Add(new OrderData(10250, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10251, "VICTE", "Lyon", "Victuailles en stock"));
            Data.Add(new OrderData(10252, "SUPRD", "Charleroi", "Suprêmes délices"));
            Data.Add(new OrderData(10253, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10254, "CHOPS", "Bern", "Chop-suey Chinese"));
            Data.Add(new OrderData(10255, "RICSU", "Genève", "Richter Supermarkt"));
            Data.Add(new OrderData(10256, "WELLI", "Resende", "Wellington Importado"));
        }

        return Data;
    }

    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
    public string ShipName { get; set; }
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

What each button does:
- `SelectRowAsync` selects a row.
- `SelectRowsByRangeAsync` selects a row range.
- `SelectCellAsync` selects one cell.
- `ClearSelectionAsync` clears the selection.

> Set `AllowSelection="true"` before you call the selection methods.

## Searching

Use the search methods to find text, move between search highlights, and clear the current search.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `SearchAsync` | Searches the grid for the supplied text. | `string key` | `Task` |
| `FindHighlightAsync` | Highlights matches for a search text. | `string text` | `Task` |
| `FindNextHighlightAsync` | Moves to the next highlight. | None | `Task` |
| `FindPreviousHighlightAsync` | Moves to the previous highlight. | None | `Task` |
| `ResetFindAsync` | Clears the search highlight state. | None | `Task` |

What each button does:
- `SearchAsync` finds the entered text in the grid.
- `FindHighlightAsync` highlights search matches.
- `FindNextHighlightAsync` and `FindPreviousHighlightAsync` move through matches.
- `ResetFindAsync` clears the find state.



{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Search VINET" OnClick="SearchContent" />
<SfButton Content="Highlight VINET" OnClick="HighlightContent" />
<SfButton Content="Next Match" OnClick="NextContent" />
<SfButton Content="Previous Match" OnClick="PreviousContent" />
<SfButton Content="Reset Find" OnClick="ResetFindContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" AllowSearching="true">
    <GridSearchSettings IgnoreCase="true"></GridSearchSettings>
    <GridColumns>
        <GridColumn Field=@nameof(OrderData.OrderID) HeaderText="Order ID" Width="120" TextAlign="TextAlign.Right"></GridColumn>
        <GridColumn Field=@nameof(OrderData.CustomerID) HeaderText="Customer ID" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipCity) HeaderText="Ship City" Width="130"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipName) HeaderText="Ship Name" Width="120"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private SfGrid<OrderData> DefaultGrid;
    private List<OrderData> Orders { get; set; }

    protected override void OnInitialized() => Orders = OrderData.GetAllRecords();

    private async Task SearchContent() => await DefaultGrid.SearchAsync("VINET");
    private async Task HighlightContent() => await DefaultGrid.FindHighlightAsync("VINET");
    private async Task NextContent() => await DefaultGrid.FindNextHighlightAsync();
    private async Task PreviousContent() => await DefaultGrid.FindPreviousHighlightAsync();
    private async Task ResetFindContent() => await DefaultGrid.ResetFindAsync();
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData
{
    private static readonly List<OrderData> Data = new();

    public OrderData(int orderID, string customerID, string shipCity, string shipName)
    {
        OrderID = orderID;
        CustomerID = customerID;
        ShipCity = shipCity;
        ShipName = shipName;
    }

    internal static List<OrderData> GetAllRecords()
    {
        if (Data.Count == 0)
        {
            Data.Add(new OrderData(10248, "VINET", "Reims", "Vins et alcools Cheval"));
            Data.Add(new OrderData(10249, "TOMSP", "Münster", "Toms Spezialitäten"));
            Data.Add(new OrderData(10250, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10251, "VICTE", "Lyon", "Victuailles en stock"));
            Data.Add(new OrderData(10252, "SUPRD", "Charleroi", "Suprêmes délices"));
            Data.Add(new OrderData(10253, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10254, "CHOPS", "Bern", "Chop-suey Chinese"));
            Data.Add(new OrderData(10255, "RICSU", "Genève", "Richter Supermarkt"));
            Data.Add(new OrderData(10256, "WELLI", "Resende", "Wellington Importado"));
        }

        return Data;
    }

    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
    public string ShipName { get; set; }
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

What each button does:
- `SearchAsync` searches for the text.
- `FindHighlightAsync` highlights the matches.
- `FindNextHighlightAsync` moves to the next match.
- `FindPreviousHighlightAsync` moves to the previous match.
- `ResetFindAsync` clears the highlight state.

## Sorting and filtering

Use these methods to sort columns and clear applied sort or filter criteria.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `SortColumnAsync` | Sorts a column by field name. | `string fieldName`, `SortDirection direction`, `bool? isMultiSort = null` | `Task` |
| `SortColumnsAsync` | Sorts multiple columns. | `List<SortColumn> columns` or `List<SortColumn> columns, bool isMultiSort` | `Task` |
| `ClearSortingAsync` | Clears sorting. | `List<string> fields = null` | `Task` |
| `FilterByColumnAsync` | Filters a column by field name and operator. | `string fieldName`, `string filterOperator`, `object value`, `string predicate = "and"`, `bool? matchCase = null`, `bool? ignoreAccent = null`, `object actualValue = null`, `object actualOperator = null`, `string columnName = null` | `Task` |
| `ClearFilteringAsync` | Clears filtering. | `string fieldName = null` or `List<string> fields = null` | `Task` |

What each button does:
- `SortColumnAsync` sorts one column.
- `SortColumnsAsync` applies multi-column sorting.
- `ClearSortingAsync` removes sort criteria.
- `FilterByColumnAsync` applies a filter.
- `ClearFilteringAsync` removes filters.



{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Sort Order ID" OnClick="SortContent" />
<SfButton Content="Clear Sorting" OnClick="ClearSortContent" />
<SfButton Content="Filter City" OnClick="FilterContent" />
<SfButton Content="Clear Filtering" OnClick="ClearFilterContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" AllowSorting="true" AllowFiltering="true">
    <GridColumns>
        <GridColumn Field=@nameof(OrderData.OrderID) HeaderText="Order ID" Width="120" TextAlign="TextAlign.Right"></GridColumn>
        <GridColumn Field=@nameof(OrderData.CustomerID) HeaderText="Customer ID" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipCity) HeaderText="Ship City" Width="130"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipName) HeaderText="Ship Name" Width="120"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private SfGrid<OrderData> DefaultGrid;
    private List<OrderData> Orders { get; set; }

    protected override void OnInitialized() => Orders = OrderData.GetAllRecords();

    private async Task SortContent() => await DefaultGrid.SortColumnAsync(nameof(OrderData.OrderID), Syncfusion.Blazor.Grids.SortDirection.Descending);
    private async Task ClearSortContent() => await DefaultGrid.ClearSortingAsync();
    private async Task FilterContent() => await DefaultGrid.FilterByColumnAsync(nameof(OrderData.ShipCity), "startswith", "R");
    private async Task ClearFilterContent() => await DefaultGrid.ClearFilteringAsync();
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData
{
    private static readonly List<OrderData> Data = new();

    public OrderData(int orderID, string customerID, string shipCity, string shipName)
    {
        OrderID = orderID;
        CustomerID = customerID;
        ShipCity = shipCity;
        ShipName = shipName;
    }

    internal static List<OrderData> GetAllRecords()
    {
        if (Data.Count == 0)
        {
            Data.Add(new OrderData(10248, "VINET", "Reims", "Vins et alcools Cheval"));
            Data.Add(new OrderData(10249, "TOMSP", "Münster", "Toms Spezialitäten"));
            Data.Add(new OrderData(10250, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10251, "VICTE", "Lyon", "Victuailles en stock"));
            Data.Add(new OrderData(10252, "SUPRD", "Charleroi", "Suprêmes délices"));
            Data.Add(new OrderData(10253, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10254, "CHOPS", "Bern", "Chop-suey Chinese"));
            Data.Add(new OrderData(10255, "RICSU", "Genève", "Richter Supermarkt"));
            Data.Add(new OrderData(10256, "WELLI", "Resende", "Wellington Importado"));
        }

        return Data;
    }

    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
    public string ShipName { get; set; }
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

What each button does:
- `SortColumnAsync` sorts the grid by `OrderID`.
- `ClearSortingAsync` removes the sort.
- `FilterByColumnAsync` filters rows where `ShipCity` starts with `R`.
- `ClearFilteringAsync` clears the filter.

## State persistence

Use these methods to save, restore, or clear the persisted grid state.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `GetPersistDataAsync` | Returns the current persisted state string. | None | `Task<string>` |
| `SetPersistDataAsync` | Applies a persisted state string. | `string persistData` | `Task` |
| `ResetPersistDataAsync` | Clears persisted state. | None | `Task` |

What each button does:
- `GetPersistDataAsync` reads the current persisted grid state.
- `SetPersistDataAsync` restores a saved grid state.
- `ResetPersistDataAsync` clears the saved state.



{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Get Persisted State" OnClick="GetStateContent" />
<SfButton Content="Restore State" OnClick="SetStateContent" />
<SfButton Content="Reset State" OnClick="ResetStateContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" EnablePersistence="true">
    <GridColumns>
        <GridColumn Field=@nameof(OrderData.OrderID) HeaderText="Order ID" Width="120" TextAlign="TextAlign.Right"></GridColumn>
        <GridColumn Field=@nameof(OrderData.CustomerID) HeaderText="Customer ID" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipCity) HeaderText="Ship City" Width="130"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipName) HeaderText="Ship Name" Width="120"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private SfGrid<OrderData> DefaultGrid;
    private List<OrderData> Orders { get; set; }
    private string PersistData;

    protected override void OnInitialized() => Orders = OrderData.GetAllRecords();

    private async Task GetStateContent() => PersistData = await DefaultGrid.GetPersistDataAsync();
    private async Task SetStateContent() => await DefaultGrid.SetPersistDataAsync(PersistData);
    private async Task ResetStateContent() => await DefaultGrid.ResetPersistDataAsync();
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData
{
    private static readonly List<OrderData> Data = new();

    public OrderData(int orderID, string customerID, string shipCity, string shipName)
    {
        OrderID = orderID;
        CustomerID = customerID;
        ShipCity = shipCity;
        ShipName = shipName;
    }

    internal static List<OrderData> GetAllRecords()
    {
        if (Data.Count == 0)
        {
            Data.Add(new OrderData(10248, "VINET", "Reims", "Vins et alcools Cheval"));
            Data.Add(new OrderData(10249, "TOMSP", "Münster", "Toms Spezialitäten"));
            Data.Add(new OrderData(10250, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10251, "VICTE", "Lyon", "Victuailles en stock"));
            Data.Add(new OrderData(10252, "SUPRD", "Charleroi", "Suprêmes délices"));
            Data.Add(new OrderData(10253, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10254, "CHOPS", "Bern", "Chop-suey Chinese"));
            Data.Add(new OrderData(10255, "RICSU", "Genève", "Richter Supermarkt"));
            Data.Add(new OrderData(10256, "WELLI", "Resende", "Wellington Importado"));
        }

        return Data;
    }

    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
    public string ShipName { get; set; }
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

What each button does:
- `GetPersistDataAsync` saves the current grid state string.
- `SetPersistDataAsync` restores the saved state.
- `ResetPersistDataAsync` clears persisted state.

## Clipboard

Use the clipboard methods to copy or paste grid data.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `CopyAsync` | Copies the selected rows or cells to the clipboard. | `bool? includeHeader = null` | `Task` |
| `PasteAsync` | Pastes clipboard data into the grid. | None | `Task` |

What each button does:
- `CopyAsync` copies the current selection to the clipboard.
- `PasteAsync` pastes clipboard data into the grid.



{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Copy" OnClick="CopyContent" />
<SfButton Content="Paste" OnClick="PasteContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" AllowSelection="true" AllowClipboard="true">
    <GridSelectionSettings Type="SelectionType.Multiple"></GridSelectionSettings>
    <GridColumns>
        <GridColumn Field=@nameof(OrderData.OrderID) HeaderText="Order ID" Width="120" TextAlign="TextAlign.Right"></GridColumn>
        <GridColumn Field=@nameof(OrderData.CustomerID) HeaderText="Customer ID" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipCity) HeaderText="Ship City" Width="130"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipName) HeaderText="Ship Name" Width="120"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private SfGrid<OrderData> DefaultGrid;
    private List<OrderData> Orders { get; set; }

    protected override void OnInitialized() => Orders = OrderData.GetAllRecords();

    private async Task CopyContent() => await DefaultGrid.CopyAsync(true);
    private async Task PasteContent() => await DefaultGrid.PasteAsync();
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData
{
    private static readonly List<OrderData> Data = new();

    public OrderData(int orderID, string customerID, string shipCity, string shipName)
    {
        OrderID = orderID;
        CustomerID = customerID;
        ShipCity = shipCity;
        ShipName = shipName;
    }

    internal static List<OrderData> GetAllRecords()
    {
        if (Data.Count == 0)
        {
            Data.Add(new OrderData(10248, "VINET", "Reims", "Vins et alcools Cheval"));
            Data.Add(new OrderData(10249, "TOMSP", "Münster", "Toms Spezialitäten"));
            Data.Add(new OrderData(10250, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10251, "VICTE", "Lyon", "Victuailles en stock"));
            Data.Add(new OrderData(10252, "SUPRD", "Charleroi", "Suprêmes délices"));
            Data.Add(new OrderData(10253, "HANAR", "Rio de Janeiro", "Hanari Carnes"));
            Data.Add(new OrderData(10254, "CHOPS", "Bern", "Chop-suey Chinese"));
            Data.Add(new OrderData(10255, "RICSU", "Genève", "Richter Supermarkt"));
            Data.Add(new OrderData(10256, "WELLI", "Resende", "Wellington Importado"));
        }

        return Data;
    }

    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
    public string ShipName { get; set; }
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

What each button does:
- `CopyAsync` copies the current selection.
- `PasteAsync` pastes clipboard data.

## Layout and refresh

Use these methods to adjust column layout and refresh the grid UI.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `AutoFitColumnAsync` | Fits one column to its content. | `string fieldName` | `Task` |
| `AutoFitColumnsAsync` | Fits all columns or a set of columns. | None or `string[] fields` | `Task` |
| `ReorderColumnAsync` | Moves one column before another column. | `string fromField`, `string toField` | `Task` |
| `RefreshAsync` | Refreshes the grid. | `bool isDataRefresh = false` | `Task` |
| `RefreshColumnsAsync` | Refreshes column state. | None | `Task` |
| `RefreshHeaderAsync` | Refreshes the header area. | None | `Task` |
| `ShowSpinnerAsync` | Shows the loading spinner. | None | `Task` |
| `HideSpinnerAsync` | Hides the loading spinner. | None | `Task` |

What each button does:
- `AutoFitColumnAsync` fits one column.
- `AutoFitColumnsAsync` fits all or selected columns.
- `ReorderColumnAsync` moves one column before another.
- `RefreshAsync`, `RefreshColumnsAsync`, and `RefreshHeaderAsync` redraw the grid.
- `ShowSpinnerAsync` and `HideSpinnerAsync` control the loading indicator.

API reference: https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html
