---
layout: post
title:  ASP.NET MVC TreeGrid PDF Cell Style Customization | Syncfusion
description: Learn how to customize PDF cell styles in the ASP.NET MVC TreeGrid, including conditional formatting and theme options for PDF export.
platform: grid-sdk
control: PDF Cell Style Customization
documentation: ug
---

# PDF Cell Style Customization in ASP.NET MVC TreeGrid

## Conditional cell formatting

TreeGrid cells in the exported PDF can be customized or formatted using [`PdfQueryCellInfo`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_PdfQueryCellInfo) event. In this event, we can format the treegrid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for **Duration** column in the exported document by **args.cell** and **backgroundColor** property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/pdf-export/conditional-cell/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Conditional-cell.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/pdf-export/conditional-cell/conditional-cell.cs %}
{% endhighlight %}
{% endtabs %}

## Theme

PDF export provides an option to include theme for exported PDF document.

To apply theme in exported PDF, define the [`theme`](https://ej2.syncfusion.com/documentation/api/grid/pdfexportproperties#theme) in [`PdfExportProperties`](https://ej2.syncfusion.com/documentation/api/grid/pdfexportproperties#pdfexportproperties).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/pdf-export/theme/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Theme.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/pdf-export/theme/theme.cs %}
{% endhighlight %}
{% endtabs %}

N> By default, material theme is applied to exported PDF document.
<br/> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.