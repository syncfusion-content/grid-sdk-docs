import Vue from "vue";
import { GridPlugin, Filter, Reorder, ColumnChooser, Group, Aggregate, SideBar } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

new Vue({
  el: "#app",
  template: `
    <div id="app">
      <ejs-grid :dataSource="data" height="320px" :enableToolPanel="true" :toolPanelSettings="toolPanelSettings"
        :allowFiltering="true" :allowGrouping="true" :allowReordering="true" :columnChooserSettings="columnChooserSettings">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" width="140" textAlign="Right"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="140"></e-column>
          <e-column field="ShipCity" headerText="Ship City" width="140"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="140"></e-column>
          <e-column field="Freight" headerText="Freight" width="140" textAlign="Right" format="C2"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  `,
  data() {
    return {
      data: data,
      columnChooserSettings: { allowReordering: true },
      toolPanelSettings: {
        position: "Right",
        width: 300,
        toolPanels: [
          "Columns",
          "Filters"
        ]
      }
    };
  },
  provide: {
    grid: [Filter, Reorder, ColumnChooser, Group, Aggregate, SideBar]
  }
});
