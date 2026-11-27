<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">HTML Export</ejs-button>
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowHtmlExport="allowHtmlExport"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview, HtmlExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  drilledMembers: [{ name: 'Country', items: ['France'] }],
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 320;
const allowHtmlExport = true;
const isPrimary = true;

provide('pivotview', [HtmlExport]);

const btnClick = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  let htmlExportProperties = { fileName: 'PivotTable.html', title: 'Sales Analysis Report', includeStyles: true };
  pivotGridObj.exportToHTML(htmlExportProperties);
};
</script>
<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pivotview/index.css';
</style>