---
layout: post
title: JavaScript TreeGrid Column Reorder | Syncfusion
description: Learn how to reorder columns in JavaScript TreeGrid using drag-and-drop functionality and customize column arrangement.
platform: grid-sdk
control: Column reorder
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Column Reorder in JavaScript TreeGrid

Reordering can be done by drag and drop of a particular column header from one index to another index within the treegrid. To enable reordering, set the [`allowReordering`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#allowreordering) to true.

To use reordering, inject the [`Reorder`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#reordermodule) module in the treegrid.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/columns-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/columns-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/columns-cs6" %}

> You can disable reordering a particular column by setting the [`columns.allowReordering`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#reordermodule) to false.

## Reorder multiple columns

Multiple columns can be reordered at a time by using the [`reorderColumns`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#reordercolumns) method.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/reorder-columns-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/reorder-columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/reorder-columns-cs1" %}