import Vue from "vue";
import { GridPlugin, Find, Toolbar } from "@syncfusion/ej2-vue-grids";

import { data } from './datasource.js'
Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid ref="grid" :dataSource='data' height='272px' :toolbar='toolbarOptions'>
            <e-columns>
              <e-column field='TicketID' headerText='Ticket ID' textAlign='Right' width=90></e-column>
              <e-column field='Customer' headerText='Customer' textAlign='Left' width=120></e-column>
              <e-column field='Subject' headerText='Subject' textAlign='Left' width=200></e-column>
              <e-column field='Status' headerText='Status' textAlign='Left' width=100></e-column>
              <e-column field='Priority' headerText='Priority' textAlign='Left' width=90></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,
  data() {
    return {
      data: data,
      toolbarOptions: ['Find'],
    };
  },
  provide: {
    grid: [Find, Toolbar]
  }
});
