import Vue from "vue";
import { GridPlugin, Highlight } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
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
`,
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
      const grid = this.$refs.grid.$el.ej2_instances[0];
      const symbols = ['AAPL', 'NVDA', 'TSLA'];
      symbols.forEach((symbol) => {
          grid.setCellValue(symbol, 'Price', +(100 + Math.random() * 150).toFixed(2));
      });
    },
  }
});
