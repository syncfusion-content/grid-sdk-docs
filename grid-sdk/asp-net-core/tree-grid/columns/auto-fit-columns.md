---
layout: post
title: ASP.NET Core TreeGrid Auto Fit Columns | Syncfusion
description: Learn how to use Auto Fit Columns in ASP.NET Core TreeGrid to automatically resize columns based on content and improve data readability.
platform: grid-sdk
control: Auto Fit Columns
documentation: ug
---

# Auto Fit Columns in ASP.NET Core TreeGrid

The autoFitColumns method resizes the column to fit the widest cell's content without wrapping. You can autofit a specific column at initial rendering by invoking the **autoFitColumns** method in [`dataBound`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.treegrid.treegrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_DataBound) event.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/columns-core/auto-fit/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Autofit.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/columns-core/auto-fit/autofit.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight c# tabtitle="Autofit.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/columns-core/auto-fit/autofit.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



N> You can autofit all the columns by invoking the autoFitColumns method without column names.
<br/> You can refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/TreeGrid/Overview#/material) to knows how to present and manipulate data.