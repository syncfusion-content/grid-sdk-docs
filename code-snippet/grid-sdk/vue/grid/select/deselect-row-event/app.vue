<template>
  <div id="app">
    <div style="padding: 20px 0px 0px 0px">
      <ejs-button @click='deselectAllRows'>Deselect All Rows</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource='data' allowPaging=true 
      :selectionSettings='selectionOptions' :pageSettings='pageOptions' @rowDeselecting='onRowDeselecting'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right'
          width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120>
          </e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=130>
          </e-column>
          <e-column field='Freight' headerText='Freight' format= 'C2' 
          width=100></e-column>
        </e-columns>
      </ejs-grid>
      </div>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      selectionOptions: { mode: "Row", type: "Multiple" },
      pageOptions: { pageSize: 5 },
    };
  },
  methods: {
    onRowDeselecting(args) {
      // Prevent deselection of rows with Freight > 50
      if (args.data && args.data.Freight > 50) {
        args.cancel = true;
      }
    },
    deselectAllRows() {
      this.$refs.grid.ej2Instances.selectionModule.deselectRows([0, 1, 2, 3, 4]);
    },
  },
  provide: {
    grid: [Page]
  },
};
</script>
