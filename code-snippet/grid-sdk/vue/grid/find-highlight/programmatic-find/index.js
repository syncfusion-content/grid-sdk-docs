import Vue from "vue";
import { GridPlugin, Find  } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js'
Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <div style="padding-bottom: 20px">
          <input type="text" class="e-input" placeholder="Enter text to find" style="width: 220px; display: inline-block" v-model="findText" />
          <ejs-button style="margin-left: 10px" :disabled="!findText.trim()" v-on:click.native="find">Find</ejs-button>
          <ejs-button style="margin-left: 10px" :disabled="!findText.trim()" v-on:click.native="findNext">Next</ejs-button>
          <ejs-button style="margin-left: 10px" :disabled="!findText.trim()" v-on:click.native="findPrevious">Previous</ejs-button>
          <ejs-button style="margin-left: 10px" :disabled="!findText.trim()" v-on:click.native="clearFind">Clear</ejs-button>
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
`,
  data() {
    return {
      data: data,
      findText: '',
    };
  },
  methods: {
    find: function () {
      this.$refs.grid.find(this.findText);
    },
    findNext: function () {
      this.$refs.grid.findNext();
    },
    findPrevious: function () {
      this.$refs.grid.findPrevious();
    },
    clearFind: function () {
      this.$refs.grid.clearFind();
      this.findText = '';
    }
  },
  provide: {
    grid: [Find]
  }
});
