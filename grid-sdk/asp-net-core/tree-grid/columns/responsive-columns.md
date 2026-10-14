---
layout: post
title: ASP.NET Core TreeGrid Responsive Columns | Syncfusion
description: Learn how to create responsive columns in ASP.NET Core TreeGrid using media queries to control column visibility and optimize layouts across devices.
platform: grid-sdk
control: Responsive Columns
documentation: ug
---

# Responsive Columns in ASP.NET Core TreeGrid

You can toggle column visibility based on media queries which are defined at the [`hideAtMedia`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_HideAtMedia). The [`hideAtMedia`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_HideAtMedia) accepts valid [Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/columns-core/responsive/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Responsive.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/columns-core/responsive/responsive.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/treegrid/overview#/fluent2) to knows how to present and manipulate data.