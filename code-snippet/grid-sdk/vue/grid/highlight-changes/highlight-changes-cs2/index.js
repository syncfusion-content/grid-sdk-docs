import Vue from "vue";
import { GridPlugin, Highlight } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
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
`,
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
      const grid = this.$refs.grid.$el.ej2_instances[0];
      grid.highlightSettings.color = this.color;
      grid.highlightSettings.flashDuration = Number(this.flash);
      grid.highlightSettings.fadeDuration = Number(this.fade);
    },
    updatePrices: function () {
      const grid = this.$refs.grid.$el.ej2_instances[0];
      const symbols = ['AAPL', 'NVDA', 'TSLA'];
      symbols.forEach((symbol) => {
          grid.setCellValue(symbol, 'Price', +(100 + Math.random() * 150).toFixed(2));
      });
    },
  }
});
