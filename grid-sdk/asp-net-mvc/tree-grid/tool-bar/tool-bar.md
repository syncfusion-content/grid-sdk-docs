---
layout: post
title: ASP.NET MVC TreeGrid Toolbar | Syncfusion
description: Learn how to customize the toolbar in ASP.NET MVC TreeGrid, including item control, toolbar placement, and toolbar templates.
platform: grid-sdk
control: Tool Bar
documentation: ug
---

# Toolbar in ASP.NET MVC TreeGrid

The TreeGrid provides ToolBar support to handle treegrid actions. The [`Toolbar`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_Toolbar) property accepts either the collection of built-in toolbar items and [`ItemModel`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Navigations.ToolbarItem.html) objects for custom toolbar items or HTML element ID for toolbar template.



## Enable/disable toolbar items

You can enable/disable toolbar items by using the **enableItems** method.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/toolbar/toolbar-enable/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Toolbar-enable.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/toolbar/toolbar-enable/toolbar-enable.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.