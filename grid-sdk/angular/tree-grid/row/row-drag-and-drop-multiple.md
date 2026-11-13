---
layout: post
title: Angular TreeGrid Row Drag and Drop Between TreeGrids | Syncfusion
description: Learn how to drag and drop rows between three or more Angular TreeGrids using the rowDropSettings targetID array configuration.
platform: grid-sdk
control: Row drag and drop between multiple TreeGrids
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row Drag and Drop Between Multiple TreeGrids in Angular TreeGrid

The Row Drag and Drop Between Multiple TreeGrids feature allows users to drag rows from one TreeGrid and drop them into one or more configured destination TreeGrids on the same page. Each TreeGrid can act as both a source and a destination, so rows can be moved between any connected TreeGrids.

The [targetID](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings#targetid) property of [rowDropSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings) accepts an array of TreeGrid element IDs. Rows dragged from a source TreeGrid can be dropped into any TreeGrid whose ID is listed in the array.

To use the row drag and drop feature in the TreeGrid component, inject the **RowDDService** in the provider section of the **AppModule**.

## Rendering multiple TreeGrids

Render each TreeGrid inside its own container element on the page. The element `id` is what every other TreeGrid references through the `targetID` array.

```html
<div id="TreeGrid"></div>
<div id="secondTree"></div>
<div id="thirdTree"></div>
```

The three TreeGrids above render side by side on the page. Each `<div>` element hosts a single TreeGrid, and the `id` attribute is the value that the other TreeGrids use in their `targetID` array.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/treegrid/row-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/treegrid/row-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/tree-grid/row-cs11" %}

## Configure multiple TreeGrid destinations

Enable row drag and drop by setting the [allowRowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/treegrid#allowrowdraganddrop) property to **true**. To allow rows from a TreeGrid to be dropped into more than one destination, assign an array of element IDs to the [targetID](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings#targetid) property of [rowDropSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings).

```ts
rowDropSettings: {
    targetID: ['secondTree', 'thirdTree']
}
```

In this configuration, rows from the source TreeGrid can be dropped into both `secondTree` and `thirdTree`.

### Configure three connected TreeGrids

The following example configures three TreeGrids so that rows can move between any of them. Each TreeGrid lists the other two in its `targetID` array.

```ts
TreeGrid:
rowDropSettings: {
    targetID: ['secondTree', 'thirdTree']
}

secondTree:
rowDropSettings: {
    targetID: ['TreeGrid', 'thirdTree']
}

thirdTree:
rowDropSettings: {
    targetID: ['TreeGrid', 'secondTree']
}
```

The behavior of this configuration is as follows:

- TreeGrid can drop rows into `secondTree` and `thirdTree`.
- `secondTree` can drop rows into `TreeGrid` and `thirdTree`.
- `thirdTree` can drop rows into `TreeGrid` and `secondTree`.
- Every TreeGrid can act as both a source and a destination.

> * The selection feature must be enabled to drag and drop rows between multiple TreeGrids.
> * For multiple row selection, set the [type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings#type) property of [selectionSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings) to **Multiple**.
> * The [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#isprimarykey) property is necessary to perform the row drag and drop operation between TreeGrids.

## Drag and drop behavior

The Row Drag and Drop Between Multiple TreeGrids feature supports the same drop behaviors as the single TreeGrid drag and drop feature.

### Dragged row types

- **Single row** - Drag one row from a source TreeGrid and drop it into any destination listed in the `targetID` array.
- **Multiple rows** - Select multiple rows in the source TreeGrid and drag any selected row into a destination. All the selected rows are dropped together.
- **Parent row** - Drag a parent row on its own into a destination. The parent record is dropped without its children.
- **Parent with child records** - Drag a parent row that has child records. The parent record and its child records are dropped together as a hierarchical group into the destination.
- **Child row** - Drag a single child row into a destination. The child record is dropped without its siblings or parent.

### Drop positions

When a row is dragged over a destination TreeGrid, the drop indicator shows where the row will be inserted relative to the target row. The same three positions are available when the destination is another TreeGrid.

1. **Above** - The row is inserted as a sibling above the target row.
2. **Below** - The row is inserted as a sibling below the target row.
3. **Child** - The row is inserted as a child of the target row.
