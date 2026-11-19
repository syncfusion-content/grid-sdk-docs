---
layout: post
title: JavaScript TreeGrid Custom Aggregate | Syncfusion
description: Learn about implementing custom aggregates in the JavaScript TreeGrid, including configuration and usage of custom aggregation functions.
platform: grid-sdk
control: Custom aggregate
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Custom Aggregate in JavaScript TreeGrid

To calculate the aggregate value with your own aggregate functions, use the custom aggregate option. To use custom aggregation, specify the [`type`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/aggregateColumnModel#type) as `Custom`, and provide the custom aggregate function in the [`customAggregate`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/aggregateColumnModel#customaggregate) property.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/aggregates-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/aggregates-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/aggregates-cs2" %}

> To access the custom aggregate value inside the template, use the key as `Custom`.