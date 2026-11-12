---
layout: post
title: ASP.NET Core TreeGrid Row Drag and Drop Between Multiple TreeGrids | Syncfusion
description: Learn how to drag and drop rows between three or more ASP.NET Core TreeGrids using the rowDropSettings targetID property, with working samples.
platform: grid-sdk
control: Row Drag And Drop Between Multiple TreeGrids
documentation: ug
---

# Row Drag and Drop Between Multiple TreeGrids in ASP.NET Core TreeGrid

The Row Drag and Drop Between Multiple TreeGrids feature allows users to drag rows from one TreeGrid and drop them into another connected TreeGrid. This feature enables moving records between hierarchical datasets while maintaining the TreeGrid structure.

## Feature overview

To enable row drag and drop between TreeGrids:

- Enable row drag and drop using the [`allowRowDragAndDrop`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowRowDragAndDrop) property.
- Configure the destination TreeGrid using the [`targetID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property of the [`rowDropSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html) object.
- Users can drag selected rows from a source TreeGrid and drop them into the configured destination TreeGrid.
- Rows can be dropped above, below, or as a child of an existing row in the destination TreeGrid.

```cshtml
<e-treegrid-rowdropsettings targetID="TreeGrid2"></e-treegrid-rowdropsettings>
```

## Supported scenarios

### Single target TreeGrid

A source TreeGrid can be configured to drop rows into a single target TreeGrid.

```cshtml
<e-treegrid-rowdropsettings targetID="TreeGrid2"></e-treegrid-rowdropsettings>
```

**Behavior**

- Rows from `TreeGrid1` can be dropped into `TreeGrid2`.
- Rows cannot be dropped into any other TreeGrid unless it is configured as a target.

### Three or more TreeGrids

Multiple TreeGrids can participate in row drag-and-drop operations by configuring the appropriate target relationships. Each TreeGrid declares one destination, and the relationships are combined so that a row can travel through every TreeGrid on the page.

```cshtml
TreeGrid1 -> TreeGrid2
TreeGrid2 -> TreeGrid3
TreeGrid3 -> TreeGrid1
```

**Behavior**

- Rows can be moved between any connected TreeGrid.
- Each TreeGrid can act as both a source and a destination.
- Drag-and-drop operations are allowed only between explicitly configured TreeGrids.

To let several TreeGrids feed rows into a single destination, point each of them at the same TreeGrid ID. For example, setting the [`targetID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property of `TreeGrid1` and `TreeGrid2` to `TreeGrid3` allows both of them to drop rows into `TreeGrid3`.

In the following example, `TreeGrid1` and `TreeGrid2` both target `TreeGrid3`, so rows can be dragged into `TreeGrid3` from either of them, and `TreeGrid3` sends its rows back to `TreeGrid1`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/row-drag-multiple-shared/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Dragdrop.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/row-drag-multiple-shared/dragdrop.cs %}
{% endhighlight %}
{% endtabs %}

N> * The [`targetID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property accepts a single TreeGrid ID. To enable a TreeGrid as the destination of more than one source, configure the same destination ID on each source TreeGrid.
<br/> * The order in which the TreeGrids are rendered does not affect the drag and drop behavior. The destination TreeGrid can be created before or after the source TreeGrid.
<br/> * The destination TreeGrid does not need its own [`targetID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) configuration to accept rows from another TreeGrid.

## Enable row drag and drop between three TreeGrids

The following example enables the [`allowRowDragAndDrop`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowRowDragAndDrop) property on three TreeGrids and configures a circular drop target for each of them using the [`targetID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/row-drag-multiple/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Dragdrop.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/row-drag-multiple/dragdrop.cs %}
{% endhighlight %}
{% endtabs %}

N> * The [`isPrimaryKey`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_IsPrimaryKey) property is necessary to perform row drag and drop operation.
<br/> * The selection feature must be enabled for row drag and drop. For multiple row selection, the [`type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSelectionSettings_Type) property must be set to `multiple`.

## Drop positions

When a row is dragged over a destination TreeGrid, the drop indicator shows the position where the row will be inserted.

1. **Above** – The row is inserted as a sibling above the target row.
2. **Below** – The row is inserted as a sibling below the target row.
3. **Child** – The row is inserted as a child of the target row.

These positions apply equally when the destination is another TreeGrid. Dropping a row in the **Child** position of a row in the destination TreeGrid makes it a child of that record, and the parent record of the dropped row is updated accordingly.

## Move multiple rows between TreeGrids

Multiple rows can be moved in a single drag operation. Select the rows in the source TreeGrid by holding the **Ctrl** key, and then drag any of the selected rows into the destination TreeGrid. All the selected rows are transferred together, and the dropped records are available in the [`RowDrop`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDrop) event through the `args.Data` property.

To move more than one row at a time, the [`type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSelectionSettings_Type) property must be set to `multiple` on the source TreeGrid.

## Handle the RowDrop event

The [`RowDrop`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDrop) event is triggered when a row is dropped on the destination TreeGrid. The event arguments provide the following information.

| Argument | Type | Description |
|---|---|---|
| `Data` | `Object[]` | The dragged record or the array of dragged records when multiple rows are selected. |
| `FromIndex` | `number` | The index of the dragged row in the source TreeGrid. |
| `DropIndex` | `number` | The index where the row is dropped in the destination TreeGrid. |
| `DropPosition` | `string` | The position of the drop relative to the target row. It is `topSegment` for **Above**, `bottomSegment` for **Below**, and `middleSegment` for **Child**. |
| `Target` | `Element` | The target element on which the row is dropped. |
| `Cancel` | `boolean` | Setting it to `true` prevents the default drop behavior. |

The event is triggered on the source TreeGrid, so the source and the destination can be identified from the `Target` element when several TreeGrids are on the page.

To handle the event in ASP.NET Core, bind the JavaScript handler name to the [`RowDrop`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDrop) event of the TreeGrid. The handler runs on the client when a row is dropped.

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
```

```javascript
function rowDropHandler(args) {
    var targetGrid = args.target.closest('.e-treegrid');
    var destinationID = targetGrid ? targetGrid.id : '';
    console.log('Row dropped into ' + destinationID + ' at position ' + args.dropPosition + '.');
}
```

## Supported combinations

### Works with

- Row selection, including the `multiple` selection type for transferring several rows at once.
- The **Above**, **Below**, and **Child** drop positions.
- Parent and child records, which are transferred together with their hierarchy intact.
- Remote data binding, where the record movement is handled on the server through the [`RowDrop`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDrop) event.

### Does not work with

- An array of target IDs in the [`targetID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property. The property accepts a single TreeGrid ID. To share one destination between several sources, configure the same destination ID on each source TreeGrid.
- Row template and detail template features of the TreeGrid.

### Known limitations

- A drop is accepted only by the TreeGrid named in the [`targetID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property of the source TreeGrid. Dropping into any other TreeGrid on the page has no effect.
- When the [`targetID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property is set, the drag helper icon is not rendered in the row. The row itself is used to start the drag operation.

### Configuration requirements

- Set [`allowRowDragAndDrop`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowRowDragAndDrop) to **true** on every TreeGrid that takes part in the operation.
- Set [`isPrimaryKey`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_IsPrimaryKey) on a column of every TreeGrid that takes part in the operation.
- Enable selection on the source TreeGrid, and set the [`type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSelectionSettings_Type) property to `multiple` to move more than one row at a time.

## See also

[Row drag and drop in the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core TreeGrid](https://ej2.syncfusion.com/aspnetcore/treegrid/row-drag-and-drop)
[Selection in the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core TreeGrid](https://ej2.syncfusion.com/aspnetcore/treegrid/selection)
