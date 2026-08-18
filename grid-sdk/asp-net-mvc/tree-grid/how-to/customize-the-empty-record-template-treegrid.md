---
layout: post
title: ASP.NET MVC TreeGrid Empty Record Template | Syncfusion
description: Learn how to customize the empty record template in ASP.NET MVC TreeGrid to display custom messages, images, and content when no records are available.
platform: grid-sdk
control: Customize the Empty Record Template
publishingplatform: grid-sdk
documentation: ug
---

# Empty Record Template in ASP.NET MVC TreeGrid

The empty record template feature in the TreeGrid allows you to use custom content such as images, text, or other components, when the TreeGrid doesn't contain any records to display. This feature replaces the default message of **No records to display** typically shown in the TreeGrid.

To activate this feature, set the `EmptyRecordTemplate` property of the TreeGrid. The `EmptyRecordTemplate` property expects the HTML element or a function that returns the HTML element.

In the following example, an image and text have been rendered as a template to indicate that the TreeGrid has no data to display.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/how-to/empty-record-template-treegrid/razor %}
{% endhighlight %}
{% highlight c# tabtitle="empty-record-template.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/how-to/empty-record-template-treegrid/empty-record-template.cs %}
{% endhighlight %}
{% endtabs %}

![Empty Record Template TreeGrid](../images/empty-record.png)