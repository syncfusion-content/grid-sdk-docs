---
layout: post
title: Customize The Icons For Pivot Table in ASP.NET MVC Pivot Table Component
description: Learn here all about Customize The Icons For Pivot Table in Syncfusion ASP.NET MVC Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Customize The Icons For Pivot Table
publishingplatform: grid-sdk
documentation: ug
---

# Customize the icons for pivot table

You can customize the pivot button icons in the pivot table by overriding the class **.pivot-button** with a custom property content as mentioned below.

```html

<style>
#PivotView_PivotFieldList .e-icons.e-toggle-field-list::before {
    content: '\e337';
}
</style>

```

In the below sample, pivot table is rendered with a customized pivot button icons.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/icon-customize/customize/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="IconCustomize.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/icon-customize/customize/IconCustomize.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/icon-customize/customize/razor %}
{% endhighlight %}
{% highlight c# tabtitle="IconCustomize.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/icon-customize/customize/IconCustomize.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}


