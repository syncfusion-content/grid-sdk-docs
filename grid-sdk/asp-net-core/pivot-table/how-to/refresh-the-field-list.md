---
layout: post
title: Refresh The Field List in ASP.NET Core Pivot Table Component
description: Learn here all about Refresh The Field List in Syncfusion ASP.NET Core Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Refresh The Field List
publishingplatform: grid-sdk
documentation: ug
---

# Refresh the field list while change the data source

You can refresh pivot table and field list with new data source dynamically.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/field-list/refresh/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Refresh.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/field-list/refresh/Refresh.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/field-list/refresh/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Refresh.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/field-list/refresh/Refresh.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}


