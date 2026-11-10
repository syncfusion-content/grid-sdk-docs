---
layout: post
title: Row Drag and Drop Between Multiple TreeGrids in Blazor TreeGrid | Syncfusion®
description: Learn how to move rows between three or more Blazor TreeGrids using the RowDropSettings TargetID property, with working samples.
platform: grid-sdk
control: TreeGrid
documentation: ug
---

# Row Drag and Drop Between Multiple TreeGrids in Blazor Tree Grid Component

Rows can be moved between three or more TreeGrids by setting [AllowRowDragAndDrop](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.SfTreeGrid-1.html#Syncfusion_Blazor_TreeGrid_SfTreeGrid_1_AllowRowDragAndDrop) to true and configuring the destination of each TreeGrid with the [TargetID](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridRowDropSettings_TargetID) property of [RowDropSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridRowDropSettings.html).

## Configure the target TreeGrid for each instance

The [TargetID](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridRowDropSettings_TargetID) property accepts the ID of a single destination TreeGrid. Because each TreeGrid owns its own [RowDropSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridRowDropSettings.html) instance, a row can only be dropped into the TreeGrid that the dragged TreeGrid points to.

To connect three or more TreeGrids, set the [TargetID](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridRowDropSettings_TargetID) of every TreeGrid that should accept rows to the ID of its destination. The following table shows the configuration used in the sample that follows.

| TreeGrid ID | TargetID value | Rows can be dropped into |
|---|---|---|
| `TreeGrid1` | `TreeGrid2` | `TreeGrid2` |
| `TreeGrid2` | `TreeGrid3` | `TreeGrid3` |
| `TreeGrid3` | `TreeGrid1` | `TreeGrid1` |

This creates a cycle, so a row can be moved from `TreeGrid1` to `TreeGrid2`, from `TreeGrid2` to `TreeGrid3`, and from `TreeGrid3` back to `TreeGrid1`.

To let several TreeGrids feed rows into a single destination, point each of them at the same TreeGrid ID. For example, setting the [TargetID](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridRowDropSettings_TargetID) of `TreeGrid1` and `TreeGrid2` to `TreeGrid3` allows both of them to drop rows into `TreeGrid3`.

N> - The [TargetID](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridRowDropSettings_TargetID) must contain the ID of the destination TreeGrid, and the ID must be unique across the page.  
- The order in which the TreeGrids are rendered does not affect the drag and drop behavior. The destination TreeGrid can be created before or after the source TreeGrid.

## Enable row drag and drop between three TreeGrids

The following example enables [AllowRowDragAndDrop](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.SfTreeGrid-1.html#Syncfusion_Blazor_TreeGrid_SfTreeGrid_1_AllowRowDragAndDrop) on three TreeGrids and configures a circular drop target for each of them using the [TargetID](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridRowDropSettings_TargetID) property.

{% tabs %}

{% highlight razor %}

@using TreeGridComponent.Data;
@using Syncfusion.Blazor.TreeGrid;

<div style="display: flex; gap: 16px;">
    <SfTreeGrid ID="TreeGrid1" DataSource="@TreeGridData" AllowRowDragAndDrop="true" AllowSelection="true" TreeColumnIndex="1" IdMapping="TaskId" ParentIdMapping="ParentId" Height="300">
        <TreeGridSelectionSettings Type="Syncfusion.Blazor.Grids.SelectionType.Multiple"></TreeGridSelectionSettings>
        <TreeGridRowDropSettings TargetID="TreeGrid2"></TreeGridRowDropSettings>
        <TreeGridColumns>
            <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80" IsPrimaryKey="true" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
            <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
            <TreeGridColumn Field="Duration" HeaderText="Duration" Width="100" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
        </TreeGridColumns>
    </SfTreeGrid>

    <SfTreeGrid ID="TreeGrid2" DataSource="@SecondGrid" AllowRowDragAndDrop="true" AllowSelection="true" TreeColumnIndex="1" IdMapping="TaskId" ParentIdMapping="ParentId" Height="300">
        <TreeGridSelectionSettings Type="Syncfusion.Blazor.Grids.SelectionType.Multiple"></TreeGridSelectionSettings>
        <TreeGridRowDropSettings TargetID="TreeGrid3"></TreeGridRowDropSettings>
        <TreeGridColumns>
            <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80" IsPrimaryKey="true" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
            <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
            <TreeGridColumn Field="Duration" HeaderText="Duration" Width="100" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
        </TreeGridColumns>
    </SfTreeGrid>

    <SfTreeGrid ID="TreeGrid3" DataSource="@ThirdGrid" AllowRowDragAndDrop="true" AllowSelection="true" TreeColumnIndex="1" IdMapping="TaskId" ParentIdMapping="ParentId" Height="300">
        <TreeGridSelectionSettings Type="Syncfusion.Blazor.Grids.SelectionType.Multiple"></TreeGridSelectionSettings>
        <TreeGridRowDropSettings TargetID="TreeGrid1"></TreeGridRowDropSettings>
        <TreeGridColumns>
            <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80" IsPrimaryKey="true" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
            <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
            <TreeGridColumn Field="Duration" HeaderText="Duration" Width="100" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
        </TreeGridColumns>
    </SfTreeGrid>
</div>

@code{
    public List<TreeData.BusinessObject> TreeGridData { get; set; }
    public List<TreeData.BusinessObject> SecondGrid { get; set; } = new List<TreeData.BusinessObject>();
    public List<TreeData.BusinessObject> ThirdGrid { get; set; } = new List<TreeData.BusinessObject>();

    protected override void OnInitialized()
    {
        this.TreeGridData = WrapData.GetWrapData().ToList();
    }
}

{% endhighlight %}

{% endtabs %}

N> - Enable selection to use row drag-and-drop.  
- For multiple-row drag, set SelectionSettings.Type to Multiple.  
- [IsPrimaryKey](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_IsPrimaryKey) must be set on a column to perform row drag-and-drop operations.

## Drop positions

When a row is dragged over a destination TreeGrid, the drop indicator shows the position where the row will be inserted.

1. **Above** – The row is inserted as a sibling above the target row.
2. **Below** – The row is inserted as a sibling below the target row.
3. **Child** – The row is inserted as a child of the target row.

These positions apply equally when the destination is another TreeGrid. Dropping a row in the **Child** position of a row in the destination TreeGrid makes it a child of that record, and the parent record of the dropped row is updated accordingly.

## Move multiple rows between TreeGrids

Multiple rows can be moved in a single drag operation. Select the rows in the source TreeGrid by holding the **Ctrl** key, and then drag any of the selected rows into the destination TreeGrid. All the selected rows are transferred together, and the dropped records are available in the [RowDropping](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridEvents-1.html#Syncfusion_Blazor_TreeGrid_TreeGridEvents_1_RowDropping) event through the `args.Data` property.

To move more than one row at a time, set [SelectionSettings.Type](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridSelectionSettings.html) to `Multiple` on the source TreeGrid.

## Handle the row drop events

The TreeGrid raises the following events during a drag and drop operation.

[RowDragStarting](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridEvents-1.html#Syncfusion_Blazor_TreeGrid_TreeGridEvents_1_RowDragStarting) - Triggers when the drag of a row starts.

[RowDropping](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridEvents-1.html#Syncfusion_Blazor_TreeGrid_TreeGridEvents_1_RowDropping) - Triggers when the row elements are dropped on the target element. The drop action can be cancelled in this event.

[RowDropped](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridEvents-1.html#Syncfusion_Blazor_TreeGrid_TreeGridEvents_1_RowDropped) - Triggers when the dragged row is dropped on the target element.

The [RowDropping](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridEvents-1.html#Syncfusion_Blazor_TreeGrid_TreeGridEvents_1_RowDropping) event receives a `RowDroppingEventArgs` object that provides the following information.

| Argument | Type | Description |
|---|---|---|
| `Data` | `List<T>` | The dragged record or the records dragged when multiple rows are selected. |
| `FromIndex` | `int` | The index of the dragged row in the source TreeGrid. |
| `DropIndex` | `int` | The index where the row is dropped in the destination TreeGrid. |
| `Target` | `Element` | The target element on which the row is dropped. |
| `Cancel` | `bool` | Setting it to `true` prevents the default drop behavior. |

The events are raised on the source TreeGrid, so the source and the destination can be identified from the target element when several TreeGrids are on the page.

{% tabs %}

{% highlight razor %}

@using TreeGridComponent.Data;
@using Syncfusion.Blazor.TreeGrid;
@using Syncfusion.Blazor.Grids;

<SfTreeGrid ID="TreeGrid1" DataSource="@TreeGridData" AllowRowDragAndDrop="true" AllowSelection="true" TreeColumnIndex="1" IdMapping="TaskId" ParentIdMapping="ParentId" Height="300">
    <TreeGridSelectionSettings Type="Syncfusion.Blazor.Grids.SelectionType.Multiple"></TreeGridSelectionSettings>
    <TreeGridRowDropSettings TargetID="TreeGrid2"></TreeGridRowDropSettings>
    <TreeGridEvents TValue="TreeData.BusinessObject" RowDropping="RowDroppingHandler"></TreeGridEvents>
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80" IsPrimaryKey="true" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridColumn Field="Duration" HeaderText="Duration" Width="100" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code{
    public List<TreeData.BusinessObject> TreeGridData { get; set; }

    protected override void OnInitialized()
    {
        this.TreeGridData = WrapData.GetWrapData().ToList();
    }

    public void RowDroppingHandler(RowDroppingEventArgs<TreeData.BusinessObject> args)
    {
        // The dropped records are available in args.Data.
        // Set args.Cancel to true to prevent the default drop behavior.
    }
}

{% endhighlight %}

{% endtabs %}

## Supported combinations

### Works with:

- The [AllowRowDragAndDrop](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.SfTreeGrid-1.html#Syncfusion_Blazor_TreeGrid_SfTreeGrid_1_AllowRowDragAndDrop) property, which must be enabled on the source and the destination TreeGrid.
- [SelectionSettings.Type](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridSelectionSettings.html) set to `Multiple`, which enables moving several rows in one drag operation.
- The [IsPrimaryKey](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_IsPrimaryKey) property, which is required for the drop to be applied.
- The [RowDropping](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridEvents-1.html#Syncfusion_Blazor_TreeGrid_TreeGridEvents_1_RowDropping) event, which allows the drop to be cancelled.

### Known limitations:

- The [TargetID](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridRowDropSettings_TargetID) property holds a single destination ID, so a row can only be dropped into the TreeGrid that the source TreeGrid points to. A TreeGrid cannot accept rows from several sources and forward them elsewhere in the same operation.
- When the [TargetID](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridRowDropSettings_TargetID) property is set, the TreeGrid does not render the drag icon column, and the drag is performed using the selected row.
- The row drag and drop feature does not have built-in support for the row template and detail template features of the TreeGrid.

## See also

[Row Drag and Drop in Blazor Tree Grid Component](row-drag-and-drop)

[Sorting data in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid](https://ej2.syncfusion.com/documentation/treegrid/sorting)

[Filtering data in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid](https://ej2.syncfusion.com/documentation/treegrid/filtering/filtering)
