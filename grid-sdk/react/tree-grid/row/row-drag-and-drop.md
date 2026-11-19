---
layout: post
title: React TreeGrid Row Drag and Drop | Syncfusion
description: Learn how to enable row drag and drop in the React TreeGrid to reorder rows, move hierarchical records, and customize drag-and-drop behavior.
control: Row drag and drop 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row drag and drop in React TreeGrid

TreeGrid rows can be reordered or dropped into another TreeGrid or custom control by setting [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid#allowrowdraganddrop) to true.

To use row drag and drop, inject the **RowDD** module into the TreeGrid.

## Drag and drop within TreeGrid

Row drag and drop supports reordering within the same TreeGrid using the drag icon. Enable it by setting [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid#allowrowdraganddrop) to true. Rows can be dropped above, below, or as a child of the target row based on the drop position.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/row-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/row-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/row-cs1" %}

> * Selection must be enabled for row drag and drop.
> * Multiple rows can be selected by clicking and dragging inside the TreeGrid.
> * For multiple row selection, set the [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings#type) property to `multiple`.
> * The [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#isprimarykey) property is required to perform row drag-and-drop.

## Drag and drop to another TreeGrid

To drag and drop between two TreeGrids, enable [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid#allowrowdraganddrop) and set the target TreeGrid ID in the [targetID](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings#targetid) property of `rowDropSettings`. The `targetID` property accepts a single target ID as a string, or an array of target IDs to drop rows between multiple TreeGrids. See the next section for details on the multi-TreeGrid configuration.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/row-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/row-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/row-cs2" %}


## Drag and drop between multiple Tree Grids

The [targetID](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings#targetid) property of [rowDropSettings](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings) accepts a single TreeGrid element ID (`string`) or an array of TreeGrid element IDs (`string[]`). Rows dragged from a source TreeGrid can be dropped only into the TreeGrids whose IDs are listed in this property. Enable row drag and drop by setting the [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid#allowrowdraganddrop) property to true and assign the target ID (or IDs) to the `targetID` property of `rowDropSettings`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/row-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/row-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/row-cs4" %}

To allow rows from a TreeGrid to be dropped into more than one destination, assign an array of element IDs to the [targetID](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings#targetid) property of [rowDropSettings](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings).

```html
<div id="TreeGrid"></div>
<div id="secondTree"></div>
<div id="thirdTree"></div>
```

The above three TreeGrids render on the same page. Each element hosts a single TreeGrid, and the `id` attribute is the value that the other TreeGrids use in their `targetID` array.

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

- `TreeGrid` can drop rows into `secondTree` and `thirdTree`.
- `secondTree` can drop rows into `TreeGrid` and `thirdTree`.
- `thirdTree` can drop rows into `TreeGrid` and `secondTree`.
- Every TreeGrid can act as both a source and a destination.

> * Selection must be enabled to drag and drop rows between multiple TreeGrids.
> * For multiple row selection, set the [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings#type) property of [selectionSettings](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings) to `multiple`.
> * The [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#isprimarykey) property is required to perform row drag and drop between TreeGrids.

The Row Drag and Drop Between Multiple TreeGrids feature supports the same row types and drop positions as the single TreeGrid drag and drop feature.

- **Single row** - Drag one row from a source TreeGrid and drop it into any TreeGrid listed in its `targetID` array.
- **Multiple rows** - Select multiple rows and drag any selected row into a destination. All the selected rows are dropped together.
- **Parent row** - Drag a parent row on its own into a destination. The parent record is dropped without its children.
- **Parent with child records** - Drag a parent row that has child records. The parent record and its child records are dropped together as a hierarchical group into the destination.
- **Child row** - Drag a single child row into a destination. The child record is dropped without its siblings or parent.

When a row is dragged over a destination TreeGrid, the drop indicator shows where the row will be inserted relative to the target row.

1. **Above** - The row is inserted as a sibling above the target row.
2. **Below** - The row is inserted as a sibling below the target row.
3. **Child** - The row is inserted as a child of the target row.

## Drag and drop events

The following events are triggered during row drag and drop:

* [rowDragStartHelper](https://ej2.syncfusion.com/react/documentation/api/treegrid#rowdragstarthelper) - Triggers when the drag icon or row is clicked; customize the drag element based on criteria.
* [rowDragStart](https://ej2.syncfusion.com/react/documentation/api/treegrid#rowdragstart) - Triggers when a row drag starts.
* [rowDrag](https://ej2.syncfusion.com/react/documentation/api/treegrid#rowdrag) - Triggers while a row is being dragged.
* [rowDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid#rowdrop) - Triggers when the dragged element is dropped on the target element.

## Prevent reordering a row as child to another row

Prevent dropping rows as children by setting `cancel` to `true` in the [rowDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid#rowdrop) event arguments. After canceling, adjust the drop position programmatically using the [reorderRows](https://ej2.syncfusion.com/react/documentation/api/treegrid#reorderrows) method.

In the following example, the drop action is canceled and the row is dropped above the target row.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/row-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/row-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/row-cs3" %}