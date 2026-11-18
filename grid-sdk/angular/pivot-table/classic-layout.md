---
layout: post
title: Classic Layout in Angular Pivot Table | Syncfusion
description: Learn how the Angular Pivot Table renders a tabular classic layout with row fields side by side and configurable subtotal positions.
platform: grid-sdk
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# Classic Layout in Angular Pivot Table

N> The classic layout applies only to relational data sources and operates in both client-side and server-side engines.

The classic layout, also known as the tabular layout, in the Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table provides a structured, tabular presentation of data that enhances readability and usability. In this layout, fields in the row axis are displayed side by side in separate columns, making data interpretation and analysis easier. By default, grand totals appear at the end of all rows, while subtotals are placed in a separate row beneath each group. All other features of the pivot table, such as filtering, sorting, drag-and-drop, expand/collapse functionality, and more, remain the same as in the compact layout, which serves as the default hierarchical format of the pivot table.

To enable the classic layout, set the [layout](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings#layout) property in the [gridSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings) of the Pivot Table to **Tabular**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/classic-layout-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/classic-layout-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/pivot-table/classic-layout-cs1" %}

**Limitations**

* Subtotals at the "Top" position are not supported for row subtotals.

## Flat Analytical Table View

By default, the Pivot Table aggregates relational data in the Compact or Tabular layout. The `Flat` layout instead displays the raw, unaggregated relational records in a tabular view without altering the pivot report configuration. It works directly on the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#datasource) of the `dataSourceSettings` and does not trigger any pivot engine population events.

To enable it, set the [layout](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings#layout) property in `gridSettings` to **Flat** and inject the `FlatLayout` module (as `FlatLayoutService`) in the component `providers`. Configure the flat view independently using [flatSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/flatSettings), which supports `columns`, `allowSorting`, `sortSettings`, `allowFiltering`, `filterSettings`, `allowAdvancedFiltering`, `searchSettings`, `allowPaging`, `pageSettings`, `enableVirtualization`, `aggregates`, `totalsPosition` and `showColumnChooser`. When the toolbar is enabled, add the `Layout` item to the `toolbar` array to let users switch between the Compact, Tabular and Flat layouts.

N> The Flat layout is supported only for relational data sources; OLAP is not supported. Switching layouts preserves the original pivot report state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/flat-layout-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/flat-layout-cs1/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/pivot-table/flat-layout-cs1" %}

## See also

* [Row and column](./row-and-column)
* [Show/Hide Totals](./show-hide-totals)
* [Grouping bar](./grouping-bar)