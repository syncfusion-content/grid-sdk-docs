---
layout: post
title: Display string value to pivot table values in Javascript | Syncfusion
description: Learn here all about how to display string value to pivot table values in Syncfusion ##Platform_Name## Pivot Table component of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Display string value to pivot table values
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Display string values in ##Platform_Name## Pivot Table cells

The Pivot Table allows users to display custom string values in value cells by using the [`aggregateCellInfo`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#aggregatecellinfo) event. This is useful when you need to format numeric values into readable strings, such as converting seconds to time format or applying custom formatting rules.

## Converting numeric values to time format

The following example demonstrates how to convert numeric values in the **Sold** field to time format (HH:MM:SS) using the [`aggregateCellInfo`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#aggregatecellinfo) event. The event provides access to cell data through [`args.cellSets`](https://helpej2.syncfusion.com/documentation/api/pivotview/aggregateEventArgs#cellsets), allowing you to customize the display value based on the underlying data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs501/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs501/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs501" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs501/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs501/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs501" %}
{% endif %}