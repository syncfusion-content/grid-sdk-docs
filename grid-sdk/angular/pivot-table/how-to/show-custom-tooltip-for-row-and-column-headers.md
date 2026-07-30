---
layout: post
title: Show tooltips for row/column headers in Angular Pivotview | Syncfusion
description: Learn here all about Show tooltip for row and column headers in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Show tooltip for row and column headers 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Show tooltip for row and column headers in Angular Pivotview component

You can display custom tooltips for row and column headers to provide additional context and information. This approach enhances the user experience by showing detailed field information when hovering over header cells in the pivot table.

## Implementation

To display tooltips for row and column headers, initialize an external [`Tooltip`](https://ej2.syncfusion.com/angular/documentation/tooltip/getting-started) component within the Pivot Table's [dataBound](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#databound) event. This ensures the tooltip is created only once, after the Pivot Table has finished rendering and is ready to interact with its elements. The tooltip targets both row and column header elements using specific CSS selectors: `td.e-rowsheader` for row headers and `th.e-columnsheader` for column headers.

For row header tooltips, the formatted text and field name of the current row header are retrieved from the [`pivotValues`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pivotvalues) and displayed in the tooltip. For column header tooltips, the text content of the respective column header element is extracted and displayed directly in the tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/getting-started-cs311/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/getting-started-cs311/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/pivot-table/getting-started-cs311" %}