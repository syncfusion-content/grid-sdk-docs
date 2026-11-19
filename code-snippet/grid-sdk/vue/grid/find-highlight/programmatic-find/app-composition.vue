<template>
  <div id="app">
    <div style="padding-bottom: 20px">
      <input type="text" class="e-input" placeholder="Enter text to find" style="width: 220px; display: inline-block" v-model="findText" />
      <ejs-button style="margin-left: 10px" :disabled="!findText.trim()" @click="find">Find</ejs-button>
      <ejs-button style="margin-left: 10px" :disabled="!findText.trim()" @click="findNext">Next</ejs-button>
      <ejs-button style="margin-left: 10px" :disabled="!findText.trim()" @click="findPrevious">Previous</ejs-button>
      <ejs-button style="margin-left: 10px" :disabled="!findText.trim()" @click="clearFind">Clear</ejs-button>
    </div>
    <ejs-grid ref="grid" :dataSource='data' height='272px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' textAlign='Left' width=110></e-column>
        <e-column field='ShipCity' headerText='Ship City' textAlign='Left' width=120></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' textAlign='Left' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' width=90 format="C2"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Find } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js'

const grid = ref(null);
const findText = ref('');
const find = function () {
  grid.value.find(findText.value);
};
const findNext = function () {
  grid.value.findNext();
};
const findPrevious = function () {
  grid.value.findPrevious();
};
const clearFind = function () {
  grid.value.clearFind();
  findText.value = '';
};
provide('grid', [Find]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>
