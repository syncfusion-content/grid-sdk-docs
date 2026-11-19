---
layout: post
title: Row drag and drop in JavaScript TreeGrid component | Syncfusion
description: Learn how to use Row Drag and Drop in JavaScript TreeGrid to reorder rows, configure drag-and-drop behavior, and update hierarchical data.
platform: grid-sdk
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row Drag and Drop in JavaScript TreeGrid

The TreeGrid rows can be reordered, dropped to another TreeGrid or custom control by enabling the [`allowRowDragAndDrop`](../../api/treegrid#allowrowdraganddrop) to true.

To use row drag and drop, inject the `RowDD` module in the TreeGrid.

## Drag and drop within Tree Grid

The TreeGrid row drag and drop allows you to drag and drop TreeGrid rows on the same TreeGrid using drag icon. To enable row drag and drop, set the[`allowRowDragAndDrop`](../../api/treegrid#allowrowdraganddrop) to true. It provides the way to drop the row above, below or child to the target row with respective to the target row position.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-single-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-single-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/draganddrop-single-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-single-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-single-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/draganddrop-single-cs1" %}
{% endif %}

> * Selection feature must be enabled for row drag and drop.
> * For multiple row selection, the [`type`](../../api/treegrid/selectionSettings#type) property must be set to `multiple`.
> * The [`isPrimaryKey`](../../api/treegrid/column#isprimarykey) property is necessary to perform row drag and drop operation.

## Drag and drop to another Tree Grid

To drag and drop between two TreeGrid, enable the [`allowRowDragAndDrop`](../../api/treegrid#allowrowdraganddrop) property and specify the target TreeGrid ID in [`targetID`](../../api/treegrid/rowDropSettings#targetid) property of rowDropSettings. The `targetID` property accepts a single target ID as a string, or an array of target IDs to drop rows between multiple TreeGrids. See the next section for details on the multi-TreeGrid configuration.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs1" %}
{% endif %}


## Drag and drop between multiple Tree Grids

The [`targetID`](../../api/treegrid/rowDropSettings#targetid) property of [`rowDropSettings`](../../api/treegrid/rowDropSettings) accepts a single TreeGrid element ID (`string`) or an array of TreeGrid element IDs (`string[]`). Rows dragged from a source TreeGrid can be dropped only into the TreeGrids whose IDs are listed in this property. Enable row drag and drop by setting the [`allowRowDragAndDrop`](../../api/treegrid#allowrowdraganddrop) property to true and assign the target ID (or IDs) to the `targetID` property of `rowDropSettings`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs2" %}
{% endif %}

To allow rows from a TreeGrid to be dropped into more than one destination, assign an array of element IDs to the [`targetID`](../../api/treegrid/rowDropSettings#targetid) property of [`rowDropSettings`](../../api/treegrid/rowDropSettings).

```html
<div id="TreeGrid"></div>
<div id="secondTree"></div>
<div id="thirdTree"></div>
```

The above three TreeGrids render on the same page. Each element hosts a single TreeGrid, and the `id` attribute is the value that the other TreeGrids use in their `targetID` array.

The following example configures three TreeGrids so that rows can move between any of them. Each TreeGrid lists the other two in its `targetID` array.

```js
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

> * The selection feature must be enabled to drag and drop rows between multiple TreeGrids.
> * For multiple row selection, set the [`type`](../../api/treegrid/selectionSettings#type) property of [`selectionSettings`](../../api/treegrid/selectionSettings) to `multiple`.
> * The [`isPrimaryKey`](../../api/treegrid/column#isprimarykey) property is necessary to perform the row drag and drop operation.

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

The following events are triggered while drag and drop the treegrid rows.

[`rowDragStartHelper`](../../api/treegrid#rowdragstarthelper) - Triggers when click the drag icon or treegrid row and this event is used to customize the drag element based on user criteria.<br/>
[`rowDragStart`](../../api/treegrid#rowdragstart) -Triggers when starts to drag the treegrid row. <br/>
[`rowDrag`](../../api/treegrid#rowdrag) - Triggers while dragging the treegrid row. <br/>
[`rowDrop`](../../api/treegrid#rowdrop) - Triggers when a drag element is dropped on the target element. <br/>

### Prevent reordering a row as child to another row

You can prevent the default behavior of dropping rows as children to the target by setting the `cancel` property to `true` in [rowDrop](../../api/treegrid#rowdrop) event argument. You can also change the drop position after canceling using [reorderRows](../../api/treegrid#reorderrows) method.

In the below example drop action is canceled and dropped above to target row.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-single-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-single-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/draganddrop-single-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-single-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-single-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/draganddrop-single-cs2" %}
{% endif %}
