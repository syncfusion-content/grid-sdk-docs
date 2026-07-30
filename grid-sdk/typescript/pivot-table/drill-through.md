---
layout: post
title: Drill through in TypeScript Pivot Table component | Syncfusion
description: Learn here all about Drill through in Syncfusion TypeScript Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Drill through 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Drill through in TypeScript Pivot Table component

The drill-through feature in the Pivot Table component allows users to view the raw, unaggregated data behind any aggregated cell in the Pivot Table. To enable this feature, set the [`allowDrillThrough`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#allowdrillthrough) property to **true**. By double-clicking an aggregated cell, users can view its detailed raw data in a data grid displayed in a new window. The new window shows the row header, column header, and measure name of the selected cell at the top. Additionally, users can include or exclude fields available in the data grid using the column chooser option.

To use the drill-through feature, inject the `DrillThrough` module in the Pivot Table.

Below is an example of enabling drill-through in a Pivot Table:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs342/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs342/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs342" %}

Users can also access drill-through data through the pivot chart. By clicking on any data point in the pivot chart, they can view the raw data in a data grid displayed in a new window.

Below is an example of enabling drill-through with a pivot chart:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs343/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs343/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs343" %}

## Maximum rows to retrieve

> This property is applicable only for the OLAP data source.

The [`maxRowsInDrillThrough`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#maxrowsindrillthrough) property specifies the maximum number of rows to be returned during a drill-through operation. By default, this property is set to **"10000"**, meaning that if it is not explicitly defined, up to 10,000 rows will be returned.

```ts

var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
            catalog: 'Adventure Works DW 2008 SE',
            cube: 'Adventure Works',
            providerType: 'SSAS',
            enableSorting: true,
            url: 'https://bi.syncfusion.com/olap/msmdpump.dll',
            localeIdentifier: 1033,
            rows: [
                { name: '[Customer].[Customer Geography]', caption: 'Customer Geography' },
            ],
            columns: [
                { name: '[Product].[Product Categories]', caption: 'Product Categories' },
                { name: '[Measures]', caption: 'Measures' },
            ],
            values: [
                { name: '[Measures].[Customer Count]', caption: 'Customer Count' },
                { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' }
            ],
            filters: [
                { name: '[Date].[Fiscal]', caption: 'Date Fiscal' },
            ],
            calculatedFieldSettings: [
                {
                    name: 'BikeAndComponents',
                    formula: '([Product].[Product Categories].[Category].[Bikes] + [Product].[Product Categories].[Category].[Components] )',
                    hierarchyUniqueName: '[Product].[Product Categories]',
                    formatString: 'Standard'
                },
                {
                    name: 'Order on Discount',
                    formula: '[Measures].[Order Quantity] + ([Measures].[Order Quantity] * 0.10)',
                    formatString: 'Currency'
                }
            ],
            filterSettings: [
                {
                    name: '[Date].[Fiscal]', items: ['[Date].[Fiscal].[Fiscal Quarter].&[2002]&[4]',
                        '[Date].[Fiscal].[Fiscal Year].&[2005]'],
                    levelCount: 3
                }
            ]
    },
    allowDrillThrough: true,
    maxRowsInDrillThrough: 10,
    showFieldList: true,
    showGroupingBar: true,
    allowCalculatedField: true,
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

```

![output](images/maxrows.png)

## Events

### DrillThrough

The [`drillThrough`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#drillthrough) event is triggered immediately after a user double-clicks a value cell in the Pivot Table. This event allows users to customize the columns displayed in the drill-through popup's data grid. It is specifically designed to help users view and process the raw data behind an aggregated value in a value cell. The event includes the following parameters:

- [`columnHeaders`](https://ej2.syncfusion.com/documentation/api/pivotview/drillThroughEventArgs#columnheaders): Contains the column header of the clicked cell.
- [`currentCell`](https://ej2.syncfusion.com/documentation/api/pivotview/drillThroughEventArgs#currentcell): Contains details about the clicked cell.
- [`currentTarget`](https://ej2.syncfusion.com/documentation/api/pivotview/drillThroughEventArgs#currenttarget): Contains the HTML element of the clicked cell.
- [`gridColumns`](https://ej2.syncfusion.com/documentation/api/pivotview/drillThroughEventArgs#gridcolumns): Specifies the data grid columns to be displayed in the drill-through popup.
- [`rawData`](https://ej2.syncfusion.com/documentation/api/pivotview/drillThroughEventArgs#rawdata): Contains the raw, unaggregated data for the clicked cell.
- [`rowHeaders`](https://ej2.syncfusion.com/documentation/api/pivotview/drillThroughEventArgs#rowheaders): Contains the row header of the clicked cell.
- [`value`](https://ej2.syncfusion.com/documentation/api/pivotview/drillThroughEventArgs#value): Contains the value of the clicked cell.
- [`cancel`](https://ej2.syncfusion.com/documentation/api/pivotview/drillThroughEventArgs#cancel): It is a boolean property and by setting this to **true**, dialog won’t be created.

Below is an example of using the [`drillThrough`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#drillthrough) event in a Pivot Table:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs344/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs344/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs344" %}

### BeginDrillThrough

The event [`beginDrillThrough`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#begindrillthrough) triggers after a double-click on a value cell in the Pivot Table and fires right after the data grid is initialized in the drill-through popup. This event allows users to interact with the data grid, which displays the raw data behind the aggregated value cell. Users can perform operations such as [`sorting`](https://ej2.syncfusion.com/documentation/grid/sorting), [`grouping`](https://ej2.syncfusion.com/documentation/grid/grouping), and [`filtering`](https://ej2.syncfusion.com/documentation/grid/filtering) within the data grid according to their specific needs. The event includes the following parameters:

* `gridObj` - It holds the data grid instance to be rendered inside the drill-through popup.
* `cellInfo` - Gives details about the clicked cell, including rawData (unaggregated data), rowHeaders, columnHeaders, and value.

The following example demonstrates how to enable [`sorting`](https://ej2.syncfusion.com/documentation/grid/sorting), [`filtering`](https://ej2.syncfusion.com/documentation/grid/filtering), and [`grouping`](https://ej2.syncfusion.com/documentation/grid/grouping) in the data grid displayed within the drill-through popup. This is achieved by configuring the `gridObj` in the [`beginDrillThrough`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#begindrillthrough) event.

> [Grid](https://ej2.syncfusion.com/documentation/grid/getting-started) features are segregated into individual feature-wise modules. For example, to use [`sorting`](https://ej2.syncfusion.com/documentation/grid/sorting) feature, you should inject `Sort` using the `Grid.Inject(Sort)` section.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs345/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs345/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs345" %}