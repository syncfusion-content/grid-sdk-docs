---
layout: post
title: Adding Header and Footer in ASP.NET Core Tree Grid Component | Syncfusion
description: Learn here all about Adding Header and Footer in Syncfusion ASP.NET Core Tree Grid component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Adding Header and Footer
publishingplatform: grid-sdk
documentation: ug
---


# Adding Header and Footer

The excel export provides an option to include header and footer content for exported excel document.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/excel-export/header-footer/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Header-footer.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/excel-export/header-footer/header-footer.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/excel-export/header-footer/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Header-footer.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/excel-export/header-footer/header-footer.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



N> You can refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/TreeGrid/Overview#/material) to knows how to present and manipulate data.