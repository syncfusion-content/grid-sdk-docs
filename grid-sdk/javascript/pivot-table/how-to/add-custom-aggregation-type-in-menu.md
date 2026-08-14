---
layout: post
title: Add custom aggregation type to the menu in Javascript | Syncfusion
description: Learn here all about how to add custom aggregation type to the menu in Syncfusion ##Platform_Name## Pivot Table component of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add custom aggregation type to the menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Add custom aggregation type to JavaScript Pivotview component

The Typescript Pivot Table component allows you to extend its functionality by adding custom aggregation types to the built-in aggregation menu. This enables you to implement specific calculation methods beyond the standard options like Sum, Average, Min, and Max.

## Adding custom aggregation types

You can use the [`dataBound`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#databound) event to add your own custom aggregate types to the pivot table's aggregate menu. This event fires after the pivot table has been fully rendered, making it the perfect spot to modify the component's UI elements.

In the following example, we have added two custom aggregation types **CustomAggregateType 1** (which calculates a weighted average) and **CustomAggregateType 2** (which calculates the percentage of total) to the aggregate menu.

The calculation logic for these custom aggregation types is implemented using the [`aggregateCellInfo`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#aggregatecellinfo) event. This event provides parameters including:
- [`fieldName`](https://ej2.syncfusion.com/documentation/api/pivotview/aggregateEventArgs#fieldname) - Holds the current cell's field name.
- [`row`](https://ej2.syncfusion.com/documentation/api/pivotview/aggregateEventArgs#row) - Holds the current cell's row value.
- [`column`](https://ej2.syncfusion.com/documentation/api/pivotview/aggregateEventArgs#column) - Holds the current cell's column value.
- [`value`](https://ej2.syncfusion.com/documentation/api/pivotview/aggregateEventArgs#value) - Holds the value of the current cell.
- [`cellSets`](https://ej2.syncfusion.com/documentation/api/pivotview/aggregateEventArgs#cellsets) - Holds raw data for the aggregated value cell.
- [`rowCellType`](https://ej2.syncfusion.com/documentation/api/pivotview/aggregateEventArgs#rowcelltype) - Holds the row cell type value.
- [`columnCellType`](https://ej2.syncfusion.com/documentation/api/pivotview/aggregateEventArgs#columncelltype) - Holds the column cell type value.
- [`aggregateType`](https://ej2.syncfusion.com/documentation/api/pivotview/aggregateEventArgs#aggregatetype) - Holds the aggregate type of the cell.
- [`skipFormatting`](https://ej2.syncfusion.com/documentation/api/pivotview/aggregateEventArgs#skipformatting) - Boolean property that allows skipping formatting if applied.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs498/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs498/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs498" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs498/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs498/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs498" %}
{% endif %}