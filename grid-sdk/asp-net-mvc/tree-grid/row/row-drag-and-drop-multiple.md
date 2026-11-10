---
layout: post
title: ASP.NET MVC TreeGrid Row Drag and Drop Between Multiple TreeGrids | Syncfusion
description: Learn how to drag and drop rows between three or more ASP.NET MVC TreeGrids using the rowDropSettings targetID property, with working samples.
platform: grid-sdk
control: Row Drag And Drop Between Multiple TreeGrids
documentation: ug
---

# Row Drag and Drop Between Multiple TreeGrids in ASP.NET MVC TreeGrid

The TreeGrid rows can be moved between three or more TreeGrid instances. Each TreeGrid declares the destination it accepts rows into through the [`targetID`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property of the [`rowDropSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html) object, so a row can be dragged from one TreeGrid into another without copying and pasting the data manually.

## Configure the target TreeGrid for each instance

The [`targetID`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property accepts the ID of a single destination TreeGrid. Because each TreeGrid owns its own [`rowDropSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html) object, a row can only be dropped into the TreeGrid that the dragged TreeGrid points to.

To connect three or more TreeGrids, specify the ID of the destination TreeGrid in the [`targetID`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property of every TreeGrid that should accept rows. The following table shows the configuration used in the sample that follows.

| TreeGrid ID | targetID value | Rows can be dropped into |
|---|---|---|
| `TreeGrid1` | `TreeGrid2` | `TreeGrid2` |
| `TreeGrid2` | `TreeGrid3` | `TreeGrid3` |
| `TreeGrid3` | `TreeGrid1` | `TreeGrid1` |

This creates a cycle, so a row can be moved from `TreeGrid1` to `TreeGrid2`, from `TreeGrid2` to `TreeGrid3`, and from `TreeGrid3` back to `TreeGrid1`.

To let several TreeGrids feed rows into a single destination, point each of them at the same TreeGrid ID. For example, setting the [`targetID`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property of `TreeGrid1` and `TreeGrid2` to `TreeGrid3` allows both of them to drop rows into `TreeGrid3`.

N> * The [`targetID`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property must contain the ID of the destination TreeGrid, and the ID must be unique across the page.
<br/> * The order in which the TreeGrids are rendered does not affect the drag and drop behavior. The destination TreeGrid can be created before or after the source TreeGrid.

## Enable row drag and drop between three TreeGrids

The following example enables the [`allowRowDragAndDrop`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowRowDragAndDrop) property on three TreeGrids and configures a circular drop target for each of them using the [`targetID`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/row/row-drag-multiple/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Dragdrop.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/row/row-drag-multiple/dragdrop.cs %}
{% endhighlight %}
{% endtabs %}

N> * Selection feature must be enabled for row drag and drop.
<br/> * For multiple row selection, the [`type`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSelectionSettings_Type) property must be set to `multiple`.
<br/> * The [`isPrimaryKey`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_IsPrimaryKey) property is necessary to perform the row drag and drop operation.

## Drop positions

When a row is dragged over a destination TreeGrid, the drop indicator shows the position where the row will be inserted.

1. **Above** – The row is inserted as a sibling above the target row.
2. **Below** – The row is inserted as a sibling below the target row.
3. **Child** – The row is inserted as a child of the target row.

These positions apply equally when the destination is another TreeGrid. Dropping a row in the **Child** position of a row in the destination TreeGrid makes it a child of that record, and the parent record of the dropped row is updated accordingly.

## Move multiple rows between TreeGrids

Multiple rows can be moved in a single drag operation. Select the rows in the source TreeGrid by holding the **Ctrl** key, and then drag any of the selected rows into the destination TreeGrid. All the selected rows are transferred together, and the dropped records are available in the [`RowDrop`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDrop) event through the `args.Data` property.

To move more than one row at a time, the [`type`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSelectionSettings_Type) property must be set to `multiple` on the source TreeGrid.

## Handle the RowDrop event

The [`RowDrop`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDrop) event is triggered when a row is dropped on the destination TreeGrid. The event arguments provide the following information.

| Argument | Type | Description |
|---|---|---|
| `Data` | `Object[]` | The dragged record or the array of dragged records when multiple rows are selected. |
| `FromIndex` | `number` | The index of the dragged row in the source TreeGrid. |
| `DropIndex` | `number` | The index where the row is dropped in the destination TreeGrid. |
| `DropPosition` | `string` | The position of the drop relative to the target row. It is `topSegment` for **Above**, `bottomSegment` for **Below**, and `middleSegment` for **Child**. |
| `Target` | `Element` | The target element on which the row is dropped. |
| `Cancel` | `boolean` | Setting it to `true` prevents the default drop behavior. |

The event is triggered on the source TreeGrid, so the source and the destination can be identified from the `Target` element when several TreeGrids are on the page.

To handle the event in ASP.NET Core, bind the JavaScript handler name to the [`RowDrop`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDrop) event of the TreeGrid. The handler runs on the client when a row is dropped.

```cshtml
<ejs-treegrid id="TreeGrid1" allowRowDragAndDrop="true" allowSelection="true" dataSource="ViewBag.datasource"
    height="275" childMapping="Children" treeColumnIndex="1" rowDrop="rowDropHandler">
    <e-treegrid-selectionsettings type="Multiple"></e-treegrid-selectionsettings>
    <e-treegrid-rowdropsettings targetID="TreeGrid2"></e-treegrid-rowdropsettings>
    <e-treegrid-columns>
        <e-treegrid-column field="TaskId" headerText="Task ID" textAlign="Right" width="90"></e-treegrid-column>
        <e-treegrid-column field="TaskName" headerText="Task Name" width="180"></e-treegrid-column>
        <e-treegrid-column field="Duration" headerText="Duration" textAlign="Right" width="80"></e-treegrid-column>
    </e-treegrid-columns>
</ejs-treegrid>

<script>
    function rowDropHandler(args) {
        var targetGrid = args.target.closest('.e-treegrid');
        var destinationID = targetGrid ? targetGrid.id : '';
        console.log('Row dropped into ' + destinationID + ' at position ' + args.dropPosition + '.');
    }
</script>
```

## Supported combinations

### Works with:

- The [`allowRowDragAndDrop`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowRowDragAndDrop) property, which must be enabled on the source and the destination TreeGrid.
- The [`type`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSelectionSettings_Type) property set to `multiple`, which enables moving several rows in one drag operation.
- The [`isPrimaryKey`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_IsPrimaryKey) property, which is required for the drop to be applied.
- The [`RowDrop`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDrop) event, which allows the drop to be cancelled or the drop position to be inspected.

### Known limitations:

- The [`targetID`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property holds a single destination ID, so a row can only be dropped into the TreeGrid that the source TreeGrid points to. A TreeGrid cannot accept rows from several sources and forward them elsewhere in the same operation.
- When the [`targetID`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property is set, the TreeGrid does not render the drag icon column, and the drag is performed using the selected row.
- The row drag and drop feature does not have built-in support for the row template and detail template features of the TreeGrid.

N> You can refer to our [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/TreeGrid/Overview#/fluent2) to know how to present and manipulate data.
