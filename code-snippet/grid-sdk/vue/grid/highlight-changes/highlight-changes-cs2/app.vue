<template>
  <div id="app">
    <div class="controls">
      <label>Color <input type="color" v-model="color"></label>
      <label>Flash duration (ms) <input type="number" v-model="flash" min="0" step="100"></label>
      <label>Fade duration (ms) <input type="number" v-model="fade" min="0" step="100"></label>
      <button class="e-btn" @click="applySettings">Apply settings</button>
      <button class="e-btn" @click="updatePrices">Update prices</button>
    </div>
    <ejs-grid ref='grid' id="Grid" :dataSource='data' height='300' :enableHighlightOnDataChange='true' :highlightSettings='highlightSettings'>
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
      highlightSettings: { color: '#ffb347', flashDuration: 500, fadeDuration: 1000 },
      color: '#ffb347',
      flash: 500,
      fade: 1000,
    };
  },
  provide: {
    grid: [Highlight]
  },
  methods: {
    applySettings: function () {
      const grid = this.$refs.grid.ej2Instances;
      grid.highlightSettings.color = this.color;
      grid.highlightSettings.flashDuration = Number(this.flash);
      grid.highlightSettings.fadeDuration = Number(this.fade);
    },
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
</style>