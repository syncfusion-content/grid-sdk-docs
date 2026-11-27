import Vue from "vue";
import { GridPlugin, Edit, Selection, ColumnChooser, SideBar } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

new Vue({
  el: "#app",
  template: `
    <div id="app">
      <ejs-grid :dataSource="data" height="320px" :enableToolPanel="true" :toolPanelSettings="toolPanelSettings"
        :editSettings="editSettings" :selectionSettings="selectionSettings">
        <e-columns>
          <e-column field="EmployeeID" headerText="Employee ID" width="140" textAlign="Right" :isPrimaryKey="true"></e-column>
          <e-column field="Name" headerText="Name" width="140"></e-column>
          <e-column field="Title" headerText="Title" width="140"></e-column>
          <e-column field="Country" headerText="Country" width="140"></e-column>
          <e-column field="Salary" headerText="Salary" width="140" textAlign="Right" format="C0"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  `,
  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, mode: "Normal" },
      selectionSettings: { type: "Multiple" },
      toolPanelSettings: {
        position: "Right",
        width: 300,
        toolPanels: [
          "Edit",
          "Columns"
        ]
      }
    };
  },
  provide: {
    grid: [Edit, Selection, ColumnChooser, SideBar]
  }
});
