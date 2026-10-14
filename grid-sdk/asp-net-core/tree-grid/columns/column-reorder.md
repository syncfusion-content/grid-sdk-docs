---
layout: post
title: ASP.NET Core TreeGrid Column Reorder | Syncfusion
description: Learn how to reorder columns in ASP.NET Core TreeGrid using drag-and-drop functionality and customize column arrangement.
platform: grid-sdk
control: Column Reorder
documentation: ug
---

# Column Reorder in ASP.NET Core TreeGrid

Reordering can be done by drag and drop of a particular column header from one index to another index within the treegrid. To enable reordering, set the [`allowReordering`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowReordering) to true.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/columns-core/reorder-columns/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/columns-core/reorder-columns/default.cs %}
{% endhighlight %}
{% endtabs %}

N> You can disable reordering a particular column by setting the [`allowReordering`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowReordering) property of [`e-treegrid-column`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) tag helper to false.

## Reorder multiple columns

Multiple columns can be reordered at a time by using the **reorderColumns** method.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/columns-core/reorder-multi-columns/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/columns-core/reorder-multi-columns/default.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/treegrid/overview#/fluent2) to knows how to present and manipulate data.