---
layout: post
title: ASP.NET Core TreeGrid Row Drag and Drop | Syncfusion
description: Learn how to use Row Drag and Drop in ASP.NET Core TreeGrid to reorder rows, configure drag-and-drop behavior, and update hierarchical data.
platform: grid-sdk
control: Row Drag And Drop
documentation: ug
---

# Row Drag and Drop in ASP.NET Core TreeGrid

The TreeGrid rows can be reordered, dropped to another TreeGrid or custom control by enabling the [`allowRowDragAndDrop`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowRowDragAndDrop) to true.

## Drag and drop within Tree Grid

The TreeGrid row drag and drop allows you to drag and drop TreeGrid rows on the same TreeGrid using drag icon. To enable row drag and drop, set the [`allowRowDragAndDrop`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowRowDragAndDrop) to true. It provides the way to drop the row above, below or child to the target row with respective to the target row position.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/row-drag-single/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Dragdrop.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/row-drag-single/dragdrop.cs %}
{% endhighlight %}
{% endtabs %}

N> * Selection feature must be enabled for row drag and drop.
<br/> * For multiple row selection, the [`type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSelectionSettings_Type) property must be set to `multiple`.
<br/> * The [`isPrimaryKey`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_IsPrimaryKey) property is necessary to perform row drag and drop operation.

## Drag and drop to another Tree Grid

To drag and drop between two TreeGrid, enable the [`allowRowDragAndDrop`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowRowDragAndDrop) property and specify the target TreeGrid ID in [`targetID`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property of rowDropSettings. The `targetID` property accepts a single target ID as a string, or an array of target IDs to drop rows between multiple TreeGrids. See the next section for details on the multi-TreeGrid configuration.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/row-drag-drop/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Dragdrop.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/row-drag-drop/dragdrop.cs %}
{% endhighlight %}
{% endtabs %}


## Drag and drop between multiple Tree Grids

The [TargetID](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property of [RowDropSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html) accepts a single TreeGrid element ID (`string`) or an array of TreeGrid element IDs (`string[]`). Rows dragged from a source TreeGrid can be dropped only into the TreeGrids whose IDs are listed in this property. Enable row drag and drop by setting the [AllowRowDragAndDrop](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowRowDragAndDrop) property to true and assign the target ID (or IDs) to the `TargetID` property of `RowDropSettings`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/row-drag-multiple/tagHelper %}
{% endhighlight %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/row-drag-multiple/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Dragdrop.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/row-drag-multiple/dragdrop.cs %}
{% endhighlight %}
{% endtabs %}

To allow rows from a TreeGrid to be dropped into more than one destination, assign an array of element IDs to the [TargetID](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property of [RowDropSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html).

```html
<div>
    <ejs-treegrid id="TreeGrid"></ejs-treegrid>
    <ejs-treegrid id="secondTree"></ejs-treegrid>
    <ejs-treegrid id="thirdTree"></ejs-treegrid>
</div>
```

The above three TreeGrids render on the same page. Each element hosts a single TreeGrid, and the `id` attribute is the value that the other TreeGrids use in their `TargetID` array.

The following example configures three TreeGrids so that rows can move between any of them. Each TreeGrid lists the other two in its `TargetID` array.

```csharp
TreeGrid:
RowDropSettings = new TreeGridRowDropSettings { TargetID = new[] { "secondTree", "thirdTree" } }

secondTree:
RowDropSettings = new TreeGridRowDropSettings { TargetID = new[] { "TreeGrid", "thirdTree" } }

thirdTree:
RowDropSettings = new TreeGridRowDropSettings { TargetID = new[] { "TreeGrid", "secondTree" } }
```

The behavior of this configuration is as follows:

- `TreeGrid` can drop rows into `secondTree` and `thirdTree`.
- `secondTree` can drop rows into `TreeGrid` and `thirdTree`.
- `thirdTree` can drop rows into `TreeGrid` and `secondTree`.
- Every TreeGrid can act as both a source and a destination.

N> * The selection feature must be enabled to drag and drop rows between multiple TreeGrids.
<br/> * For multiple row selection, the [Type](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSelectionSettings_Type) property of [SelectionSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html) must be set to `Multiple`.
<br/> * The [IsPrimaryKey](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_IsPrimaryKey) property is necessary to perform the row drag and drop operation between TreeGrids.

The Row Drag and Drop Between Multiple TreeGrids feature supports the same row types and drop positions as the single TreeGrid drag and drop feature.

- **Single row** - Drag one row from a source TreeGrid and drop it into any TreeGrid listed in its `TargetID` array.
- **Multiple rows** - Select multiple rows and drag any selected row into a destination. All the selected rows are dropped together.
- **Parent row** - Drag a parent row on its own into a destination. The parent record is dropped without its children.
- **Parent with child records** - Drag a parent row that has child records. The parent record and its child records are dropped together as a hierarchical group into the destination.
- **Child row** - Drag a single child row into a destination. The child record is dropped without its siblings or parent.

When a row is dragged over a destination TreeGrid, the drop indicator shows where the row will be inserted relative to the target row.

1. **Above** - The row is inserted as a sibling above the target row.
2. **Below** - The row is inserted as a sibling below the target row.
3. **Child** - The row is inserted as a child of the target row.

## Drag and drop events

The following events are triggered while drag and drop the treegrid rows.

[`RowDragStartHelper`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDragStartHelper) - Triggers when click the drag icon or treegrid row and this event is used to customize the drag element based on user criteria.<br/>
[`RowDragStart`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDragStart) -Triggers when starts to drag the treegrid row. <br/>
[`RowDrag`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDrag) - Triggers while dragging the treegrid row. <br/>
[`RowDrop`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDrop) - Triggers when a drag element is dropped on the target element. <br/>

## Prevent reordering a row as child to another row

You can prevent the default behavior of dropping rows as children to the target by setting the `cancel` property to `true` in [rowDrop](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDrop) event argument. You can also change the drop position after canceling using `reorderRows` method.

In the below example drop action is canceled and dropped above to target row.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/prevent-reorder/taghelper %}
{% endhighlight %}
{% highlight c# tabtitle="reorder.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/prevent-reorder/reorder.cs %}
{% endhighlight %}
{% endtabs %}



N> You can refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/treegrid/overview#/fluent2) to knows how to present and manipulate data.
