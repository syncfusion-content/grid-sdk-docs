<template>
  <div id="app">
    <div class="controls">
      <button class="e-btn" @click="flashRows">Flash selected row</button>
      <button class="e-btn" @click="flashColumn">Flash Exposure column</button>
      <button class="e-btn" @click="flashCells">Flash cells</button>
    </div>
    <ejs-grid ref='grid_' id="Grid" :dataSource='data' height='300' :enableHighlightOnDataChange='true'>
      <e-columns>
        <e-column field='Account' headerText='Account' width='110' :isPrimaryKey='true'></e-column>
        <e-column field='Desk' headerText='Desk' width='150'></e-column>
        <e-column field='Rating' headerText='Rating' width='100'></e-column>
        <e-column field='Exposure' headerText='Exposure' width='140' format='C0' textAlign="Right"></e-column>
        <e-column field='Risk' headerText='Risk level' width='110'></e-column>
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
const flashRows = function () {
  const grid = grid_.value;
  const rows = grid.getSelectedRowIndexes();
  if (rows.length) {
      grid.flashCells({ rowNodes: rows });
  }
};
const flashColumn = function () {
  const grid = grid_.value;
  grid.flashCells({ columns: ['Exposure'] });
};
const flashCells = function () {
  const grid = grid_.value;
  grid.flashCells({ rowNodes: [0, 2], columns: ['Rating', 'Exposure'] });
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/button/index.css";
.controls { padding: 10px 0; }
.controls label { margin-right: 12px; }
</style>