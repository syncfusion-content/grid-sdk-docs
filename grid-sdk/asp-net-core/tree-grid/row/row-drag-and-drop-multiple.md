---
layout: post
title: Row drag and drop between multiple TreeGrids in ASP.NET Core TreeGrid | Syncfusion
description: Learn how to drag and drop rows between three or more ASP.NET Core TreeGrids using the RowDropSettings TargetID array configuration.
platform: grid-sdk
control: Row drag and drop between multiple TreeGrids
documentation: ug
---

# Row Drag and Drop Between Multiple TreeGrids in ASP.NET Core TreeGrid

The Row Drag and Drop Between Multiple TreeGrids feature allows users to drag rows from one TreeGrid and drop them into one or more configured destination TreeGrids on the same page. Each TreeGrid can act as both a source and a destination, so rows can be moved between any connected TreeGrids.

The [TargetID](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property of [RowDropSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html) accepts an array of TreeGrid element IDs. Rows dragged from a source TreeGrid can be dropped into any TreeGrid whose ID is listed in the array.

## Rendering multiple TreeGrids

Render each TreeGrid inside its own container element on the page. The element `id` is what every other TreeGrid references through the `TargetID` array.

```html
<div>
    <ejs-treegrid id="TreeGrid"></ejs-treegrid>
    <ejs-treegrid id="destTree"></ejs-treegrid>
    <ejs-treegrid id="thirdTree"></ejs-treegrid>
</div>
```

The three TreeGrids above render on the same page. Each `<ejs-treegrid>` element hosts a single TreeGrid, and the `id` attribute is the value that the other TreeGrids use in their `TargetID` array.

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

## Configure multiple TreeGrid destinations

Enable row drag and drop by setting the [AllowRowDragAndDrop](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowRowDragAndDrop) property to **true**. To allow rows from a TreeGrid to be dropped into more than one destination, assign an array of element IDs to the [TargetID](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridRowDropSettings_TargetID) property of [RowDropSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridRowDropSettings.html).

```csharp
new TreeGridRowDropSettings { TargetID = new[] { "destTree", "thirdTree" } }
```

In this configuration, rows from the source TreeGrid can be dropped into both `destTree` and `thirdTree`.

### Configure three connected TreeGrids

The following example configures three TreeGrids so that rows can move between any of them. Each TreeGrid lists the other two in its `TargetID` array.

```csharp
TreeGrid:
RowDropSettings = new TreeGridRowDropSettings { TargetID = new[] { "destTree", "thirdTree" } }

destTree:
RowDropSettings = new TreeGridRowDropSettings { TargetID = new[] { "TreeGrid", "thirdTree" } }

thirdTree:
RowDropSettings = new TreeGridRowDropSettings { TargetID = new[] { "TreeGrid", "destTree" } }
```

The behavior of this configuration is as follows:

- TreeGrid can drop rows into `destTree` and `thirdTree`.
- `destTree` can drop rows into `TreeGrid` and `thirdTree`.
- `thirdTree` can drop rows into `TreeGrid` and `destTree`.
- Every TreeGrid can act as both a source and a destination.

N> * The selection feature must be enabled to drag and drop rows between multiple TreeGrids.
<br/> * For multiple row selection, the [Type](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSelectionSettings_Type) property of [SelectionSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html) must be set to `Multiple`.
<br/> * The [IsPrimaryKey](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_IsPrimaryKey) property is necessary to perform the row drag and drop operation between TreeGrids.

## Drag and drop behavior

The Row Drag and Drop Between Multiple TreeGrids feature supports the same drop behaviors as the single TreeGrid drag and drop feature.

### Dragged row types

- **Single row** - Drag one row from a source TreeGrid and drop it into any destination listed in the `TargetID` array.
- **Multiple rows** - Select multiple rows in the source TreeGrid and drag any selected row into a destination. All the selected rows are dropped together.
- **Parent row** - Drag a parent row on its own into a destination. The parent record is dropped without its children.
- **Parent with child records** - Drag a parent row that has child records. The parent record and its child records are dropped together as a hierarchical group into the destination.
- **Child row** - Drag a single child row into a destination. The child record is dropped without its siblings or parent.

### Drop positions

When a row is dragged over a destination TreeGrid, the drop indicator shows where the row will be inserted relative to the target row. The same three positions are available when the destination is another TreeGrid.

1. **Above** - The row is inserted as a sibling above the target row.
2. **Below** - The row is inserted as a sibling below the target row.
3. **Child** - The row is inserted as a child of the target row.
