
import Vue from "vue";
import { PivotViewPlugin, FlatLayout } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :width="width" :gridSettings="gridSettings" :flatSettings="flatSettings"></ejs-pivotview>
    </div>
`,

  data() {
    return {
      dataSourceSettings: { dataSource: pivotData },
      gridSettings: { layout: 'Flat' },
      flatSettings: {
    columns: [
    { field: 'Country', headerText: 'Country', width: 140 },
    { field: 'Products', headerText: 'Products', width: 160 },
    { field: 'Year', headerText: 'Year', width: 120 },
    { field: 'Sold', headerText: 'Units Sold', width: 120 },
    { field: 'Amount', headerText: 'Sold Amount', width: 140 }
],
    allowSorting: true,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageSize: 10 }
},
      height: '450px',
      width: '100%'
    }
  },
  provide: {
    pivotview: [FlatLayout]
  }

});