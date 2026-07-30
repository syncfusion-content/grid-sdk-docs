---
layout: post
title: Show fieldlist when table is empty in Javascript | Syncfusion
description: Learn here all about Show field list when pivot table empty in Syncfusion JavaScript Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Show field list when pivot table empty 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Show field list for empty JavaScript Pivot Table component

When there are no fields configured in a pivot table's row, column, value, and filter axes, the field list can be automatically displayed to help users configure the pivot table. This is particularly useful in scenarios where users start with an empty pivot configuration and need immediate access to available fields for setup. To achieve this functionality, use the [`dataBound`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#databound) event and call the `onShowFieldList` method as demonstrated below.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs83/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs83/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs83" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs83/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs83/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs83" %}
{% endif %}