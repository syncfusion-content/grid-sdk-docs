---
layout: post
title: Expand group by level in Vue Grid component | Syncfusion
description: Learn how to expand grouped rows up to a specific level in the Syncfusion Vue Grid component using the group module.
control: Expand group by level
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Expand group by level in Vue Grid component

When data is grouped by multiple columns, the Grid renders a hierarchy of group caption rows. Expanding every group is not always desirable. Expanding only up to a chosen level gives a summarized view while deeper levels stay collapsed.

The Grid has no dedicated property for this, so it is achieved by collapsing all groups with the [groupCollapseAll](https://ej2.syncfusion.com/vue/documentation/api/grid#groupcollapseall) method and then expanding the caption rows level by level with the [expandCollapseRows](https://ej2.syncfusion.com/vue/documentation/api/grid/group#expandcollapserows) method of the Group module. The level of a caption row is the number of indent cells it contains.

In the following example, the Grid is grouped by `ShipCountry` and `ShipCity`, and only the first level (`ShipCountry`) is expanded after the data is bound, so the `ShipCity` groups remain collapsed. Change the level passed to `expandByLevel` to expand deeper levels.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <ejs-grid ref="grid" :dataSource="data" :allowGrouping="true" :groupSettings="groupOptions" :dataBound="dataBound">
    <e-columns>
      <e-column field="OrderID" headerText="Order ID" width="120"></e-column>
      <e-column field="CustomerID" headerText="Customer ID" width="140"></e-column>
      <e-column field="ShipCity" headerText="Ship City" width="140"></e-column>
      <e-column field="ShipCountry" headerText="Ship Country" width="140"></e-column>
    </e-columns>
  </ejs-grid>
</template>

<script setup>
import { ref, provide } from 'vue';
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn, Group } from '@syncfusion/ej2-vue-grids';

const grid = ref(null);
const data = [/* orders data */];
const groupOptions = { columns: ['ShipCountry', 'ShipCity'] };
let applied = false;
provide('grid', [Group]);

function expandByLevel(grid, level) {
    grid.groupCollapseAll();
    // Caption rows are rendered top-down, so a parent is always expanded before its children are queried.
    var depth = 0;
    while (depth < level) {
        var captions = grid.getContentTable().querySelectorAll('tr.e-groupcaption');
        for (var i = 0; i < captions.length; i++) {
            var row = captions[i];
            var icon = row.querySelector('.e-recordpluscollapse');
            if (icon && row.querySelectorAll('.e-indentcell').length === depth) {
                grid.groupModule.expandCollapseRows(icon);
            }
        }
        depth++;
    }
}

function dataBound() {
  if (!applied) {
    applied = true;
    expandByLevel(grid.value, 1);
  }
}
</script>
{% endhighlight %}
{% endtabs %}

> * The level starts from `1`. A level of `0` collapses all the groups.
> * Expanding by level works on the groups rendered in the current view. For large datasets, use [lazy load grouping](./lazy-load-grouping) instead.
