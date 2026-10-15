---
layout: post
title: ASP.NET MVC TreeGrid Column Reorder | Syncfusion
description: Learn how to reorder columns in ASP.NET MVC TreeGrid using drag-and-drop functionality and customize column arrangement.
platform: grid-sdk
control: Column Reorder
documentation: ug
---

# Column Reorder in ASP.NET MVC TreeGrid

Reordering can be done by drag and drop of a particular column header from one index to another index within the treegrid. To enable reordering, set the [`AllowReordering`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_AllowReordering) to true.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/columns-mvc/reorder/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Reorder.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/columns-mvc/reorder/reorder.cs %}
{% endhighlight %}
{% endtabs %}

N> You can disable reordering a particular column by setting the [`AllowReordering`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_AllowReordering) of [`Column`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) to false.

## Reorder multiple columns

Multiple columns can be reordered at a time by using the [`reorderColumns`](https://ej2.syncfusion.com/documentation/api/grid/index-default#reordercolumns) method.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/columns-mvc/reorderbyColumn/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ReorderbyColumn.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/columns-mvc/reorderbyColumn/reorderbyColumn.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.