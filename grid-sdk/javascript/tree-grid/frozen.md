---
layout: post
title: Frozen in JavaScript Treegrid control | Syncfusion
description: Learn here all about Frozen in Syncfusion JavaScript Treegrid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Frozen 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Frozen in JavaScript Treegrid control

## Frozen rows and columns

Frozen rows and columns provides an option to make rows and columns always visible in the top and left side of the tree grid while scrolling.

To use frozen rows and columns support, inject the `Freeze` module in the tree grid.

In this demo, the [`frozenColumns`](../api/treegrid/#frozencolumns) is set as '2' and the [`frozenRows`](../api/treegrid/#frozenrows)
is set as '3'. Hence, the left two columns and top three rows are frozen.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/frozencolumns-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/frozencolumns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/frozencolumns-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/frozencolumns-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/frozencolumns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/frozencolumns-cs1" %}
{% endif %}

### Freeze particular columns

You can use [`isFrozen`](../api/treegrid/column/#isfrozen) property to freeze selected columns in tree grid.

In this demo, the columns with field name `taskName` and `startDate` is frozen using
the `isFrozen` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/frozencolumns-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/frozencolumns-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/frozencolumns-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/frozencolumns-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/frozencolumns-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/frozencolumns-cs2" %}
{% endif %}

### Freeze direction

You can freeze the tree grid columns on the left or right side by using the [`column.freeze`](../api/treegrid/column/#freeze) property and the remaining columns will be movable. The tree grid will automatically move the columns to the left or right position based on the [`column.freeze`](../api/treegrid/column/#freeze) value.

Types of the [`column.freeze`](../api/treegrid/column/#freeze) directions:

* **`Left`**: Allows you to freeze the columns at the left.
* **`Right`**: Allows you to freeze the columns at the right.

In this demo, the **Task Name** column is frozen at the left and the **Priority** column is frozen at the right side of the content table.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/freezedirections-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/freezedirections-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/freezedirections-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/freezedirections-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/freezedirections-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/freezedirections-cs1" %}
{% endif %}

> * Freeze Direction is not compatible with the [`isFrozen`](../api/treegrid/column/#isfrozen) and [`frozenColumns`](../api/treegrid/#frozencolumns) properties.

### Limitations of frozen tree grid

The following features are not supported in frozen rows and columns:

* Row Template
* Detail Template
* Cell Editing

Freeze Direction feature has the below limitations, along with the above mentioned limitations.

* Infinite scroll cache mode
* Freeze direction in the stacked header is not compatible with column reordering.

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript tree grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.
