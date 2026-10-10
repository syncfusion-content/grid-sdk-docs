---
layout: post
title: ASP.NET MVC TreeGrid Aggregates | Syncfusion
description: Learn how to configure, display, and customize aggregate values in ASP.NET MVC TreeGrid, including built-in aggregate types and child aggregation.
platform: grid-sdk
control: Aggregates
documentation: ug
---


# Aggregates in ASP.NET MVC TreeGrid

Aggregate values are displayed in the TreeGrid footer and in parent row footer for child row aggregate values. It can be configured through [`Aggregates`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_Aggregates) property. [`Field`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridAggregateColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridAggregateColumn_Field) and [`Type`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridAggregateColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridAggregateColumn_Type) are the minimum properties required to represent an aggregate column.

By default, the aggregate value can be displayed in the treegrid footer, and footer of child rows. To show the aggregate value in one of the cells, use the [`FooterTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridAggregateColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridAggregateColumn_FooterTemplate).

## Built-in aggregate types

The aggregate type should be specified in the [`Type`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridAggregateColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridAggregateColumn_Type) property to configure an aggregate column.

The built-in aggregates are,
* Sum
* Average
* Min
* Max
* Count
* Truecount
* Falsecount

N> Multiple aggregates can be used for an aggregate column by setting the [`Type`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridAggregateColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridAggregateColumn_Type) property with an array of aggregate types.
<br/> Multiple types for a column is supported only when one of the aggregate templates is used.

## Child aggregate

Aggregate value is calculated for child rows, and it is displayed in the parent row footer. Use the [`ShowChildSummary`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridAggregate.html#Syncfusion_EJ2_TreeGrid_TreeGridAggregate_ShowChildSummary) property to render the child rows aggregate value.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/aggregates/child-aggregate/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ChildAggregate.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/aggregates/child-aggregate/childAggregate.cs %}
{% endhighlight %}
{% endtabs %}


N> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.