<template>
  <div id="app">
    <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupSettings' height='400px'>
      <e-columns>
        <e-column field='ProductID' headerText='Product ID' textAlign='Right' width=120></e-column>
        <e-column field='ProductName' headerText='Product Name' width=150></e-column>
        <e-column field='Category' headerText='Category' width=140></e-column>
        <e-column field='Region' headerText='Region' width=130></e-column>
        <e-column field='UnitPrice' headerText='Unit Price' textAlign='Right' width=120></e-column>
        <e-column field='UnitsInStock' headerText='Units In Stock' textAlign='Right' width=140></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

const groupSettings = { columns: ['Category', 'Region'], isGroupOpenByDefault: (args) => args.level === 1 && args.key === 'Beverages' };
provide('grid', [Group]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>