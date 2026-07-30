---
layout: post
title: Row drag and drop in JavaScript Treegrid control | Syncfusion
description: Learn here all about Row drag and drop in Syncfusion JavaScript Treegrid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Row drag and drop 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row drag and drop in JavaScript Treegrid control

The TreeGrid rows can be reordered, dropped to another TreeGrid or custom control by enabling the [`allowRowDragAndDrop`](../../api/treegrid/#allowrowdraganddrop) to true.

To use row drag and drop, inject the `RowDD` module in the TreeGrid.

## Drag and drop within Tree Grid

The TreeGrid row drag and drop allows you to drag and drop TreeGrid rows on the same TreeGrid using drag icon. To enable row drag and drop, set the[`allowRowDragAndDrop`](../../api/treegrid/#allowrowdraganddrop) to true. It provides the way to drop the row above, below or child to the target row with respective to the target row position.

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
> * For multiple row selection, the [`type`](../../api/treegrid/selectionSettings/#type) property must be set to `multiple`.
> * The [`isPrimaryKey`](../../api/treegrid/column/#isprimarykey) property is necessary to perform row drag and drop operation.

## Drag and drop to another Tree Grid

To drag and drop between two TreeGrid, enable the [`allowRowDragAndDrop`](../../api/treegrid/#allowrowdraganddrop) property and specify the target TreeGrid ID in [`targetID`](../../api/treegrid/rowDropSettings/#targetid) property of rowDropSettings.

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

## Drag and drop events

The following events are triggered while drag and drop the treegrid rows.

[`rowDragStartHelper`](../../api/treegrid/#rowdragstarthelper) - Triggers when click the drag icon or treegrid row and this event is used to customize the drag element based on user criteria.<br/>
[`rowDragStart`](../../api/treegrid/#rowdragstart) -Triggers when starts to drag the treegrid row. <br/>
[`rowDrag`](../../api/treegrid/#rowdrag) - Triggers while dragging the treegrid row. <br/>
[`rowDrop`](../../api/treegrid/#rowdrop) - Triggers when a drag element is dropped on the target element. <br/>

### Prevent reordering a row as child to another row

You can prevent the default behavior of dropping rows as children to the target by setting the `cancel` property to `true` in [rowDrop](../../api/treegrid/#rowdrop) event argument. You can also change the drop position after cancelling using [reorderRows](../../api/treegrid/#reorderrows) method.

In the below example drop action is cancelled and dropped above to target row.

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
