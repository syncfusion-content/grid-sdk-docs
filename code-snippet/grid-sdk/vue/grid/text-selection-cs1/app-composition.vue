<template>
  <div id="app">
    <div style="display: flex; align-items: center; gap: 10px; padding: 10px 10px">
      <label>Enable or disable text selection property</label>
      <ejs-switch id="switch" :change="onSwitchChange" :checked="true"></ejs-switch>
    </div>
    <ejs-grid ref="grid" :dataSource="data" :allowGrouping="false" :groupSettings="groupSettings" height="315">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='120'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='120'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='130'></e-column>
        <e-column field='Freight' headerText='Freight' format='C2' width='100'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group, Find } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

const grid = ref(null);
const groupSettings = { columns: ['ShipCountry'] };
provide('grid', [Group, Find]);

const onSwitchChange = function (args) {
  grid.value.ej2Instances.allowTextSelection = args.checked;
};
</script>
