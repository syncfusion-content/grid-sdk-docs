---
layout: post
title: Customize Pivot Table Icons in ASP.NET Core | Syncfusion
description: Learn here all about Customize The Icons For Pivot Table in Syncfusion ASP.NET Core Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Customize The Icons For Pivot Table
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

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/icon-customize/customize/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="IconCustomize.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/icon-customize/customize/IconCustomize.cs %}
{% endhighlight %}
{% endtabs %}


