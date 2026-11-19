---
layout: post
title: Search in WinUI Data Grid | SyncfusionÂ®
description: Search in WinUI Data Grid locates and highlights matching cell text, navigates between matches, and optionally filters rows using the SearchHelper class.
platform: grid-sdk
control: Data Grid
documentation: ug
appliesto: UI Component Suite, Grid SDK
---

# Search in WinUI Data Grid

SfDataGrid allows you to search the data displayed in the grid and highlight the matching text in cells. The search operation is performed by the `SearchHelper` class, which is available through the `SfDataGrid.SearchHelper` property.

## Enable searching

Searching is disabled by default. Enable it for all columns by setting `SearchHelper.AllowSearching` to `true`, and then call the `SearchHelper.Search` method with the text to find.

{% tabs %}
{% highlight c# %}
this.sfDataGrid.SearchHelper.AllowSearching = true;
this.sfDataGrid.SearchHelper.Search(searchTextBox.Text);
{% endhighlight %}
{% endtabs %}

The `Search` method highlights the matching text in the cells that are currently rendered. Highlighting is applied only to cells whose display element is a `TextBlock`.

N> If `SearchHelper.AllowSearching` is `false` and no column sets `GridColumn.AllowSearching` to `true`, the `Search`, `FindNext` and `FindPrevious` methods do nothing.

### Enable searching for specific columns

You can include or exclude individual columns by setting the `GridColumn.AllowSearching` property.

{% tabs %}
{% highlight xaml %}
<dataGrid:SfDataGrid x:Name="sfDataGrid"
                     AutoGenerateColumns="False"
                     ItemsSource="{Binding Orders}">
    <dataGrid:SfDataGrid.Columns>
        <dataGrid:GridTextColumn AllowSearching="True" MappingName="OrderID" />
        <dataGrid:GridTextColumn AllowSearching="True" MappingName="CustomerName" />
        <dataGrid:GridTextColumn AllowSearching="False" MappingName="ShipCity" />
    </dataGrid:SfDataGrid.Columns>
</dataGrid:SfDataGrid>
{% endhighlight %}
{% highlight c# %}
this.sfDataGrid.Columns["OrderID"].AllowSearching = true;
this.sfDataGrid.Columns["ShipCity"].AllowSearching = false;
{% endhighlight %}
{% endtabs %}

N> `GridColumn.AllowSearching` takes higher priority than `SearchHelper.AllowSearching`. A column that does not set the property uses the value of `SearchHelper.AllowSearching`.

## Search type

Use the `SearchHelper.SearchType` property to specify how the cell text is compared with the search text. The default value is `SearchType.Contains`.

| SearchType | Description |
|---|---|
| `Contains` | Matches cells that contain the search text. |
| `StartsWith` | Matches cells that start with the search text. |
| `EndsWith` | Matches cells that end with the search text. |

{% tabs %}
{% highlight c# %}
this.sfDataGrid.SearchHelper.AllowSearching = true;
this.sfDataGrid.SearchHelper.SearchType = SearchType.StartsWith;
this.sfDataGrid.SearchHelper.Search(searchTextBox.Text);
{% endhighlight %}
{% endtabs %}

## Case-sensitive search

Search is case-insensitive by default. Set `SearchHelper.AllowCaseSensitiveSearch` to `true` to match the case of the search text. If search text is already applied, changing this property re-runs the search.

{% tabs %}
{% highlight c# %}
this.sfDataGrid.SearchHelper.AllowCaseSensitiveSearch = true;
{% endhighlight %}
{% endtabs %}

## Filtering based on search

Set `SearchHelper.AllowFiltering` to `true` to display only the rows that contain the search text. The default value is `false`.

{% tabs %}
{% highlight c# %}
this.sfDataGrid.SearchHelper.AllowSearching = true;
this.sfDataGrid.SearchHelper.AllowFiltering = true;
this.sfDataGrid.SearchHelper.Search(searchTextBox.Text);
{% endhighlight %}
{% endtabs %}

N> Setting `AllowFiltering` assigns the search filter to `SfDataGrid.View.Filter`. Setting it back to `false` removes the view filter.

## Customizing search highlight

The matching text is highlighted by using the following properties of `SearchHelper`.

| Property | Description | Default |
|---|---|---|
| `SearchBrush` | Background of the matching text. | `Yellow` |
| `SearchForegroundBrush` | Foreground of the matching text. Applied only when the property is explicitly set. | `Black` |
| `SearchHighlightBrush` | Background of the current match navigated by `FindNext` or `FindPrevious`. | `LightSalmon` |
| `SearchForegroundHighlightBrush` | Foreground of the current match. Applied only when the property is explicitly set. | `Black` |
| `CanHighlightSearchText` | Specifies whether the matching text is highlighted. | `true` |

{% tabs %}
{% highlight c# %}
this.sfDataGrid.SearchHelper.SearchBrush = new SolidColorBrush(Colors.LightGreen);
this.sfDataGrid.SearchHelper.SearchForegroundBrush = new SolidColorBrush(Colors.DarkGreen);
this.sfDataGrid.SearchHelper.SearchHighlightBrush = new SolidColorBrush(Colors.Orange);
this.sfDataGrid.SearchHelper.SearchForegroundHighlightBrush = new SolidColorBrush(Colors.White);
{% endhighlight %}
{% endtabs %}

N> Changing any of the brush properties re-runs the search when search text is already applied.

## Navigating between matches

Use the `SearchHelper.FindNext` and `SearchHelper.FindPrevious` methods to move to the next or previous matching cell. Both methods return `true` when a matching cell is found, scroll the cell into view when needed, and highlight it by using `SearchHighlightBrush`.

{% tabs %}
{% highlight c# %}
this.sfDataGrid.SearchHelper.AllowSearching = true;
this.sfDataGrid.SearchHelper.FindNext(searchTextBox.Text);
this.sfDataGrid.SearchHelper.FindPrevious(searchTextBox.Text);
{% endhighlight %}
{% endtabs %}

The position of the current match is available in the `SearchHelper.CurrentRowColumnIndex` property.

### Moving the current cell to the match

`FindNext` and `FindPrevious` do not move the current cell. To move it, pass `CurrentRowColumnIndex` to the `SfDataGrid.MoveCurrentCell` method.

{% tabs %}
{% highlight c# %}
if (this.sfDataGrid.SearchHelper.FindNext(searchTextBox.Text))
    this.sfDataGrid.MoveCurrentCell(this.sfDataGrid.SearchHelper.CurrentRowColumnIndex);
{% endhighlight %}
{% endtabs %}

N> `MoveCurrentCell` is not applicable when `SelectionUnit` and `NavigationMode` are `Row`.

## Clearing search

Call `SearchHelper.ClearSearch` to remove the highlighting and reset `CurrentRowColumnIndex`. Calling `Search` with an empty string also clears the search.

{% tabs %}
{% highlight c# %}
this.sfDataGrid.SearchHelper.ClearSearch();
{% endhighlight %}
{% endtabs %}

## Getting the matching records

The `SearchHelper.GetSearchRecords` method returns a `List<GridSearchCellInfo>`. Each item contains the matching `Record` and the `ColumnCollection` of columns in which the text matched. The method returns `null` when no search text is applied.

{% tabs %}
{% highlight c# %}
this.sfDataGrid.SearchHelper.Search(searchTextBox.Text);
var searchRecords = this.sfDataGrid.SearchHelper.GetSearchRecords();
if (searchRecords != null && searchRecords.Count > 0)
{
    var firstRecord = searchRecords[0].Record;
    var matchedColumns = searchRecords[0].ColumnCollection;
}
{% endhighlight %}
{% endtabs %}

## Search in Master-Details View
Master-details view allows you to search the data by using `SearchHelper.Search` method in the [ViewDefinition.DataGrid](https://help.syncfusion.com/cr/winui/Syncfusion.UI.Xaml.DataGrid.GridViewDefinition.html#Syncfusion_UI_Xaml_DataGrid_GridViewDefinition_DataGrid).

{% tabs %}
{% highlight c# %}

(this.sfDataGrid.DetailsViewDefinition[0] as GridViewDefinition).DataGrid.SearchHelper.Search(TextBox.Text);

{% endhighlight %}
{% endtabs %}

### Navigating cells based on search text in DetailsViewDataGrid

You can navigate to the cells contains the SearchText using `SearchHelper.FindNext` and `SearchHelper.FindPrevious` methods in [ViewDefinition.DataGrid](https://help.syncfusion.com/cr/winui/Syncfusion.UI.Xaml.DataGrid.GridViewDefinition.html#Syncfusion_UI_Xaml_DataGrid_GridViewDefinition_DataGrid).

{% tabs %}
{% highlight c# %}

(this.sfDataGrid.DetailsViewDefinition[0] as GridViewDefinition).DataGrid.SearchHelper.FindNext(SearchBox.Text);
(this.sfDataGrid.DetailsViewDefinition[0] as GridViewDefinition).DataGrid.SearchHelper.FindPrevious(SearchBox.Text);

{% endhighlight %}
{% endtabs %}

N> It is not possible to Navigate with the two DataGrid at a time.

## Search customization

You can change the default search behavior by deriving from `SearchHelper` and assigning the instance to `SfDataGrid.SearchHelper`.

{% tabs %}
{% highlight c# %}
this.sfDataGrid.SearchHelper = new SearchHelperExt(this.sfDataGrid);

public class SearchHelperExt : SearchHelper
{
    public SearchHelperExt(SfDataGrid dataGrid) : base(dataGrid)
    {
    }
}
{% endhighlight %}
{% endtabs %}

### Select the record based on the SearchText

You can select the records which contains the search text by using `GetSearchedRecord` method. 

{% tabs %}
{% highlight c# %}

this.dataGrid.SelectedItems.Clear();
this.dataGrid.SearchHelper.Search("SearchText"); 
var list = this.dataGrid.SearchHelper.GetSearchRecords();
int recordIndex = this.dataGrid.ResolveToRecordIndex(this.dataGrid.ResolveToRowIndex(list[0].Record));
this.dataGrid.SelectedIndex = recordIndex;

{% endhighlight %}
{% endtabs %}

### Search in GridComboBoxColumn

Search highlights text only in cells that display a `TextBlock`. `GridComboBoxColumn` loads a `ContentControl` in display mode, so its cells are not searched by default. To search a `GridComboBoxColumn`, create a column and a renderer that display a `TextBlock`.

**Step 1:** Derive from `GridComboBoxColumn` and set a new cell type. Set `UseBindingValue` to `true` so that the search compares the text with the displayed text instead of the underlying `SelectedValuePath` value.

{% tabs %}
{% highlight c# %}
public class ComboBoxColumnExt : GridComboBoxColumn
{
    public ComboBoxColumnExt()
    {
        SetCellType("ComboBoxExt");
        UseBindingValue = true;
    }
}
{% endhighlight %}
{% endtabs %}

**Step 2:** Create a renderer that uses `TextBlock` as the display element and `SfComboBox` as the edit element.

{% tabs %}
{% highlight c# %}
public class ComboBoxRendererExt : GridVirtualizingCellRenderer<TextBlock, SfComboBox>
{
    public override void OnInitializeDisplayElement(DataColumnBase dataColumn, TextBlock uiElement, object dataContext)
    {
        var column = dataColumn.GridColumn;
        uiElement.SetBinding(TextBlock.TextProperty, column.DisplayBinding);
        uiElement.VerticalAlignment = VerticalAlignment.Center;
        uiElement.Margin = new Thickness(12, 0, 12, 0);
    }

    public override void OnInitializeEditElement(DataColumnBase dataColumn, SfComboBox uiElement, object dataContext)
    {
        var column = (GridComboBoxColumn)dataColumn.GridColumn;
        var source = (Binding)column.ValueBinding;

        uiElement.SetBinding(SfComboBox.SelectedValueProperty,
            new Binding { Path = source.Path, Mode = BindingMode.TwoWay, Converter = source.Converter });
        uiElement.SetBinding(SfComboBox.ItemsSourceProperty,
            new Binding { Path = new PropertyPath("ItemsSource"), Source = column });
        uiElement.SetBinding(SfComboBox.DisplayMemberPathProperty,
            new Binding { Path = new PropertyPath("DisplayMemberPath"), Source = column });
        uiElement.SetBinding(SfComboBox.TextMemberPathProperty,
            new Binding { Path = new PropertyPath("DisplayMemberPath"), Source = column });
        uiElement.SetBinding(SfComboBox.SelectedValuePathProperty,
            new Binding { Path = new PropertyPath("SelectedValuePath"), Source = column });
    }

    public override object GetControlValue()
    {
        if (!HasCurrentCellState)
            return null;
        return CurrentCellRendererElement.GetValue(IsInEditing ? SfComboBox.SelectedValueProperty : TextBlock.TextProperty);
    }
}
{% endhighlight %}
{% endtabs %}

**Step 3:** Add the renderer to the `SfDataGrid.CellRenderers` collection with the cell type set in the column, and use the column in the grid.

{% tabs %}
{% highlight xaml %}
<dataGrid:SfDataGrid x:Name="sfDataGrid"
                     AutoGenerateColumns="False"
                     ItemsSource="{Binding Orders}">
    <dataGrid:SfDataGrid.Columns>
        <local:ComboBoxColumnExt MappingName="CustomerID"
                                 HeaderText="Customer"
                                 ItemsSource="{Binding Customers}"
                                 DisplayMemberPath="CustomerName"
                                 SelectedValuePath="CustomerID" />
    </dataGrid:SfDataGrid.Columns>
</dataGrid:SfDataGrid>
{% endhighlight %}
{% highlight c# %}
this.sfDataGrid.CellRenderers.Add("ComboBoxExt", new ComboBoxRendererExt());
this.sfDataGrid.SearchHelper.AllowSearching = true;
this.sfDataGrid.SearchHelper.Search(searchTextBox.Text);
{% endhighlight %}
{% endtabs %}
