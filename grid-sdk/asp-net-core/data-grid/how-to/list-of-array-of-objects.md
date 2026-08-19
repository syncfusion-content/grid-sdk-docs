---
layout: post
title: List Of Array Of Objects in ASP.NET Core Grid Component
description: Learn here all about List Of Array Of Objects in Syncfusion ASP.NET Core Grid component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: List Of Array Of Objects
publishingplatform: grid-sdk
documentation: ug
---


# Complex Data Binding with list of Array Of Objects

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

