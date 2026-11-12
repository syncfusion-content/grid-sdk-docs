---
layout: post
title: Changing PivotView minimum height in Javascript | Syncfusion
description: Learn here all about Changing the pivotview component minimum height in Syncfusion ##Platform_Name## Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Changing the pivotview component minimum height 
documentation: ug
domainurl: ##DomainURL##
---

# Change the pivotview component minimum height in JavaScript

The `minHeight` property allows you to set the minimum height for the Typescript Pivot Table component. By default, the component maintains a minimum height of **300px**. This property ensures the component remains visible and functional even when the container height is smaller than the specified minimum value.

When the content exceeds the minimum height, the component automatically adjusts to accommodate the data. This property is particularly useful for responsive layouts where the component needs to maintain usability across different screen sizes.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs72/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs72/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs72" %}
