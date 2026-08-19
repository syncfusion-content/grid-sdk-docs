---
layout: post
title: Data Annotation in ASP.NET Core Grid Component
description: Learn here all about Data Annotation in Syncfusion ASP.NET Core Grid component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Data Annotation
publishingplatform: grid-sdk
documentation: ug
---

# Data Annotation in Grid Component

Data Annotation helps you define rules for the model class to perform data validation and display suitable messages to end users as validation message in the edit form.

The Data Annotation can be enabled by referencing the **System.ComponentModel.DataAnnotations** namespace which maps data annotation to the corresponding DataGrid Column property.

N> The DataGrid Property has more priority than the Data Annotation. For Instance, if the DisplayName Attribute is set to a Field in the DataGrid model class and the HeaderText is set to the same DataGrid column property, the value of the HeaderText property will be considered and shown in the DataGrid header.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/data-annotation/annotation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Annotation.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/data-annotation/annotation/annotation.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/data-annotation/annotation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Annotation.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/data-annotation/annotation/annotation.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

