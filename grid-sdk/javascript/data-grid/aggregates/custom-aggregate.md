---
layout: post
title: Custom aggregate in JavaScript Grid control | Syncfusion
description: Learn here all about Custom aggregate in Syncfusion JavaScript Grid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Custom aggregate 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Custom aggregate in JavaScript Grid control

The custom aggregate feature in JavaScript Grid control allows you to calculate aggregate values using your own aggregate function. This feature can be useful in scenarios where the built-in aggregate functions do not meet your specific requirements. To use the custom aggregate option, follow the steps below:

* Set the [type](../../api/grid/aggregateColumn#type) property to **Custom** in the [AggregateColumnn](../../api/grid/aggregateColumn)

* Provide your custom aggregate function in the [customAggregate](../../api/grid/aggregateColumn#customaggregate) property.

The custom aggregate function will be invoked differently for total and group aggregations:

**Total Aggregation:** The custom aggregate function will be called with the whole dataset and the current aggregate column object as arguments.

**Group Aggregation:** The custom aggregate function will be called with the current group details and the aggregate column object as arguments.

Here's an example that demonstrates how to use the custom aggregate feature in the JavaScript Grid control:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/grid/aggregates-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/aggregates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/aggregates-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/aggregates-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/aggregates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/aggregates-cs1" %}
{% endif %}

> To access the custom aggregate value inside template, use the key as **Custom**

## Show the count of distinct values in aggregate row

You can calculate the count of distinct values in an aggregate row by using custom aggregate functions. By specifying the [type](../../api/grid/aggregateColumn#type) as **Custom** and providing a custom aggregate function in the [customAggregate](../../api/grid/aggregateColumn#customaggregate) property, you can achieve this behavior.

Here's an example that demonstrates how to show the count of distinct values for the **ShipCountry** column using a custom aggregate.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/grid/custom-agg-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/custom-agg-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/custom-agg-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/custom-agg-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/custom-agg-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/custom-agg-cs1" %}
{% endif %}

> To display the aggregate value of the current column in another column, you can use the [columnName](../../api/grid/aggregateColumn#columnname) property. If the `columnName` property is not defined, the field name value will be assigned to the `columnName` property.