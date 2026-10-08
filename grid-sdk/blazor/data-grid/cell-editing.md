---
layout: post
title: Blazor Grid Cell Editing | Syncfusion
description: Learn how to edit grid cells in Blazor Data Grid, customize editing workflows, validate input, manage updates, and control editing behavior.
platform: grid-sdk
control: DataGrid
documentation: ug
keywords: blazor datagrid cell editing, blazor grid cell edit mode, cell editing enterkeydirection, blazor grid editonkeypress
---

# Cell Editing in Blazor Data Grid

Cell editing provides a streamlined way to update individual cell values directly within the [Blazor DataGrid](https://www.syncfusion.com/blazor-components/blazor-datagrid). It is designed for quick, inline modifications, making data entry and corrections more efficient. This approach ensures that changes are applied seamlessly to large datasets while maintaining consistency with the grid’s overall editing experience.

**Why use cell editing?**

In enterprise applications, users often need to correct a few values across a large dataset. Opening a separate edit form for each change adds unnecessary steps and interrupts the workflow. Cell editing streamlines these corrections, reduces repetitive steps, and boosts productivity.

**Pain points**

- Repeated clicks and form openings to update individual values.
- Context switching between the grid and separate edit forms.
- Slower corrections when changes span many records.

**Use case: Inventory management**

A warehouse operator finds incorrect quantities for 50 products. Cell editing allows each quantity to be corrected directly in the grid, without opening a separate dialog for every product, so the operator can continue working in the same view.

**Enable cell editing**

To enable cell editing in the Data Grid, configure the [GridEditSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEditSettings.html)-> [Mode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEditSettings.html#Syncfusion_Blazor_Grids_GridEditSettings_Mode) property to `EditMode.Cell` and allow editing through the [GridEditSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEditSettings.html)-> [Mode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEditSettings.html#Syncfusion_Blazor_Grids_GridEditSettings_Mode)-> [AllowEditing](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEditSettings.html#Syncfusion_Blazor_Grids_GridEditSettings_AllowAdding) property.

With both properties configured, double-clicking a cell, or selecting a cell and pressing **Enter** or **F2**, switches that cell into edit mode.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids

<SfGrid DataSource="@OrderData" Toolbar="@(new List<string>() { "Add", "Edit", "Delete", "Update", "Cancel" })" Height="315">
    <GridEditSettings AllowAdding="true" AllowEditing="true" AllowDeleting="true" Mode="EditMode.Cell"></GridEditSettings>
    <GridColumns>
        <GridColumn Field=@nameof(OrderDetails.OrderID) HeaderText="Order ID" IsPrimaryKey="true" ValidationRules="@(new ValidationRules{ Required=true})" TextAlign="TextAlign.Right" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderDetails.CustomerID) HeaderText="Customer Name" ValidationRules="@(new ValidationRules{ Required=true, MinLength=5})" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderDetails.Freight) HeaderText="Freight" ValidationRules="@(new ValidationRules{ Required=true, Min=1, Max=1000})" Format="C2" TextAlign="TextAlign.Right" EditType="EditType.NumericEdit" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderDetails.ShipCountry) HeaderText="Ship Country" EditType="EditType.DropDownEdit" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    public List<OrderDetails> OrderData { get; set; }
    protected override void OnInitialized()
    {
        OrderData = OrderDetails.GetAllRecords();
    }
}
{% endhighlight %}
{% highlight c# tabtitle="OrderDetails.cs" %}
public class OrderDetails
{
    public static List<OrderDetails> Order = new List<OrderDetails>();
    public OrderDetails() { }
    public OrderDetails(int OrderID, string CustomerId, double Freight, string ShipCountry)
    {
        this.OrderID = OrderID;
        this.CustomerID = CustomerId;
        this.Freight = Freight;
        this.ShipCountry = ShipCountry;    
    }
    public static List<OrderDetails> GetAllRecords()
    {
        if (Order.Count == 0)
        {
            Order.Add(new OrderDetails(10248, "VINET", 32.38, "France"));
            Order.Add(new OrderDetails(10249, "TOMSP", 11.61, "Germany"));
            Order.Add(new OrderDetails(10250, "HANAR", 65.83, "Brazil"));
            Order.Add(new OrderDetails(10251, "VICTE", 41.34, "France"));
            Order.Add(new OrderDetails(10252, "SUPRD", 51.3, "Belgium"));
            Order.Add(new OrderDetails(10253, "HANAR", 58.17, "Brazil"));
            Order.Add(new OrderDetails(10254, "CHOPS", 22.98, "Switzerland"));
            Order.Add(new OrderDetails(10255, "RICSU", 148.33, "Switzerland"));
            Order.Add(new OrderDetails(10256, "WELLI", 13.97, "Brazil"));
            Order.Add(new OrderDetails(10257, "HILAA", 81.91, "Venezuela"));
            Order.Add(new OrderDetails(10258, "ERNSH", 140.51, "Austria"));
            Order.Add(new OrderDetails(10259, "CENTC", 3.25, "Mexico"));
            Order.Add(new OrderDetails(10260, "OTTIK", 55.09, "Germany"));
            Order.Add(new OrderDetails(10261, "QUEDE", 3.05, "Brazil"));
            Order.Add(new OrderDetails(10262, "RATTC", 48.29, "USA"));
        }
        return Order;
    }
    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public double Freight { get; set; }
    public string ShipCountry { get; set; }
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/VtBHCtjCzHpxoHek?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

> When editing is enabled, the [IsPrimaryKey](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridColumn.html#Syncfusion_Blazor_Grids_GridColumn_IsPrimaryKey) property must be set to `true` on the unique column so that updates are mapped to the correct record.

## Edit on key press in cell editing

Edit on key press is an interaction mode in which a selected cell switches to edit state as soon as a key is pressed, instead of requiring a double-click or a separate action to begin editing. This removes the extra step of double-clicking before every correction, keeping repetitive data-entry workflows moving without interruption. This option is useful for data-entry-heavy grids where a cell is selected and its value overwritten immediately, such as order processing sheets, inventory counts, or timesheet grids.

To enable set the [AllowEditOnKeyPress](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEditSettings.html#Syncfusion_Blazor_Grids_GridEditSettings_AllowEditOnKeyPress) property in [GridEditSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEditSettings.html) to `true`. When enabled, pressing a printable character key, such as a letter, digit, or symbol, while a cell is selected automatically places the cell in edit mode and applies the entered character directly to the cell.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids

<SfGrid DataSource="@OrderData" Toolbar="@(new List<string>() { "Add", "Edit", "Delete", "Update", "Cancel" })" Height="315">
    <GridEditSettings AllowAdding="true" AllowEditing="true" AllowDeleting="true" Mode="EditMode.Cell" AllowEditOnKeyPress="true"></GridEditSettings>
    <GridColumns>
        <GridColumn Field=@nameof(OrderDetails.OrderID) HeaderText="Order ID" IsPrimaryKey="true" ValidationRules="@(new ValidationRules{ Required=true})" TextAlign="TextAlign.Right" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderDetails.CustomerID) HeaderText="Customer Name" ValidationRules="@(new ValidationRules{ Required=true, MinLength=5})" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderDetails.Freight) HeaderText="Freight" ValidationRules="@(new ValidationRules{ Required=true, Min=1, Max=1000})" Format="C2" TextAlign="TextAlign.Right" EditType="EditType.NumericEdit" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderDetails.ShipCountry) HeaderText="Ship Country" EditType="EditType.DropDownEdit" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    public List<OrderDetails> OrderData { get; set; }
    protected override void OnInitialized()
    {
        OrderData = OrderDetails.GetAllRecords();
    }
}
{% endhighlight %}
{% highlight c# tabtitle="OrderDetails.cs" %}
public class OrderDetails
{
    public static List<OrderDetails> Order = new List<OrderDetails>();
    public OrderDetails() { }
    public OrderDetails(int OrderID, string CustomerId, double Freight, string ShipCountry)
    {
        this.OrderID = OrderID;
        this.CustomerID = CustomerId;
        this.Freight = Freight;
        this.ShipCountry = ShipCountry;    
    }
    public static List<OrderDetails> GetAllRecords()
    {
        if (Order.Count == 0)
        {
            Order.Add(new OrderDetails(10248, "VINET", 32.38, "France"));
            Order.Add(new OrderDetails(10249, "TOMSP", 11.61, "Germany"));
            Order.Add(new OrderDetails(10250, "HANAR", 65.83, "Brazil"));
            Order.Add(new OrderDetails(10251, "VICTE", 41.34, "France"));
            Order.Add(new OrderDetails(10252, "SUPRD", 51.3, "Belgium"));
            Order.Add(new OrderDetails(10253, "HANAR", 58.17, "Brazil"));
            Order.Add(new OrderDetails(10254, "CHOPS", 22.98, "Switzerland"));
            Order.Add(new OrderDetails(10255, "RICSU", 148.33, "Switzerland"));
            Order.Add(new OrderDetails(10256, "WELLI", 13.97, "Brazil"));
            Order.Add(new OrderDetails(10257, "HILAA", 81.91, "Venezuela"));
            Order.Add(new OrderDetails(10258, "ERNSH", 140.51, "Austria"));
            Order.Add(new OrderDetails(10259, "CENTC", 3.25, "Mexico"));
            Order.Add(new OrderDetails(10260, "OTTIK", 55.09, "Germany"));
            Order.Add(new OrderDetails(10261, "QUEDE", 3.05, "Brazil"));
            Order.Add(new OrderDetails(10262, "RATTC", 48.29, "USA"));
        }
        return Order;
    }
    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public double Freight { get; set; }
    public string ShipCountry { get; set; }
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/rtLxiXDMzxRJUoQW?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Customize focus movement after save (EnterKeyDirection)

[EnterKeyDirection](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEditSettings.html#Syncfusion_Blazor_Grids_GridEditSettings_EnterKeyDirection) is a [GridEditSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEditSettings.html) property that controls where keyboard focus moves after a cell value is saved by pressing the `Enter` key. Without this control, keyboard-driven data entry can lose track of position after every save, forcing repeated re-selection of cells. Configure this property when data is entered in a specific pattern, such as moving down a single column with `NextRow`, moving across a row with `NextColumn`, or keeping focus fixed on the same cell with `None` for repeated corrections.

`EnterKeyDirection` is part of the [EnterKeyDirection](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.EnterKeyDirection.html) enumeration, which provides multiple options for customizing the focus behavior on `Enter` key. The available modes include `NextColumn`, `NextRow` and `None`.

| Enum value | Description |
|---------|-----|
| `EnterKeyDirection.NextColumn` | Moves focus to the next column in the row that was just saved. |
| `EnterKeyDirection.NextRow` | Moves focus to the same column in the next row. |
| `EnterKeyDirection.None` | Keeps focus on the cell that was just saved. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.DropDowns

<label>Enter Key Direction</label>
<SfDropDownList DataSource="@EnterDirectionOptions"
                @bind-Value="SelectedEnterDirection"
                TValue="EnterKeyDirection"
                TItem="DropdownOption<EnterKeyDirection>"
                PopupHeight="200px"
                Width="150px">
    <DropDownListFieldSettings Text="Label" Value="Value"></DropDownListFieldSettings>
</SfDropDownList>

<SfGrid DataSource="@OrderData" Toolbar="@(new List<string>() { "Add", "Edit", "Delete", "Update", "Cancel" })" Height="315">
    <GridEditSettings AllowAdding="true" AllowEditing="true" AllowDeleting="true" Mode="EditMode.Cell" EnterKeyDirection="@SelectedEnterDirection"></GridEditSettings>
    <GridColumns>
        <GridColumn Field=@nameof(OrderDetails.OrderID) HeaderText="Order ID" IsPrimaryKey="true" ValidationRules="@(new ValidationRules{ Required=true})" TextAlign="TextAlign.Right" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderDetails.CustomerID) HeaderText="Customer Name" ValidationRules="@(new ValidationRules{ Required=true, MinLength=5})" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderDetails.Freight) HeaderText="Freight" ValidationRules="@(new ValidationRules{ Required=true, Min=1, Max=1000})" Format="C2" TextAlign="TextAlign.Right" EditType="EditType.NumericEdit" Width="120"></GridColumn>
        <GridColumn Field=@nameof(OrderDetails.ShipCountry) HeaderText="Ship Country" EditType="EditType.DropDownEdit" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

@code
{
    public List<OrderDetails> OrderData { get; set; }
    private EnterKeyDirection SelectedEnterDirection { get; set; } = EnterKeyDirection.NextRow;

    private List<DropdownOption<EnterKeyDirection>> EnterDirectionOptions { get; set; } = new List<DropdownOption<EnterKeyDirection>>
    {
        new DropdownOption<EnterKeyDirection> { Label = "None", Value = EnterKeyDirection.None },
        new DropdownOption<EnterKeyDirection> { Label = "NextRow", Value = EnterKeyDirection.NextRow },
        new DropdownOption<EnterKeyDirection> { Label = "NextColumn", Value = EnterKeyDirection.NextColumn }
    };

    protected override void OnInitialized()
    {
        OrderData = OrderDetails.GetAllRecords();
    }
}
{% endhighlight %}
{% highlight c# tabtitle="OrderDetails.cs" %}
public class OrderDetails
{
    public static List<OrderDetails> Order = new List<OrderDetails>();
    public OrderDetails() { }
    public OrderDetails(int OrderID, string CustomerId, double Freight, string ShipCountry)
    {
        this.OrderID = OrderID;
        this.CustomerID = CustomerId;
        this.Freight = Freight;
        this.ShipCountry = ShipCountry;
    }
    public static List<OrderDetails> GetAllRecords()
    {
        if (Order.Count == 0)
        {
            Order.Add(new OrderDetails(10248, "VINET", 32.38, "France"));
            Order.Add(new OrderDetails(10249, "TOMSP", 11.61, "Germany"));
            Order.Add(new OrderDetails(10250, "HANAR", 65.83, "Brazil"));
            Order.Add(new OrderDetails(10251, "VICTE", 41.34, "France"));
            Order.Add(new OrderDetails(10252, "SUPRD", 51.3, "Belgium"));
            Order.Add(new OrderDetails(10253, "HANAR", 58.17, "Brazil"));
            Order.Add(new OrderDetails(10254, "CHOPS", 22.98, "Switzerland"));
            Order.Add(new OrderDetails(10255, "RICSU", 148.33, "Switzerland"));
            Order.Add(new OrderDetails(10256, "WELLI", 13.97, "Brazil"));
            Order.Add(new OrderDetails(10257, "HILAA", 81.91, "Venezuela"));
            Order.Add(new OrderDetails(10258, "ERNSH", 140.51, "Austria"));
            Order.Add(new OrderDetails(10259, "CENTC", 3.25, "Mexico"));
            Order.Add(new OrderDetails(10260, "OTTIK", 55.09, "Germany"));
            Order.Add(new OrderDetails(10261, "QUEDE", 3.05, "Brazil"));
            Order.Add(new OrderDetails(10262, "RATTC", 48.29, "USA"));
        }
        return Order;
    }
    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public double Freight { get; set; }
    public string ShipCountry { get; set; }
}

private class DropdownOption<T>
{
    public string? Label { get; set; }
    public T? Value { get; set; }
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/hZhRijjifxwTVfXq?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

> The `EnterKeyDirection` and `AllowEditOnKeyPress` properties apply only when `Mode` is set to `EditMode.Cell`.

## Troubleshooting

| Issue | Likely cause | Resolution |
|---|---|---|
| Double-clicking a cell does not start editing. | `AllowEditing` is set to `false`, or `Mode` is not set to `EditMode.Cell`. | Set both `AllowEditing="true"` and `Mode="EditMode.Cell"` in `GridEditSettings`. |
| Saved changes appear on the wrong record. | The primary key column is missing or `IsPrimaryKey` is not set. | Set `IsPrimaryKey="true"` on the unique identifier column. |
| Typing into a selected cell does not start editing. | `AllowEditOnKeyPress` is `false` (default). | Set `AllowEditOnKeyPress="true"` in `GridEditSettings`. |
| Focus does not move after pressing `Enter`. | `EnterKeyDirection` is set to `None`. | Set `EnterKeyDirection` to `NextRow` or `NextColumn` based on the desired direction. |
| A cell will not save. | The entered value fails a validation rule on the column. | Check the column's `ValidationRules` and correct the value, or adjust the rule. |

## Supported events for cell editing

Cell editing in the Blazor Data Grid enables users to update individual cells directly within the grid. Understanding the sequence and purpose of triggered events allows customization and extension of Blazor Grid functionality. The following table outlines key events associated with batch editing:

| Event | Description |
|-------|-------------|
| [OnCellEdit](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEvents-1.html#Syncfusion_Blazor_Grids_GridEvents_1_OnCellEdit) | Triggers before a cell enters edit mode in the UI, such as on double-click or pressing **F2**. |
| [OnCellSave](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEvents-1.html#Syncfusion_Blazor_Grids_GridEvents_1_OnCellSave) | Triggers before cell changes are updated in the UI, such as on pressing Enter or navigating to another cell. |
| [CellSaved](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEvents-1.html#Syncfusion_Blazor_Grids_GridEvents_1_CellSaved) | Triggers after cell changes are updated in the UI and the edited values are highlighted in the Blazor Grid. |
| [EditCanceling](https://blazor.syncfusion.com/documentation/datagrid/events#editcanceling) | Triggered before cancellation of an edit operation. Used for confirmation prompts or rollback logic. |
| [EditCanceled](https://blazor.syncfusion.com/documentation/datagrid/events#editcanceled) | Triggered after cancellation of an edit operation. |

## See also

* [Normal editing](./in-line-editing.md)
* [Batch editing](./batch-editing.md)
* [Dialog editing](./dialog-editing.md)
* [Template editing](./template-editing.md)
* [Column validation](./column-validation.md)
* [Edit types](./edit-types.md)
