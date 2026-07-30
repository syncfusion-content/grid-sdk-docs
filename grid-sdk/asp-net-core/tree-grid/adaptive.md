---
layout: post
title: Adaptive in ASP.NET Core Tree Grid Component
description: Learn here all about Adaptive in Syncfusion ASP.NET Core Tree Grid component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Adaptive
publishingplatform: grid-sdk
documentation: ug
---


# Adaptive View in ASP.NET Core Tree Grid Component

The Tree Grid user interface (UI) was redesigned to provide an optimal viewing experience and improve usability on small screens. This interface will render the filter, sort, and edit dialogs adaptively.

## Render adaptive dialogs

When you enable the [`enableAdaptiveUI`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_EnableAdaptiveUI) property, the tree grid will render the filter, sort, and edit dialogs in full screen for a better user experience. The following demo demonstrates this behavior.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/adaptive/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/adaptive/default.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/adaptive/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Default.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/adaptive/default.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}


N> Refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/TreeGrid/Overview#/material) to learn how to present and manipulate data.