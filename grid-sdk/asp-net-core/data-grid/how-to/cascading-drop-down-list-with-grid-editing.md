---
layout: post
title: ASP.NET Core Grid Cascading DropDownList Editing | Syncfusion
description: Learn how to implement cascading DropDownList controls in ASP.NET Core Data Grid editing using cell edit templates for dependent field selection.
platform: grid-sdk
control: Cascading Drop Down List With Grid Editing
publishingplatform: grid-sdk
documentation: ug
---


# Cascading DropDownList with Grid Editing in ASP.NET Core Data Grid

You can achieve the Cascading DropDownList with grid Editing by using the Cell Edit Template feature.

In the below demo, Cascading DropDownList is rendered for the `ShipCountry` and `ShipState` column.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/how-to/cascading/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Cascading.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/how-to/cascading/cascading.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/how-to/cascading/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Cascading.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/how-to/cascading/cascading.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

