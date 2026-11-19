import Vue from "vue";
import { GridPlugin, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupSettings' height='400px'>
      <e-columns>
        <e-column field='ProductID' headerText='Product ID' textAlign='Right' width=120></e-column>
        <e-column field='ProductName' headerText='Product Name' width=150></e-column>
        <e-column field='Category' headerText='Category' width=140></e-column>
        <e-column field='Region' headerText='Region' width=130></e-column>
        <e-column field='UnitPrice' headerText='Unit Price' textAlign='Right' width=120></e-column>
        <e-column field='UnitsInStock' headerText='Units In Stock' textAlign='Right' width=140></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,
  data() {
    return { data: data, groupSettings: { columns: ['Category', 'Region'], isGroupOpenByDefault: (args) => args.level === 1 && args.key === 'Beverages' } };
  },
  provide: { grid: [Group] }
});
