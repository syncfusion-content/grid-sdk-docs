import Vue from "vue";
import { GridPlugin, ColumnChooser, SideBar } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

new Vue({
  el: "#app",
  template: `
    <div id="app">
      <ejs-grid :dataSource="data" height="320px" :enableToolPanel="true" :toolPanelSettings="toolPanelSettings">
        <e-columns>
          <e-column field="ProductID" headerText="Product ID" width="140" textAlign="Right"></e-column>
          <e-column field="ProductName" headerText="Product Name" width="140"></e-column>
          <e-column field="Category" headerText="Category" width="140"></e-column>
          <e-column field="UnitPrice" headerText="Unit Price" width="140" textAlign="Right" format="C2"></e-column>
          <e-column field="UnitsInStock" headerText="Units In Stock" width="140" textAlign="Right"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  `,
  data() {
    return {
      data: data,
      toolPanelSettings: {
        position: "Left",
        width: 300,
        toolPanels: [
          "Columns",
          {
            type: "Custom",
            template: "#customPanelTemplate"
          }
        ]
      }
    };
  },
  provide: {
    grid: [ColumnChooser, SideBar]
  }
});
