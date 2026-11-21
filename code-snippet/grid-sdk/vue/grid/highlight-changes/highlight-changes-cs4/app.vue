<template>
  <div id="app">
    <div class="controls">
      <button class="e-btn" @click="updatePrices">Update prices</button>
    </div>
    <ejs-grid ref='grid' id="Grid" :dataSource='data' height='300' :enableHighlightOnDataChange='true'>
      <e-columns>
        <e-column field='Symbol' headerText='Symbol' width='110' :isPrimaryKey='true'></e-column>
        <e-column field='Company' headerText='Company' width='180'></e-column>
        <e-column field='Price' headerText='Price' width='120' format='C2' textAlign="Right"></e-column>
        <e-column field='Volume' headerText='Volume' width='140' format='N0' textAlign="Right"></e-column>
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
    updatePrices: function () {
      const grid = this.$refs.grid.ej2Instances;
      const symbols = ['AAPL', 'NVDA', 'TSLA'];
      symbols.forEach((symbol) => {
          grid.setCellValue(symbol, 'Price', +(100 + Math.random() * 150).toFixed(2));
      });
    },
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/button/index.css";
.controls { padding: 10px 0; }
.controls label { margin-right: 12px; }
#Grid {
    --e-grid-change-highlight-color: #0b6e4f;
    --e-grid-highlight-flash-duration: 800ms;
    --e-grid-highlight-fade-duration: 1500ms;
}

#Grid td.e-grid-cell-changed {
    font-weight: 600;
}
</style>