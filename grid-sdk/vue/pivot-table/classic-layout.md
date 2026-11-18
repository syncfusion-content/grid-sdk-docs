---
layout: post
title: Classic Layout in Vue Pivot Table | Syncfusion
description: Learn how the Vue Pivot Table switches to a tabular classic layout where row fields appear side by side with subtotals per group.
control: Classic Layout
platform: grid-sdk
documentation: ug
domainurl: ##DomainURL##
---

# Classic Layout in Vue Pivot Table

N> The classic layout is compatible only with relational data sources and operates in both client-side and server-side engines.

The classic layout, also known as the tabular layout, in the Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table provides a structured, tabular presentation of data that enhances readability and usability. In this layout, fields in the row axis are displayed side by side in separate columns, making data interpretation and analysis easier. By default, grand totals appear at the end of all rows, while subtotals are placed in a separate row beneath each group. All other features of the pivot table, such as filtering, sorting, drag-and-drop, expand/collapse functionality, and more, remain the same as in the compact layout, which serves as the default hierarchical format of the pivot table.

To enable the classic layout, set the [layout](https://ej2.syncfusion.com/vue/documentation/api/pivotview/gridSettings#layout) property in the [gridSettings](https://ej2.syncfusion.com/vue/documentation/api/pivotview/gridSettings) of the Pivot Table to **Tabular**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/pivot-table/classic-layout-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/pivot-table/classic-layout-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/pivot-table/classic-layout-cs1" %}

**Limitations**

* Subtotals at the "Top" position are not supported for row subtotals.

## Flat Analytical Table View

By default, the Pivot Table aggregates relational data in the Compact or Tabular layout. The `Flat` layout instead displays the raw, unaggregated relational records in a tabular view without altering the pivot report configuration. It works directly on the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/pivotview/datasourcesettings#datasource) of the `dataSourceSettings` and does not trigger any pivot engine population events.

To enable it, set the [layout](https://ej2.syncfusion.com/vue/documentation/api/pivotview/gridSettings#layout) property in `gridSettings` to **Flat** and inject the `FlatLayout` module using the `provide` option. Configure the flat view independently using [flatSettings](https://ej2.syncfusion.com/vue/documentation/api/pivotview/flatSettings), which supports `columns`, `allowSorting`, `sortSettings`, `allowFiltering`, `filterSettings`, `allowAdvancedFiltering`, `searchSettings`, `allowPaging`, `pageSettings`, `enableVirtualization`, `aggregates`, `totalsPosition` and `showColumnChooser`. When the toolbar is enabled, add the `Layout` item to the `toolbar` array to let users switch between the Compact, Tabular and Flat layouts.

N> The Flat layout is supported only for relational data sources; OLAP is not supported. Switching layouts preserves the original pivot report state.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
  <ejs-pivotview id="PivotView" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :flatSettings="flatSettings"></ejs-pivotview>
</template>

<script>
import { PivotViewComponent, FlatLayout } from '@syncfusion/ej2-vue-pivotview';

export default {
  components: { 'ejs-pivotview': PivotViewComponent },
  data() {
    return {
      dataSourceSettings: {
        dataSource: [
            { Product: 'Bike', Country: 'France', Year: 'FY 2023', Sold: 12, Amount: 3600 },
            { Product: 'Helmet', Country: 'Germany', Year: 'FY 2024', Sold: 30, Amount: 1500 },
            { Product: 'Gloves', Country: 'Canada', Year: 'FY 2024', Sold: 18, Amount: 540 }
        ]
      },
      gridSettings: { layout: 'Flat' },
      flatSettings: {
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
      }
    };
  },
  provide: {
    pivotview: [FlatLayout]
  }
};
</script>
{% endhighlight %}
{% endtabs %}
