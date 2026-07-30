---
layout: post
title: Hide Empty Headers in ASP.NET MVC Pivot Table Component
description: Learn here all about Hide Empty Headers in Syncfusion ASP.NET MVC Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Hide Empty Headers
publishingplatform: grid-sdk
documentation: ug
---

# Hide empty headers

When the raw data for a particular field is not defined, it will be shown as 'Undefined' in the pivot table headers. You can hide those headers by setting the [`ShowHeaderWhenEmpty`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewDataSourceSettingsBuilder.html#Syncfusion_EJ2_PivotView_PivotViewDataSourceSettingsBuilder_ShowHeaderWhenEmpty_System_Boolean_) property to **false** in the pivot table.

For example, when the raw data contains **"United Kingdom"** for the 'Country' field but the **"State"** field is undefined, the header displays as **"United Kingdom >> Undefined"**. Here, you can hide those 'Undefined' headers using the [`ShowHeaderWhenEmpty`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewDataSourceSettingsBuilder.html#Syncfusion_EJ2_PivotView_PivotViewDataSourceSettingsBuilder_ShowHeaderWhenEmpty_System_Boolean_) property.

> By default, this property is set to **true**.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/hide-headers/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Fieldlist.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/hide-headers/fieldlist.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/hide-headers/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Fieldlist.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/hide-headers/fieldlist.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}


