---
layout: post
title: Changing PivotView minimum height in Javascript | Syncfusion
description: Set the minimum height of the Syncfusion JavaScript Pivot Table to control its layout in responsive applications.
platform: grid-sdk
control: Changing the pivotview component minimum height 
documentation: ug
domainurl: ##DomainURL##
---

# Change the pivotview component minimum height in JavaScript

The `minHeight` property allows you to set the minimum height for the Typescript Pivot Table component. By default, the component maintains a minimum height of **300px**. This property ensures the component remains visible and functional even when the container height is smaller than the specified minimum value.

When the content exceeds the minimum height, the component automatically adjusts to accommodate the data. This property is particularly useful for responsive layouts where the component needs to maintain usability across different screen sizes.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs72/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs72/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs72" %}