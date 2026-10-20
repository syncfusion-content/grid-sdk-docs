---
layout: post
title: ASP.NET Core TreeGrid Rows | Syncfusion
description: Learn how to work with rows in ASP.NET Core TreeGrid, including row customization, selection, styling, rendering, and row-level operations.
platform: grid-sdk
control: Row
documentation: ug
---


# Rows in ASP.NET Core TreeGrid

The row represents record details fetched from data source.

## Customize rows

You can customize the appearance of a row by using the [`rowDataBound`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDataBound) event. The [`rowDataBound`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowDataBound) event triggers for every row. In the event handler, you can get the **args** which contains details of the row.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/customize-rows/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CustomizeRows.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/customize-rows/CustomizeRows.cs %}
{% endhighlight %}
{% endtabs %}


## Styling alternate rows

 You can change the treegrid's alternative rows' background color by overriding the **.e-altrow** class.

```css
.e-treegrid .e-altrow {
    background-color: #ffd800;
}
```

Refer to the following example.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/alternate-rows/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="AlternateRows.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/row/alternate-rows/alternateRows.cs %}
{% endhighlight %}
{% endtabs %}


N> Refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/treegrid/overview#/fluent2) to learn how to present and manipulate data.