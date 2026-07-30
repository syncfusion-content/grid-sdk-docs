---
layout: post
title: Custom aggregate in React TreeGrid | Syncfusion
description: Learn here all about Custom aggregate in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Custom aggregate
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Custom aggregate in React TreeGrid

Custom aggregates calculate summary values using application-defined functions. To enable custom aggregation, set [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#type) to **Custom** and provide the aggregate function through the [customAggregate](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#customaggregate) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/aggregate-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/aggregate-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/aggregate-cs2" %}

> To access the custom aggregate value inside a template, use the key **Custom**.