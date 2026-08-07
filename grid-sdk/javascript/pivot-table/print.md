---
layout: post
title: Print in ##Platform_Name## Pivot Table | Syncfusion
description: Learn how the ##Platform_Name## Pivot Table prints the current state of the pivot table or pivot chart via the underlying Grid's `print` method.
platform: ej2-javascript
control: Print
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Print in ##Platform_Name## Pivot Table

The JavaScript Pivot Table component supports print functionality, allowing users to print the current state of the pivot table or pivot chart. This feature enables users to generate hard copies of pivot table reports for convenient review and data sharing.

## Print pivot table

The rendered pivot table can be printed by invoking the [print](https://ej2.syncfusion.com/javascript/documentation/api/grid#print) method from the underlying [`Grid`](https://ej2.syncfusion.com/javascript/documentation/grid/getting-started) component instance. The [`Grid`](https://ej2.syncfusion.com/javascript/documentation/grid/getting-started) control manages the print functionality and captures the current state of the pivot table, including all applied filters, sorting, and formatting. The sample code below demonstrates how to trigger the print operation using an external button click.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs495/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs495/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs495" %}

## Print pivot chart

To print the pivot chart, use the [print](https://ej2.syncfusion.com/javascript/documentation/api/chart#print) method from the underlying [`Chart`](https://ej2.syncfusion.com/javascript/documentation/chart/getting-started) component instance. The [`Chart`](https://ej2.syncfusion.com/javascript/documentation/chart/getting-started) control manages the print functionality and preserves all visual elements, including colors, legends, and data labels, in the printed output.

> To use pivot chart functionality, inject the `PivotChart` module into the pivot table.

> To display the pivot chart, set the [`displayOption`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#displayoption) property to either **Chart** or **Both**.

The sample code below illustrates how to print the pivot chart through an external button click.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs496/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs496/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs496" %}