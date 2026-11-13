<template>
  <div id="app">
    <div class="controls">
      <button class="e-btn" @click="flashRows">Flash selected row</button>
      <button class="e-btn" @click="flashColumn">Flash Exposure column</button>
      <button class="e-btn" @click="flashCells">Flash cells</button>
    </div>
    <ejs-grid ref='grid' id="Grid" :dataSource='data' height='300' :enableHighlightOnDataChange='true'>
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
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Highlight } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: data,
    };
  },
  provide: {
    grid: [Highlight]
  },
  methods: {
    flashRows: function () {
      const grid = this.$refs.grid.ej2Instances;
      const rows = grid.getSelectedRowIndexes();
      if (rows.length) {
          grid.flashCells({ rowNodes: rows });
      }
    },
    flashColumn: function () {
      const grid = this.$refs.grid.ej2Instances;
      grid.flashCells({ columns: ['Exposure'] });
    },
    flashCells: function () {
      const grid = this.$refs.grid.ej2Instances;
      grid.flashCells({ rowNodes: [0, 2], columns: ['Rating', 'Exposure'] });
    },
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/button/index.css";
.controls { padding: 10px 0; }
.controls label { margin-right: 12px; }
</style>