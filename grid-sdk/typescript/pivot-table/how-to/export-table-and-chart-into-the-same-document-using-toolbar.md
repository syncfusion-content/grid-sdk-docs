---
layout: post
title: Export table, chart to same document in Javascript | Syncfusion
description: Learn here all about how to export table and chart into the same document using toolbar in Syncfusion Javascript of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Export table and chart into the same document using toolbar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Export table and chart to the same document in JavaScript

By default, when the [displayOption.view](https://ej2.syncfusion.com/documentation/api/pivotview/displayOptionModel#view) property is set to **Both** in the Pivot Table, the export functionality exports either the table or the chart to the PDF document based on the current value of the [displayOption.primary](https://ej2.syncfusion.com/documentation/api/pivotview/displayOptionModel#primary) property. However, to export both the table and the chart into the same PDF document simultaneously, use the [`pdfExport`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#pdfexport) method during the [`actionBegin`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#actionbegin) event.

This approach is particularly useful when users need comprehensive reports that include both tabular data and visual representations in a single document.

## Implementation steps

Follow these steps to enable combined table and chart export:

1. **Configure the Pivot Table** with both table and chart display options.
2. **Handle the actionBegin event** to intercept the default export action.
3. **Call the pdfExport method** with the `exportBothTableAndChart` parameter set to **true**.

## Code example

The following example demonstrates how to restrict the built-in export action by setting the [`args.cancel`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotActionBeginEventArgs#cancel) option to **true** in the [`actionBegin`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#actionbegin) event, and then export both the table and the chart by calling the [`pdfExport`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#pdfexport) method with the `exportBothTableAndChart` argument set to **true**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs493/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs493/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs493" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs493/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs493/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs493" %}
{% endif %}