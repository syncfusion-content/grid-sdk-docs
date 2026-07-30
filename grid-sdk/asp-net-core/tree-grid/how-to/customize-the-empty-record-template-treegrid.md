---
layout: post
title: Empty Record Template in Syncfusion ASP.NET Core TreeGrid
description: Learn here all about Customize the Empty Record Template in Syncfusion ASP.NET Core TreeGrid component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Customize the Empty Record Template
publishingplatform: grid-sdk
documentation: ug
---

# Customize the Empty Record Template in ASP.NET Core TreeGrid

The empty record template feature in the TreeGrid allows you to use custom content such as images, text, or other components, when the TreeGrid doesn't contain any records to display. This feature replaces the default message of **No records to display** typically shown in the TreeGrid.

To activate this feature, set the `emptyRecordTemplate` property of the TreeGrid. The `emptyRecordTemplate` property expects the HTML element or a function that returns the HTML element.

In the following example, an image and text have been rendered as a template to indicate that the TreeGrid has no data to display.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/how-to/empty-record-template-treegrid/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="empty-record-template.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/how-to/empty-record-template-treegrid/empty-record-template.cs %}
{% endhighlight %}
{% endtabs %}

![Empty Record Template TreeGrid](../images/empty-record.png)