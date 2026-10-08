---
layout: post
title: ASP.NET MVC TreeGrid Row Template | Syncfusion
description: Learn how to use row templates in ASP.NET MVC TreeGrid to customize row layouts, display custom content, and enhance data presentation.
platform: grid-sdk
control: Row Template
documentation: ug
---

# Row Template in ASP.NET MVC TreeGrid

The **RowTemplate** has an option to customize the look and behavior of the treegrid rows. The [`RowTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowTemplate) property accepts either the **Template** string or HTML element ID.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/row/row-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Row-template.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/row/row-template/row-template.cs %}
{% endhighlight %}
{% endtabs %}

The [`RowTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowTemplate) property accepts only the TR element.

## Row template with formatting

If the [`RowTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_RowTemplate) is used, the value cannot be  formatted  inside the template using the [`Columns.Format`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_Format) property. In that case, a function should be defined globally to format the value and invoke it inside the template.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/row/rowtemplate-formatting/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Rowtemplate-formatting.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/row/rowtemplate-formatting/rowtemplate-formatting.cs %}
{% endhighlight %}
{% endtabs %}

## Limitations

Row template feature is not compatible with all the features which are available in treegrid and it has limited features support. Here we have listed out the features which are not compatible with row template feature.

* Filtering
* Paging
* Sorting
* Scrolling
* Searching
* Rtl
* Context Menu
* State Persistence



N> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.