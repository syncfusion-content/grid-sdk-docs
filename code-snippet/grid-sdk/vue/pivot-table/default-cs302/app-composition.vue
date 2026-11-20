<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height">
    </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  rows: [{ name: 'Country' }],
  columns: [{ name: 'Products' }],
  values: [
    { name: 'OrderDate', caption: 'Earliest Order', type: 'Min' },
    { name: 'OrderDate', caption: 'Order Count', type: 'Count' },
    { name: 'Amount', caption: 'Total Amount', type: 'Sum' }
  ],
  formatSettings: [
    { name: 'OrderDate', type: 'date', format: 'dd/MM/yyyy' },
    { name: 'Amount', format: 'C0' }
  ]
};
const height = 350;
</script>
<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pivotview/index.css';
</style>
