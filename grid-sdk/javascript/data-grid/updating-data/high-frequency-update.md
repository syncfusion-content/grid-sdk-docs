---
layout: post
title: JavaScript Grid High Frequency Update | Syncfusion
description: Demonstrate synchronous and asynchronous cell updates in JavaScript Data Grid with performance measurement for high-frequency scenarios.
control: High Frequency Update
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# High Frequency Cell Updates in JavaScript Data Grid

The JavaScript Data Grid provides methods to update cell values programmatically, both synchronously and asynchronously. These methods are particularly useful for simulating high-frequency updates, where performance differences between synchronous and asynchronous operations can be evaluated.

* [setCellValue](https://ej2.syncfusion.com/javascript/documentation/api/grid#setcellvalue)(key, field, value): Which applies the change synchronously to the cell value.
* [setCellValueAsync](https://ej2.syncfusion.com/javascript/documentation/api/grid#setcellvalueasync)(rowKey, field, value, delay?): Which returns a `Promise` that resolves after the update is complete, including any data request. Use this method when the update involves a server call, or a following action should wait until it finishes.

Clicking "Normal update" updates the "Revenue" value synchronously using `setCellValue`, while clicking "Async update" updates the "Revenue" value asynchronously using `setCellValueAsync`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/high-frequency-update-cs1/index.js %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/grid-sdk/javascript/grid/high-frequency-update-cs1/es5-datasource.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/high-frequency-update-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/high-frequency-update-cs1" %}

> The primary key column must be specified using the [isPrimaryKey](https://ej2.syncfusion.com/javascript/documentation/api/grid/column#isprimarykey) property so the Data Grid can locate the cell being updated.
