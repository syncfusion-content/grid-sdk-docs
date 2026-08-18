---
layout: post
title: ASP.NET Core TreeGrid Custom Aggregate | Syncfusion
description: Learn about implementing custom aggregates in the ASP.NET Core TreeGrid, including configuration and usage of custom aggregation functions.
platform: grid-sdk
control: Custom Aggregate
documentation: ug
---


# Custom Aggregate in ASP.NET Core TreeGrid

To calculate the aggregate value with your own aggregate functions, use the custom aggregate option. To use custom aggregation, specify the [`type`](https://help.syncfusion.com/cr/cref_files/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.TreeGrid.TreeGridAggregateColumn~Type.html) as **Custom**, and provide the custom aggregate function in the [`customAggregate`](https://help.syncfusion.com/cr/cref_files/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.TreeGrid.TreeGridAggregateColumn~CustomAggregate.html) property.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/aggregates/custom-Aggregate/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CustomAggregate.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/aggregates/custom-Aggregate/customAggregate.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/aggregates/custom-Aggregate/razor %}
{% endhighlight %}
{% highlight c# tabtitle="CustomAggregate.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/aggregates/custom-Aggregate/customAggregate.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



N> To access the custom aggregate value inside the template, use the key as **Custom**.
<br/> You can refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/TreeGrid/Overview#/material) to knows how to present and manipulate data.