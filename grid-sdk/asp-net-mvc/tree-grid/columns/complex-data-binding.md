---
layout: post
title: ASP.NET MVC TreeGrid Complex Data Binding | Syncfusion
description: Learn how to use complex data binding in ASP.NET MVC TreeGrid with nested field mapping, dot notation, and hierarchical data display.
platform: grid-sdk
control: Complex Data Binding
documentation: ug
---

# Complex Data Binding in ASP.NET MVC TreeGrid

You can achieve complex data binding in the treegrid by using the dot(.) operator in the [`Field`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_Field) in [`Column`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/columns-mvc/complexbinding/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Complexbinding.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/columns-mvc/complexbinding/complexbinding.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.