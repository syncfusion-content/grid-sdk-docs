---
layout: post
title: JavaScript TreeGrid Row Cell Customization | Syncfusion
description: Learn how to customize rows and cells in the JavaScript TreeGrid using queryCellInfo and rowDataBound events.
platform: grid-sdk
control: Row cell customization
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row Cell Customization in JavaScript TreeGrid

In Tree Grid we can customize the row and cell using [`queryCellInfo`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#querycellinfo) and [`rowDataBound`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#rowdatabound) events of Tree Grid.

In the below demo, we customize and show the command buttons only for the parent rows using [`queryCellInfo`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#querycellinfo) and [`rowDataBound`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#rowdatabound) events of Tree Grid.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/custom-row-cell-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/custom-row-cell-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/custom-row-cell-cs1" %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.