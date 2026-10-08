---
layout: post
title: Row height in ASP.NET MVC Treegrid | Syncfusion
description: Learn how to use Row Height in ASP.NET MVC TreeGrid to customize row size, improve data readability, and adjust grid layout based on content.
platform: grid-sdk
control: Row Height
documentation: ug
---

# Row height in ASP.NET MVC Treegrid

You can customize the row height of treegrid rows through the [`RowHeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowHeight) property. The [`RowHeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowHeight) property is used to change the row height of entire treegrid rows.

In the below example, the **RowHeight** is set as '60px'.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/row/row-height/razor %}
{% endhighlight %}
{% highlight c# tabtitle="RowHeight.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/row/row-height/rowHeight.cs %}
{% endhighlight %}
{% endtabs %}

## Customize row height for particular row

Grid row height for particular row can be customized using the [`RowDataBound`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDataBound) event by setting the [`RowHeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowHeight) in arguments for each row based on the requirement.

In the below example, the row height for the row with Task ID as 3 is set as 90px using the [`RowDataBound`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDataBound) event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/row/customize-row-height/razor %}
{% endhighlight %}
{% highlight c# tabtitle="CustomizeRowHeight.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/row/customize-row-height/customizeRowHeight.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.