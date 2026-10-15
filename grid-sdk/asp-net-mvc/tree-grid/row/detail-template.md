---
layout: post
title: ASP.NET MVC TreeGrid Detail Template | Syncfusion
description: Learn how to use detail templates in ASP.NET MVC TreeGrid to display expandable row content, nested data, and custom detail views.
platform: grid-sdk
control: Detail Template
documentation: ug
---

# Detail Template in ASP.NET MVC TreeGrid

The detail template provides additional information about a particular row. By expanding the parent row the child rows are expanded along with their detail template. The [`detailTemplate`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_DetailTemplate) property accepts either the template string or HTML element ID.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/row/detailtemplate/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Detailtemplate.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/row/detailtemplate/detailtemplate.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.