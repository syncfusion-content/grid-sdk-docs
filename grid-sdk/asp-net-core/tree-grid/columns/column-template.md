---
layout: post
title: ASP.NET Core TreeGrid Column Template | Syncfusion
description: Learn how to use column templates in ASP.NET Core TreeGrid to display custom content, images, buttons, and formatted data in cells.
platform: grid-sdk
control: Column Template
documentation: ug
---

# Column Template in ASP.NET Core TreeGrid

The column [`template`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_Template) has options to display custom element instead of a field value in the column.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/columns-core/column-template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Columntemplate.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/columns-core/column-template/columntemplate.cs %}
{% endhighlight %}
{% endtabs %}

N> TreeGrid actions such as editing, filtering and sorting etc. will depend upon the column [`field`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_Field). If the [`field`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_Field) is not specified in the template column, the treegrid actions cannot be performed.

## Using condition template

You can render the template elements based on condition.

In the following code, checkbox is rendered based on **Approved** field value.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/columns-core/conditional-template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/columns-core/conditional-template/default.cs %}
{% endhighlight %}
{% endtabs %}


N> You can refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/treegrid/overview#/fluent2) to knows how to present and manipulate data.