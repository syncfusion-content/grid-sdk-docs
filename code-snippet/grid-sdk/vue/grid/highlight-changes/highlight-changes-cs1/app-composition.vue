<template>
  <div id="app">
    <div class="controls">
      <button class="e-btn" @click="updatePrices">Update prices</button>
    </div>
    <ejs-grid ref='grid_' id="Grid" :dataSource='data' height='300' :enableHighlightOnDataChange='true'>
      <e-columns>
        <e-column field='Symbol' headerText='Symbol' width='110' :isPrimaryKey='true'></e-column>
        <e-column field='Company' headerText='Company' width='180'></e-column>
        <e-column field='Price' headerText='Price' width='120' format='C2' textAlign="Right"></e-column>
        <e-column field='Volume' headerText='Volume' width='140' format='N0' textAlign="Right"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Highlight } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

provide('grid', [Highlight]);
const grid_ = ref(null);
const updatePrices = function () {
  const grid = grid_.value;
  const symbols = ['AAPL', 'NVDA', 'TSLA'];
  symbols.forEach((symbol) => {
      grid.setCellValue(symbol, 'Price', +(100 + Math.random() * 150).toFixed(2));
  });
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/button/index.css";
.controls { padding: 10px 0; }
.controls label { margin-right: 12px; }
</style>