---
layout: post
title: Classic layout in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table renders row fields side by side in separate columns using the classic tabular layout for easier data analysis.
control: Pivot Table
platform: grid-sdk
documentation: ug
domainurl: ##DomainURL##
---

# Classic layout in React Pivot Table

N> The classic layout applies only to relational data sources and operates in both client-side and server-side engines.

The classic layout, also known as the tabular layout, in the Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table provides a structured, tabular presentation of data that enhances readability and usability. In this layout, fields in the row axis are displayed side by side in separate columns, making data interpretation and analysis easier. By default, grand totals appear at the end of all rows, while subtotals are placed in a separate row beneath each group. All other features of the pivot table, such as filtering, sorting, drag-and-drop, expand/collapse functionality, and more, remain the same as in the compact layout, which serves as the default hierarchical format of the pivot table.

To enable the classic layout, set the [layout](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridsettingsmodel#layout) property in the [gridSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridsettingsmodel) of the Pivot Table to **Tabular**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid-sdk/react/pivot-table/classic-layout-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid-sdk/react/pivot-table/classic-layout-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid-sdk/react/pivot-table/classic-layout-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid-sdk/react/pivot-table/classic-layout-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/pivot-table/classic-layout-cs1" %}

**Limitations**

* Subtotals at the "Top" position are not supported for row subtotals.

## Flat Analytical Table View

By default, the Pivot Table aggregates relational data in the Compact or Tabular layout. The `Flat` layout instead displays the raw, unaggregated relational records in a tabular view without altering the pivot report configuration. It works directly on the [dataSource](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettingsmodel#datasource) of the `dataSourceSettings` and does not trigger any pivot engine population events.

To enable it, set the [layout](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridsettingsmodel#layout) property in `gridSettings` to **Flat** and inject the `FlatLayout` module by adding it to the `Inject` services. Configure the flat view independently using [flatSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/flatsettingsmodel), which supports `columns`, `allowSorting`, `sortSettings`, `allowFiltering`, `filterSettings`, `allowAdvancedFiltering`, `searchSettings`, `allowPaging`, `pageSettings`, `enableVirtualization`, `aggregates`, `totalsPosition` and `showColumnChooser`. When the toolbar is enabled, add the `Layout` item to the `toolbar` array to let users switch between the Compact, Tabular and Flat layouts.

N> The Flat layout is supported only for relational data sources; OLAP is not supported. Switching layouts preserves the original pivot report state.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
import { PivotViewComponent, Inject, FlatLayout } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';

const dataSourceSettings = {
    dataSource: [
        { Product: 'Bike', Country: 'France', Year: 'FY 2023', Sold: 12, Amount: 3600 },
        { Product: 'Helmet', Country: 'Germany', Year: 'FY 2024', Sold: 30, Amount: 1500 },
        { Product: 'Gloves', Country: 'Canada', Year: 'FY 2024', Sold: 18, Amount: 540 }
    ]
};
const gridSettings = { layout: 'Flat' } as any;
const flatSettings = {
    columns: [
        { field: 'Product', headerText: 'Product', width: 140 },
        { field: 'Country', headerText: 'Country', width: 140 },
        { field: 'Year', headerText: 'Year', width: 120 },
        { field: 'Sold', headerText: 'Units Sold', width: 120 },
        { field: 'Amount', headerText: 'Sold Amount', width: 140 }
    ],
    allowSorting: true,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageSize: 10 }
} as any;

function App() {
    return (
        <PivotViewComponent id='PivotView' dataSourceSettings={dataSourceSettings} gridSettings={gridSettings} flatSettings={flatSettings}>
            <Inject services={[FlatLayout]} />
        </PivotViewComponent>
    );
}
export default App;
{% endhighlight %}
{% endtabs %}

## See also

* [Row and column](./row-and-column)
* [Show/Hide Totals](./show-hide-totals)
* [Grouping bar](./grouping-bar)
