---
layout: post
title: Blazor Grid Methods Reference | Syncfusion®
description: Learn about the public methods of the Blazor Data Grid, grouped by task, with usage examples.
platform: grid-sdk
control: DataGrid
documentation: ug
---

# Methods in Blazor Data Grid

Use `@ref` to access an `SfGrid<TValue>` instance and call its methods after the grid has rendered. You can call the methods from a button click handler or `OnAfterRenderAsync`. All methods in this page are asynchronous and must be awaited.

## Quick index

| Group | Methods |
|-------|---------|
| [Export and print](#export-and-print) | `PrintAsync`, `ExportToExcelAsync`, `ExportToPdfAsync`, `ExportToCsvAsync` |
| [Grouping](#grouping) | `GroupColumnAsync`, `UngroupColumnAsync`, `ExpandAllGroupAsync`, `CollapseAllGroupAsync`, `ClearGroupingAsync` |
| [Paging and navigation](#paging-and-navigation) | `GoToPageAsync`, `UpdatePageSizeAsync` |
| [Paging and scrolling](#paging-and-scrolling-examples) | `GoToPageAsync`, `ScrollIntoViewAsync`, `UpdatePageSizeAsync` |
| [Detail rows](#detail-rows-examples) | `CollapseAllDetailRowAsync`, `ExpandAllDetailRowAsync`, `ExpandCollapseDetailRowAsync` |
| [Cell merging](#cell-merging-examples) | `MergeCellsAsync`, `UnmergeAllAsync`, `UnmergeCellsAsync` |
| [Column visibility and chooser](#column-visibility-and-chooser-examples) | `HideColumnAsync`, `HideColumnsAsync`, `OpenColumnChooserAsync`, `ShowColumnAsync`, `ShowColumnsAsync` |
| [Column layout and reorder](#column-layout-and-reorder-examples) | `AutoFitColumnAsync`, `AutoFitColumnsAsync`, `ReorderColumnAsync`, `ReorderColumnByIndexAsync`, `ReorderColumnByTargetIndexAsync`, `ReorderColumnsAsync`, `ReorderRowAsync` |
| [Column and data information](#column-and-data-information-examples) | `GetCellValueByIndexAsync`, `GetColumnByFieldAsync`, `GetColumnByUidAsync`, `GetColumnFieldNamesAsync`, `GetColumnIndexByFieldAsync`, `GetColumnIndexByUidAsync`, `GetColumnsAsync`, `GetCurrentViewRecordsAsync`, `GetForeignKeyColumnsAsync`, `GetHiddenColumnsAsync`, `GetPrimaryKeyFieldNamesAsync`, `GetRowIndexByPrimaryKeyAsync`, `GetUidByColumnFieldAsync`, `GetVisibleColumnsAsync` |
| [Refresh and spinner](#refresh-and-spinner-examples) | `Refresh`, `RefreshColumnsAsync`, `RefreshHeaderAsync`, `ShowSpinnerAsync`, `HideSpinnerAsync` |
| [Toolbar, focus and other](#toolbar-focus-and-other-examples) | `EnableToolbarItemsAsync`, `FocusAsync`, `GetWebMcpToolsAsync`, `UpdateExternalMessageAsync` |
| [Selection](#selection) | `SelectRowAsync`, `SelectRowsAsync`, `SelectRowsByRangeAsync`, `SelectCellAsync`, `SelectCellsAsync`, `SelectCellsByRangeAsync`, `ClearSelectionAsync`, `ClearRowSelectionAsync`, `ClearCellSelectionAsync`, `GetSelectedRecordsAsync`, `GetSelectedRowIndexesAsync`, `GetSelectedRowCellIndexesAsync` |
| [Searching](#searching) | `SearchAsync`, `FindHighlightAsync`, `FindNextHighlightAsync`, `FindPreviousHighlightAsync`, `ResetFindAsync` |
| [Sorting and filtering](#sorting-and-filtering) | `SortColumnAsync`, `SortColumnsAsync`, `ClearSortingAsync`, `FilterByColumnAsync`, `ClearFilteringAsync` |
| [State persistence](#state-persistence) | `GetPersistDataAsync`, `SetPersistDataAsync`, `ResetPersistDataAsync` |
| [Clipboard](#clipboard) | `CopyAsync`, `PasteAsync` |
| [Layout and refresh](#layout-and-refresh) | `AutoFitColumnAsync`, `AutoFitColumnsAsync`, `ReorderColumnAsync`, `Refresh`, `RefreshColumnsAsync`, `RefreshHeaderAsync`, `ShowSpinnerAsync`, `HideSpinnerAsync` |
| [Add, edit and delete](#add-edit-and-delete-examples) | `AddRecordAsync`, `StartEditAsync`, `EndEditAsync`, `CloseEditAsync`, `DeleteRecordAsync`, `EditCellAsync`, `SaveCellAsync`, `GetEditContextAsync` |
| [Update rows and cells](#update-rows-and-cells) | `SetCellValueAsync`, `SetRowDataAsync`, `UpdateBatchRowAsync`, `UpdateCellAsync`, `UpdateRowAsync` |
| [Batch changes and dirty state](#batch-changes-and-dirty-state) | `ApplyBatchChangesAsync`, `GetBatchChangesAsync`, `IsDirtyAsync` |
| [Undo and redo](#undo-and-redo) | `ClearUndoRedoAsync`, `RedoAllAsync`, `RedoAsync`, `UndoAllAsync`, `UndoAsync` |

## Export and print

Use these methods to print the grid or export it to Excel, CSV, or PDF. The export methods reflect the current grid state.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `PrintAsync` | Opens the browser print dialog for the grid content. | None | `Task` |
| `ExportToExcelAsync` | Exports the grid to an Excel file. | `bool asMemoryStream = false`, `ExcelExportProperties excelExportProperties = null` | `Task` |
| `ExportToPdfAsync` | Exports the grid to a PDF file. | `bool asMemoryStream = false`, `PdfExportProperties pdfExportProperties = null` | `Task` |
| `ExportToCsvAsync` | Exports the grid to a CSV file. | `bool asMemoryStream = false`, `ExcelExportProperties excelExportProperties = null` | `Task` |

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
<SfButton Content="Select Rows" OnClick="SelectRowsContent" />
<SfButton Content="Select Row Range" OnClick="SelectRowsRangeContent" />
<SfButton Content="Select Cell" OnClick="SelectCellContent" />
<SfButton Content="Select Cells" OnClick="SelectCellsContent" />
<SfButton Content="Select Cells Range" OnClick="SelectCellsRangeContent" />
<SfButton Content="Clear Row Selection" OnClick="ClearRowSelectionContent" />
<SfButton Content="Clear Cell Selection" OnClick="ClearCellSelectionContent" />
<SfButton Content="Get Selected Records" OnClick="GetSelectedRecordsContent" />
<SfButton Content="Get Selected Indexes" OnClick="GetSelectedIndexesContent" />
<SfButton Content="Get Selected Cell Indexes" OnClick="GetSelectedCellIndexesContent" />
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
    private async Task SelectRowsContent() => await DefaultGrid.SelectRowsAsync(new[] { 0, 2 });
    private async Task SelectRowsRangeContent() => await DefaultGrid.SelectRowsByRangeAsync(1, 3);
    private async Task SelectCellContent() => await DefaultGrid.SelectCellAsync((1, 1));
    private async Task SelectCellsContent() => await DefaultGrid.SelectCellsAsync(new[] { 0, 1 }, new[] { 0, 2 });
    private async Task SelectCellsRangeContent() => await DefaultGrid.SelectCellsByRangeAsync(0, 0, 1, 1);
    private async Task ClearRowSelectionContent() => await DefaultGrid.ClearRowSelectionAsync();
    private async Task ClearCellSelectionContent() => await DefaultGrid.ClearCellSelectionAsync();
    private async Task GetSelectedRecordsContent() => _ = await DefaultGrid.GetSelectedRecordsAsync();
    private async Task GetSelectedIndexesContent() => _ = await DefaultGrid.GetSelectedRowIndexesAsync();
    private async Task GetSelectedCellIndexesContent() => _ = await DefaultGrid.GetSelectedRowCellIndexesAsync();
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

Prerequisites:
- Set `AllowSearching="true"`.
- Use the search box or call the methods after the grid renders.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `SearchAsync` | Searches the grid for the supplied text. | `string searchText` | `Task` |
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

Prerequisites:
- Set `AllowSorting="true"` for the sort methods.
- Set `AllowFiltering="true"` for the filter methods.

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
<SfButton Content="Sort Multiple Columns" OnClick="SortMultipleContent" />
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
    private async Task SortMultipleContent() => await DefaultGrid.SortColumnsAsync(new List<SortColumn>
    {
        new SortColumn { Field = nameof(OrderData.ShipCity), Direction = Syncfusion.Blazor.Grids.SortDirection.Ascending },
        new SortColumn { Field = nameof(OrderData.CustomerID), Direction = Syncfusion.Blazor.Grids.SortDirection.Descending }
    });
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

## Filtering

Use these methods to fetch filtered records after applying grid filters.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `GetFilteredRecordsAsync` | Returns the records that match the current filters. | `bool predicate = true` | `Task<IEnumerable<TValue>>` |

Prerequisites:
- Apply at least one filter before calling the method.
- Cast the result to the grid row type you bound to the grid.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Apply Filter" OnClick="FilterContent" />
<SfButton Content="Get Filtered Records" OnClick="GetFilteredRecordsContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" AllowFiltering="true">
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
    private IEnumerable<OrderData> FilteredOrders { get; set; }

    protected override void OnInitialized() => Orders = OrderData.GetAllRecords();

    private async Task FilterContent() => await DefaultGrid.FilterByColumnAsync(nameof(OrderData.ShipCity), "startswith", "R");
    private async Task GetFilteredRecordsContent() => FilteredOrders = (IEnumerable<OrderData>)await DefaultGrid.GetFilteredRecordsAsync();
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

## State persistence

Use these methods to save, restore, or clear the persisted grid state.

Prerequisites:
- Set `EnablePersistence="true"`.

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

Prerequisites:
- Set `AllowClipboard="true"`.
- Enable selection before calling `CopyAsync` or `PasteAsync`.

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
| `Refresh` | Refreshes the grid. | `bool isModelRefresh = false` | `Task` |
| `RefreshColumnsAsync` | Refreshes column state. | None | `Task` |
| `RefreshHeaderAsync` | Refreshes the header area. | None | `Task` |
| `ShowSpinnerAsync` | Shows the loading spinner. | None | `Task` |
| `HideSpinnerAsync` | Hides the loading spinner. | None | `Task` |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Auto Fit Order ID" OnClick="AutoFitColumnContent" />
<SfButton Content="Auto Fit All Columns" OnClick="AutoFitColumnsContent" />
<SfButton Content="Reorder City" OnClick="ReorderColumnContent" />
<SfButton Content="Refresh" OnClick="RefreshContent" />
<SfButton Content="Refresh Columns" OnClick="RefreshColumnsContent" />
<SfButton Content="Refresh Header" OnClick="RefreshHeaderContent" />
<SfButton Content="Show Spinner" OnClick="ShowSpinnerContent" />
<SfButton Content="Hide Spinner" OnClick="HideSpinnerContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" AllowReordering="true">
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

    private async Task AutoFitColumnContent() => await DefaultGrid.AutoFitColumnAsync(nameof(OrderData.OrderID));
    private async Task AutoFitColumnsContent() => await DefaultGrid.AutoFitColumnsAsync();
    private async Task ReorderColumnContent() => await DefaultGrid.ReorderColumnAsync(nameof(OrderData.ShipCity), nameof(OrderData.CustomerID));
    private async Task RefreshContent() => await DefaultGrid.Refresh();
    private async Task RefreshColumnsContent() => await DefaultGrid.RefreshColumnsAsync();
    private async Task RefreshHeaderContent() => await DefaultGrid.RefreshHeaderAsync();
    private async Task ShowSpinnerContent() => await DefaultGrid.ShowSpinnerAsync();
    private async Task HideSpinnerContent() => await DefaultGrid.HideSpinnerAsync();
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
- `AutoFitColumnAsync` fits the `OrderID` column.
- `AutoFitColumnsAsync` fits all columns.
- `ReorderColumnAsync` moves `ShipCity` before `CustomerID`.
- `Refresh` redraws the grid.
- `ShowSpinnerAsync` shows the loading indicator.
- `HideSpinnerAsync` hides the loading indicator.


## Add, edit and delete examples

Use these methods to add a new row, begin editing, save or cancel the edit, and remove a record. These actions are the usual starting point for beginners who build CRUD grids.

The add and delete methods have overloads, so the examples below show both the simple and the data-driven forms.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `AddRecordAsync` | Starts adding a new row in the grid. | None or `TValue data, int? index = null` | `Task` |
| `StartEditAsync` | Starts editing the selected row. | None | `Task` |
| `EndEditAsync` | Saves the current edit. | None | `Task` |
| `CloseEditAsync` | Cancels the current edit. | None | `Task` |
| `DeleteRecordAsync` | Deletes the selected record or a record by field value. | None or `string fieldName, TValue data` | `Task` |
| `EditCellAsync` | Puts one cell into edit mode. | `int index, string fieldName` | `Task` |
| `SaveCellAsync` | Saves the edited cell in batch mode. | None | `Task` |
| `GetEditContextAsync` | Gets the current edit context. | None | `Task<EditContext>` |

Prerequisites:
- Set `AllowAdding="true"`, `AllowEditing="true"`, and `AllowDeleting="true"` as needed.
- Use a primary key column for delete and update scenarios.
- Select a row before calling `StartEditAsync()`.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Add Blank Row" OnClick="AddBlankRowContent" />
<SfButton Content="Add Row At Top" OnClick="AddRowAtTopContent" />
<SfButton Content="Edit First Row" OnClick="StartEditContent" />
<SfButton Content="Edit Cell" OnClick="EditCellContent" />
<SfButton Content="Save Cell" OnClick="SaveCellContent" />
<SfButton Content="Get Edit Context" OnClick="GetEditContextContent" />
<SfButton Content="Save Edit" OnClick="SaveEditContent" />
<SfButton Content="Cancel Edit" OnClick="CloseEditContent" />
<SfButton Content="Delete Selected" OnClick="DeleteSelectedRowContent" />
<SfButton Content="Delete First By Key" OnClick="DeleteFirstByKeyContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" AllowAdding="true" AllowEditing="true" AllowDeleting="true">
    <GridEditSettings Mode="EditMode.Normal"></GridEditSettings>
    <GridColumns>
        <GridColumn Field=@nameof(OrderData.OrderID) HeaderText="Order ID" IsPrimaryKey="true" Width="120" TextAlign="TextAlign.Right"></GridColumn>
        <GridColumn Field=@nameof(OrderData.CustomerID) HeaderText="Customer ID" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipCity) HeaderText="Ship City" Width="130"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipName) HeaderText="Ship Name" Width="120"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private SfGrid<OrderData> DefaultGrid;
    private List<OrderData> Orders { get; set; }
    protected override void OnInitialized() => Orders = OrderData.GetAllRecords();
    private async Task AddBlankRowContent() => await DefaultGrid.AddRecordAsync();
    private async Task AddRowAtTopContent() => await DefaultGrid.AddRecordAsync(new OrderData(10257, "ALFKI", "Berlin", "Alfreds Futterkiste"), 0);
    private async Task StartEditContent() => await DefaultGrid.StartEditAsync();
    private async Task EditCellContent() => await DefaultGrid.EditCellAsync(1, nameof(OrderData.CustomerID));
    private async Task SaveCellContent() => await DefaultGrid.SaveCellAsync();
    private async Task GetEditContextContent() => _ = await DefaultGrid.GetEditContextAsync();
    private async Task SaveEditContent() => await DefaultGrid.EndEditAsync();
    private async Task CloseEditContent() => await DefaultGrid.CloseEditAsync();
    private async Task DeleteSelectedRowContent() => await DefaultGrid.DeleteRecordAsync();
    private async Task DeleteFirstByKeyContent() => await DefaultGrid.DeleteRecordAsync(nameof(OrderData.OrderID), 10248);
}
{% endhighlight %}
{% endtabs %}

## Update rows and cells

Use these methods when you need to change values after a row is already on screen.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `SetCellValueAsync` | Updates one or more cells by primary key. | `IReadOnlyList<CellUpdate> cellValueUpdates` or `object key, string fieldName, object value` | `Task` |
| `SetRowDataAsync` | Replaces a row by primary key. | `object primaryKeyValue, TValue rowData` or `object primaryKeyValue, TValue rowData, bool preventDataUpdate` | `Task` |
| `UpdateBatchRowAsync` | Updates the current batch-edited row. | `TValue data` | `Task` |
| `UpdateCellAsync` | Updates one cell without opening edit mode. | `int rowIndex, string field, object value` | `Task` |
| `UpdateRowAsync` | Replaces a row without edit mode. | `int index, TValue data` | `Task` |

Prerequisites:
- Define a primary key column for row and cell updates.
- Use batch edit mode for `UpdateBatchRowAsync()` and `UpdateCellAsync()`.

## Batch editing, batch changes, and undo examples

Use these methods when batch editing is enabled and you want to update cells, inspect pending changes, or undo and redo edits.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `SetCellValueAsync` | Updates one or more cells by primary key. | `IReadOnlyList<CellUpdate> cellValueUpdates` or `object key, string fieldName, object value` | `Task` |
| `SetRowDataAsync` | Replaces a row by primary key. | `object primaryKeyValue, TValue rowData` or `object primaryKeyValue, TValue rowData, bool preventDataUpdate` | `Task` |
| `UpdateBatchRowAsync` | Updates the current batch-edited row. | `TValue data` | `Task` |
| `UpdateCellAsync` | Updates one cell without opening edit mode. | `int rowIndex, string field, object value` | `Task` |
| `UpdateRowAsync` | Replaces a row without edit mode. | `int index, TValue data` | `Task` |
| `ApplyBatchChangesAsync` | Applies a batch of added, edited, and deleted records to the grid UI. | `BatchChanges<TValue> batchChanges` | `Task` |
| `GetBatchChangesAsync` | Gets pending batch changes. | None | `Task<BatchChanges<TValue>>` |
| `IsDirtyAsync` | Checks whether batch changes exist. | None | `Task<bool>` |
| `ClearUndoRedoAsync` | Clears the undo and redo history. | None | `Task` |
| `RedoAllAsync` | Redoes all undone batch operations. | None | `Task` |
| `RedoAsync` | Redoes the last undone batch operation. | None | `Task` |
| `UndoAllAsync` | Undoes all recorded batch operations. | None | `Task` |
| `UndoAsync` | Undoes the last batch operation. | None | `Task` |

Prerequisites:
- Set `EditMode.Batch`.
- Set `EnableUndoRedo="true"` to use undo and redo methods.
- Define a primary key column for row and cell updates.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Set Cell Value" OnClick="SetCellValueContent" />
<SfButton Content="Set Row Data" OnClick="SetRowDataContent" />
<SfButton Content="Update Batch Row" OnClick="UpdateBatchRowContent" />
<SfButton Content="Update Cell" OnClick="UpdateCellContent" />
<SfButton Content="Update Row" OnClick="UpdateRowContent" />
<SfButton Content="Apply Batch Changes" OnClick="ApplyBatchChangesContent" />
<SfButton Content="Get Batch Changes" OnClick="GetBatchChangesContent" />
<SfButton Content="Check Dirty" OnClick="IsDirtyContent" />
<SfButton Content="Clear Undo/Redo" OnClick="ClearUndoRedoContent" />
<SfButton Content="Redo All" OnClick="RedoAllContent" />
<SfButton Content="Redo Last" OnClick="RedoContent" />
<SfButton Content="Undo All" OnClick="UndoAllContent" />
<SfButton Content="Undo Last" OnClick="UndoContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" AllowEditing="true">
    <GridEditSettings Mode="EditMode.Batch" EnableUndoRedo="true"></GridEditSettings>
    <GridColumns>
        <GridColumn Field=@nameof(OrderData.OrderID) HeaderText="Order ID" IsPrimaryKey="true" Width="120" TextAlign="TextAlign.Right"></GridColumn>
        <GridColumn Field=@nameof(OrderData.CustomerID) HeaderText="Customer ID" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipCity) HeaderText="Ship City" Width="130"></GridColumn>
        <GridColumn Field=@nameof(OrderData.ShipName) HeaderText="Ship Name" Width="120"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private SfGrid<OrderData> DefaultGrid;
    private List<OrderData> Orders { get; set; }

    protected override void OnInitialized() => Orders = OrderData.GetAllRecords();
    private async Task SetCellValueContent() => await DefaultGrid.SetCellValueAsync(10248, nameof(OrderData.CustomerID), "UPDATED");
    private async Task SetRowDataContent() => await DefaultGrid.SetRowDataAsync(10248, Orders[0]);
    private async Task UpdateBatchRowContent() => await DefaultGrid.UpdateBatchRowAsync(Orders[0]);
    private async Task UpdateCellContent() => await DefaultGrid.UpdateCellAsync(0, nameof(OrderData.CustomerID), "UPDATED");
    private async Task UpdateRowContent() => await DefaultGrid.UpdateRowAsync(0, Orders[0]);
    private async Task ApplyBatchChangesContent() => await DefaultGrid.ApplyBatchChangesAsync(await DefaultGrid.GetBatchChangesAsync());
    private async Task GetBatchChangesContent() => _ = await DefaultGrid.GetBatchChangesAsync();
    private async Task IsDirtyContent() => _ = await DefaultGrid.IsDirtyAsync();
    private async Task ClearUndoRedoContent() => await DefaultGrid.ClearUndoRedoAsync();
    private async Task RedoAllContent() => await DefaultGrid.RedoAllAsync();
    private async Task RedoContent() => await DefaultGrid.RedoAsync();
    private async Task UndoAllContent() => await DefaultGrid.UndoAllAsync();
    private async Task UndoContent() => await DefaultGrid.UndoAsync();
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData { /* same as above */ }
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Batch changes and dirty state examples

Use these methods when you want to read or apply pending batch edits before they are saved to the data source.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `ApplyBatchChangesAsync` | Applies a batch of added, edited, and deleted records to the grid UI. | `BatchChanges<TValue> batchChanges` | `Task` |
| `GetBatchChangesAsync` | Gets pending batch changes. | None | `Task<BatchChanges<TValue>>` |
| `IsDirtyAsync` | Checks whether batch changes exist. | None | `Task<bool>` |

Prerequisites:
- Set `EditMode.Batch`.
- Make changes before calling `GetBatchChangesAsync()`.

## Undo and redo examples

Use these methods when batch editing is enabled and you want to undo or redo user changes step by step.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `ClearUndoRedoAsync` | Clears the undo and redo history. | None | `Task` |
| `RedoAllAsync` | Redoes all undone batch operations. | None | `Task` |
| `RedoAsync` | Redoes the last undone batch operation. | None | `Task` |
| `UndoAllAsync` | Undoes all recorded batch operations. | None | `Task` |
| `UndoAsync` | Undoes the last batch operation. | None | `Task` |

Prerequisites:
- Set `EnableUndoRedo="true"`.
- Use batch editing.


## Paging and scrolling examples

Use these methods to move to a page, update the page size, or scroll a cell into view. They are helpful when you work with large data sets.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `GoToPageAsync` | Moves to the requested page. | `int pageNo` | `Task` |
| `ScrollIntoViewAsync` | Scrolls a row or column into view. | `int columnIndex = -1`, `int rowIndex = -1`, `int rowHeight = -1` | `Task` |
| `UpdatePageSizeAsync` | Updates the page size or refreshes virtualization height. | `int pageSize` or `int height, int rowHeight = 0` | `Task` |

Prerequisites:
- Set `AllowPaging="true"` for page navigation.
- Use virtualization only if you want to scroll by row height.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Page 2" OnClick="GoToPageContent" />
<SfButton Content="Show Row 8" OnClick="ScrollIntoViewContent" />
<SfButton Content="Page Size 12" OnClick="UpdatePageSizeContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" AllowPaging="true" Height="300">
    <GridPageSettings PageSize="5"></GridPageSettings>
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
    private async Task ScrollIntoViewContent() => await DefaultGrid.ScrollIntoViewAsync(rowIndex: 7);
    private async Task UpdatePageSizeContent() => await DefaultGrid.UpdatePageSizeAsync(12);
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

## Detail rows examples

Use these methods when your grid shows master-detail rows. They let new users expand or collapse details from a button click.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `CollapseAllDetailRowAsync` | Collapses all detail rows. | None | `Task` |
| `ExpandAllDetailRowAsync` | Expands all detail rows. | None | `Task` |
| `ExpandCollapseDetailRowAsync` | Expands or collapses one detail row. | `string fieldName, object value` or `TValue data` | `Task` |

Prerequisites:
- Add a detail template to the grid.
- Use a field and value that match the current row data.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Expand All" OnClick="ExpandAllContent" />
<SfButton Content="Collapse All" OnClick="CollapseAllContent" />
<SfButton Content="Toggle First Row" OnClick="ToggleFirstRowContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders">
    <GridTemplates>
        <DetailTemplate Context="order">
            <div style="padding:10px">Customer: @((order as OrderData).CustomerID), Ship City: @((order as OrderData).ShipCity)</div>
        </DetailTemplate>
    </GridTemplates>
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
    private async Task ExpandAllContent() => await DefaultGrid.ExpandAllDetailRowAsync();
    private async Task CollapseAllContent() => await DefaultGrid.CollapseAllDetailRowAsync();
    private async Task ToggleFirstRowContent() => await DefaultGrid.ExpandCollapseDetailRowAsync(nameof(OrderData.OrderID), 10248);
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData { /* same as above */ }
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Column visibility and chooser examples

Use these methods to hide or show columns and open the column chooser for beginners who want to customize the grid view.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `HideColumnAsync` | Hides one column. | `string columnName`, `string hideBy = "HeaderText"` | `Task` |
| `HideColumnsAsync` | Hides multiple columns. | `string[] columnNames`, `string hideBy = "HeaderText"` | `Task` |
| `OpenColumnChooserAsync` | Opens the chooser popup. | `double? x = null`, `double? y = null` | `Task` |
| `ShowColumnAsync` | Shows one column. | `string columnName`, `string showBy = "HeaderText"` | `Task` |
| `ShowColumnsAsync` | Shows multiple columns. | `string[] columnNames`, `string showBy = "HeaderText"` | `Task` |

Prerequisites:
- Set `ShowColumnChooser="true"` if you want the chooser button to work.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Hide Ship City" OnClick="HideColumnContent" />
<SfButton Content="Hide Ship City and Name" OnClick="HideColumnsContent" />
<SfButton Content="Show Ship City" OnClick="ShowColumnContent" />
<SfButton Content="Show Ship City and Name" OnClick="ShowColumnsContent" />
<SfButton Content="Open Chooser" OnClick="OpenChooserContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" ShowColumnChooser="true">
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
    private async Task HideColumnContent() => await DefaultGrid.HideColumnAsync(nameof(OrderData.ShipCity), "Field");
    private async Task HideColumnsContent() => await DefaultGrid.HideColumnsAsync(new[] { nameof(OrderData.ShipCity), nameof(OrderData.ShipName) }, "Field");
    private async Task ShowColumnContent() => await DefaultGrid.ShowColumnAsync(nameof(OrderData.ShipCity), "Field");
    private async Task ShowColumnsContent() => await DefaultGrid.ShowColumnsAsync(new[] { nameof(OrderData.ShipCity), nameof(OrderData.ShipName) }, "Field");
    private async Task OpenChooserContent() => await DefaultGrid.OpenColumnChooserAsync();
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData { /* same as above */ }
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Column layout and reorder examples

Use these methods to resize or move columns. This section helps new users understand how to make the grid easier to scan.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `AutoFitColumnAsync` | Fits one column to its content. | `string fieldName` | `Task` |
| `AutoFitColumnsAsync` | Fits all or selected columns. | None or `string[] fields` | `Task` |
| `ReorderColumnAsync` | Moves one column before another. | `string fromFieldName`, `string toFieldName` | `Task` |
| `ReorderColumnByIndexAsync` | Reorders by index. | `int fromIndex`, `int toIndex` | `Task` |
| `ReorderColumnByTargetIndexAsync` | Moves a column to a target index. | `string fieldName`, `int toIndex` | `Task` |
| `ReorderColumnsAsync` | Reorders multiple columns. | `List<string> fromFieldNames`, `string toFieldName` or `string[] fromFieldNames`, `string toFieldName` | `Task` |
| `ReorderRowAsync` | Reorders rows. | `int fromIndex`, `int toIndex` | `Task` |

Prerequisites:
- Set `AllowReordering="true"` for autofit behavior.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Auto Fit Order ID" OnClick="AutoFitColumnContent" />
<SfButton Content="Auto Fit All" OnClick="AutoFitColumnsContent" />
<SfButton Content="Move Ship City" OnClick="ReorderColumnContent" />
<SfButton Content="Move By Index" OnClick="ReorderByIndexContent" />
<SfButton Content="Move By Target Index" OnClick="ReorderByTargetIndexContent" />
<SfButton Content="Move Multiple Columns" OnClick="ReorderColumnsContent" />
<SfButton Content="Move Row" OnClick="ReorderRowContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" AllowReordering="true">
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
    private async Task AutoFitColumnContent() => await DefaultGrid.AutoFitColumnAsync(nameof(OrderData.OrderID));
    private async Task AutoFitColumnsContent() => await DefaultGrid.AutoFitColumnsAsync();
    private async Task ReorderColumnContent() => await DefaultGrid.ReorderColumnAsync(nameof(OrderData.ShipCity), nameof(OrderData.CustomerID));
    private async Task ReorderByIndexContent() => await DefaultGrid.ReorderColumnByIndexAsync(2, 1);
    private async Task ReorderByTargetIndexContent() => await DefaultGrid.ReorderColumnByTargetIndexAsync(nameof(OrderData.ShipCity), 1);
    private async Task ReorderColumnsContent() => await DefaultGrid.ReorderColumnsAsync(new List<string> { nameof(OrderData.ShipCity), nameof(OrderData.ShipName) }, nameof(OrderData.CustomerID));
    private async Task ReorderRowContent() => await DefaultGrid.ReorderRowAsync(0, 1);
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData { /* same as above */ }
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Column and data information examples

Use these methods when you need to read the current grid state from code. They are useful for advanced scenarios and for learning how the grid stores its data and columns.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `GetCellValueByIndexAsync` | Gets a cell value by row and column index. | `int rowIndex`, `int columnIndex` | `Task<object>` |
| `GetColumnByFieldAsync` | Gets a column by field name. | `string fieldName` | `Task<GridColumn>` |
| `GetColumnByUidAsync` | Gets a column by UID. | `string uid` | `Task<GridColumn>` |
| `GetColumnFieldNamesAsync` | Gets bound column field names. | None | `Task<List<string>>` |
| `GetColumnIndexByFieldAsync` | Gets a column index by field name. | `string fieldName` | `Task<int>` |
| `GetColumnIndexByUidAsync` | Gets a column index by UID. | `string uid` | `Task<int>` |
| `GetColumnsAsync` | Gets the grid columns. | `bool? isRefresh = null` | `Task<List<GridColumn>>` |
| `GetCurrentViewRecordsAsync` | Gets the visible records. | None | `Task<List<TValue>>` |
| `GetForeignKeyColumnsAsync` | Gets foreign key columns. | None | `Task<List<GridColumn>>` |
| `GetHiddenColumnsAsync` | Gets hidden columns. | None | `Task<List<GridColumn>>` |
| `GetPrimaryKeyFieldNamesAsync` | Gets primary key field names. | None | `Task<List<string>>` |
| `GetRowIndexByPrimaryKeyAsync` | Gets a row index by primary key. | `object value`, `bool searchAcrossRecords = false` | `Task<int>` |
| `GetUidByColumnFieldAsync` | Gets a column UID by field name. | `string fieldName` | `Task<string>` |
| `GetVisibleColumnsAsync` | Gets visible columns. | None | `Task<List<GridColumn>>` |

Prerequisites:
- No special grid settings are required.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Show Selected Info" OnClick="ShowInfoContent" />
<SfButton Content="Find Order 10250" OnClick="FindRowContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders">
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
    private async Task ShowInfoContent()
    {
        var value = await DefaultGrid.GetCellValueByIndexAsync(0, 0);
        var columns = await DefaultGrid.GetColumnsAsync();
        var fields = await DefaultGrid.GetColumnFieldNamesAsync();
        var visible = await DefaultGrid.GetVisibleColumnsAsync();
        var hidden = await DefaultGrid.GetHiddenColumnsAsync();
        var primaryKeys = await DefaultGrid.GetPrimaryKeyFieldNamesAsync();
        var foreignKeyColumns = await DefaultGrid.GetForeignKeyColumnsAsync();
        var currentRecords = await DefaultGrid.GetCurrentViewRecordsAsync();
        var firstColumn = await DefaultGrid.GetColumnByFieldAsync(nameof(OrderData.OrderID));
        var firstColumnByUid = await DefaultGrid.GetColumnByUidAsync(firstColumn.Uid);
        var columnIndex = await DefaultGrid.GetColumnIndexByFieldAsync(nameof(OrderData.OrderID));
        var columnIndexByUid = await DefaultGrid.GetColumnIndexByUidAsync(firstColumn.Uid);
        var uid = await DefaultGrid.GetUidByColumnFieldAsync(nameof(OrderData.OrderID));
        var rowIndex = await DefaultGrid.GetRowIndexByPrimaryKeyAsync(10250);
    }
    private async Task FindRowContent() => await DefaultGrid.GetRowIndexByPrimaryKeyAsync(10250);
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData { /* same as above */ }
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Refresh and spinner examples

Use these methods to redraw the grid or show a loading indicator while work is running.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `HideSpinnerAsync` | Hides the loading spinner. | None | `Task` |
| `Refresh` | Refreshes the grid header and content. | `bool isModelRefresh = false` | `Task` |
| `RefreshColumnsAsync` | Refreshes the grid after external column changes. | None | `Task` |
| `RefreshHeaderAsync` | Refreshes the grid header. | None | `Task` |
| `ShowSpinnerAsync` | Shows the spinner. | None | `Task` |

Prerequisites:
- No special settings are required.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Show Spinner" OnClick="ShowSpinnerContent" />
<SfButton Content="Refresh" OnClick="RefreshContent" />
<SfButton Content="Refresh Columns" OnClick="RefreshColumnsContent" />
<SfButton Content="Refresh Header" OnClick="RefreshHeaderContent" />
<SfButton Content="Hide Spinner" OnClick="HideSpinnerContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders">
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
    private async Task ShowSpinnerContent() => await DefaultGrid.ShowSpinnerAsync();
    private async Task RefreshContent() => await DefaultGrid.Refresh();
    private async Task RefreshColumnsContent() => await DefaultGrid.RefreshColumnsAsync();
    private async Task RefreshHeaderContent() => await DefaultGrid.RefreshHeaderAsync();
    private async Task HideSpinnerContent() => await DefaultGrid.HideSpinnerAsync();
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData { /* same as above */ }
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Toolbar, focus and other examples

These methods are less common, but they are useful when you need to control toolbar buttons, focus the grid, or use WebMCP integration.

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `EnableToolbarItemsAsync` | Enables or disables toolbar items. | `List<string> items`, `bool isEnable` | `Task` |
| `FocusAsync` | Focuses the grid element. | None | `Task` |
| `GetWebMcpToolsAsync` | Gets WebMCP tools for the grid. | `IEnumerable<string>? toolNames = null` | `Task<IReadOnlyList<IGridWebMcpTool>>` |
| `UpdateExternalMessageAsync` | Updates the external message text. | `string message` | `Task` |

Prerequisites:
- The grid must be rendered before calling these methods.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Buttons

<SfButton Content="Focus Grid" OnClick="FocusContent" />
<SfButton Content="Enable Toolbar Items" OnClick="ToolbarContent" />
<SfButton Content="Show Message" OnClick="MessageContent" />
<SfButton Content="Load WebMCP Tools" OnClick="WebMcpContent" />

<SfGrid @ref="DefaultGrid" DataSource="@Orders" Toolbar="@(new List<string>() { "Add", "Edit", "Delete" })">
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
    private async Task FocusContent() => await DefaultGrid.FocusAsync();
    private async Task ToolbarContent() => await DefaultGrid.EnableToolbarItemsAsync(new List<string> { "Add", "Edit" }, true);
    private async Task MessageContent() => await DefaultGrid.UpdateExternalMessageAsync("Grid is ready.");
    private async Task WebMcpContent() => _ = await DefaultGrid.GetWebMcpToolsAsync();
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
internal sealed class OrderData { /* same as above */ }
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/TODO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

API reference: https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html
