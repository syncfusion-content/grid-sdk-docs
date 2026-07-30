---
layout: post
title: Refresh the field list in Javascript Pivotview component | Syncfusion
description: Learn here all about Refresh the field list in Syncfusion TypeScript Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Refresh the field list 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Refresh the field list in TypeScript Pivot Table component

The Typescript Pivot Table component allows dynamic data source updates, enabling you to refresh both the pivot table and field list with new data at runtime. This approach is especially useful in scenarios where data changes frequently or when switching between different datasets without reinitializing the entire component.

## Implementation

The following code example demonstrates how to refresh the Pivot Table and field list with new data using an external button click. The implementation involves clearing the existing field list cache by resetting the `fieldList` object and updating the data source with a new dataset. This approach ensures that the component recognizes structural changes in the data and rebuilds the field list accordingly.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/refresh-field-list-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/refresh-field-list-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/pivot-table/refresh-field-list-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/refresh-field-list-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/refresh-field-list-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/pivot-table/refresh-field-list-cs1" %}
{% endif %}