---
layout: post
title: Vue TreeGrid Row Drag and Drop | Syncfusion
description: Learn how to drag and drop rows in Vue TreeGrid within the same grid, between two TreeGrids, or between multiple TreeGrids for advanced data movement.
control: Row drag and drop 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row Drag and Drop in Vue TreeGrid

The TreeGrid rows can be reordered, dropped to another TreeGrid or custom control by enabling the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#allowrowdraganddrop) to true.

To use row drag and drop, inject the `RowDD` module in the TreeGrid.

## Drag and drop within Tree Grid

The TreeGrid row drag and drop allows you to drag and drop TreeGrid rows on the same TreeGrid using drag icon. To enable row drag and drop, set the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#allowrowdraganddrop) to true. It provides the way to drop the row above, below or child to the target row with respective to the target row position.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/row/row-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/row/row-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/row/row-cs1" %}

> * Selection feature must be enabled for row drag and drop.
> * For multiple row selection, the [`type`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/selectionSettings#type) property must be set to `multiple`.
> * The [`isPrimaryKey`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#isprimarykey) property is necessary to perform row drag and drop operation.

## Drag and drop to another Tree Grid

To drag and drop between two TreeGrid, enable the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#allowrowdraganddrop) property and specify the target TreeGrid ID in [`targetID`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/rowDropSettings#targetid) property of rowDropSettings. The `targetID` property accepts a single target ID as a string, or an array of target IDs to drop rows between multiple TreeGrids. See the next section for details on the multi-TreeGrid configuration.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/row/row-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/row/row-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/row/row-cs2" %}


## Drag and drop between multiple Tree Grids

To drag and drop rows between multiple TreeGrids, enable the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#allowrowdraganddrop) property and specify the target TreeGrid IDs in the [`targetID`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/rowDropSettings#targetid) property of `rowDropSettings`. The `targetID` property accepts an array of TreeGrid IDs to allow row drag and drop between multiple TreeGrids.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/row/row-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/row/row-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/row/row-cs6" %}


## Drag and drop events

The following events are triggered while drag and drop the treegrid rows.

[`rowDragStartHelper`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#rowdragstarthelper) - Triggers when click the drag icon or treegrid row and this event is used to customize the drag element based on user criteria.<br/>
[`rowDragStart`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#rowdragstart) -Triggers when starts to drag the treegrid row. <br/>
[`rowDrag`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#rowdrag) - Triggers while dragging the treegrid row. <br/>
[`rowDrop`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#rowdrop) - Triggers when a drag element is dropped on the target element. <br/>

## Prevent reordering a row as child to another row

You can prevent the default behavior of dropping rows as children to the target by setting the `cancel` property to `true` in [rowDrop](https://ej2.syncfusion.com/vue/documentation/api/treegrid#rowdrop) event argument. You can also change the drop position after canceling using [reorderRows](https://ej2.syncfusion.com/vue/documentation/api/treegrid#reorderrows) method.

In the below example drop action is canceled and dropped above to target row.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/row/row-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/row/row-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/row/row-cs3" %}
