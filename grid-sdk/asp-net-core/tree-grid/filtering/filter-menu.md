---
layout: post
title: ASP.NET Core TreeGrid Filter Menu | Syncfusion
description: Learn how to use the filter menu in ASP.NET Core TreeGrid, including column filtering, filter operators, and custom filter options.
platform: grid-sdk
control: Filter Menu
documentation: ug
---


# Filter Menu in ASP.NET Core TreeGrid

You can enable filter menu by setting the [`type`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridFilterSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridFilterSettings_Type) as **menu**. The filter menu UI will be rendered based on its column type, which allows you to filter data. You can filter the records with different operators.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/filtering/filter-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="FilterMenu.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/filtering/filter-menu/filterMenu.cs %}
{% endhighlight %}
{% endtabs %}


N> * [`allowFiltering`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowFiltering) must be set as true to enable filter menu.
<br/> * Setting [`allowFiltering`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowFiltering) property of [`e-treegrid-column`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) tag helper as false will prevent filter menu rendering for a particular column.

## Custom component in filter menu

The [`filter`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_Filter) property of [`e-treegrid-column`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) tag helper is used to add custom filter components to a particular column. To implement custom filter ui, define the following functions:

* **create**:  Creates custom component.
* **write**: Wire events for custom component.
* **read**: Read the filter value from custom component.

In the following sample, dropdown is used  as custom component in the duration column.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/filtering/filter-menu-ui/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="FilterMenuUI.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/filtering/filter-menu-ui/filterMenuUI.cs %}
{% endhighlight %}
{% endtabs %}

## Enable different filter dialog for a column

You can use both **Menu** and **Excel** filter in a same TreeGrid. To do so, set the type as **Menu** or **Excel** using [`filter`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_Filter) property of [`e-treegrid-column`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) tag helper.

In the following sample menu filter is enabled by default and excel filter is enabled for the Task Name column using the [`filter`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_Filter) property of [`e-treegrid-column`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) tag helper.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/filtering/diffcolumnfilter/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Diffcolumnfilter.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/filtering/diffcolumnfilter/diffcolumnfilter.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/treegrid/overview#/fluent2) to knows how to present and manipulate data.