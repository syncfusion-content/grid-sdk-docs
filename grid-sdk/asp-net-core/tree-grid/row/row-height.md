---
layout: post
title: ##Platform_Name## TreeGrid Row Height | Syncfusion
description: Learn how to use Row Height in ##Platform_Name## TreeGrid to customize row size, improve data readability, and adjust grid layout based on content.
platform: grid-sdk
control: Row Height
documentation: ug
---

# Row Height in ##Platform_Name## TreeGrid

You can customize the row height of treegrid rows through the [`rowHeight`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowHeight) property. The [`rowHeight`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowHeight) property is used to change the row height of entire treegrid rows.

In the below example, the rowHeight is set as **60px**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/row-height/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="RowHeight.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/row-height/rowHeight.cs %}
{% endhighlight %}
{% endtabs %}

## Customize row height for particular row

Grid row height for particular row can be customized using the [`rowDataBound`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDataBound) event by setting the [`rowHeight`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowHeight) in arguments for each row based on the requirement.

In the below example, the row height for the row with Task ID as '3' is set as '90px' using the [`rowDataBound`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDataBound) event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/customize-row-height/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CustomizeRowHeight.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/customize-row-height/customizeRowHeight.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/treegrid/overview#/fluent2) to knows how to present and manipulate data.