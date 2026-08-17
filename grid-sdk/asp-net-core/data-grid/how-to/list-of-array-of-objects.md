---
layout: post
title: ASP.NET Core Grid Array of Objects Binding | Syncfusion
description: Learn how to bind arrays of objects and complex fields in ASP.NET Core Data Grid to display and manage nested data structures effectively.
platform: grid-sdk
control: List Of Array Of Objects
publishingplatform: grid-sdk
documentation: ug
---


# Bind Array of Objects in ASP.NET Core Data Grid

The following example shows how to set Complex field for datasource having Array Of Objects.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/columns/complexarray/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Complexarray.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/columns/complexarray/complexarray.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/columns/complexarray/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Complexarray.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/columns/complexarray/complexarray.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

