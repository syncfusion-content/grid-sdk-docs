<template>
  <div id="app">
    <div style="padding: 20px 0px 0px 0px">
      <ejs-button @click='deselectRow'>Deselect Row at Index 2</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource='data' :selectedRowIndex=1 allowPaging=true 
      :selectionSettings='selectionOptions' :pageSettings='pageOptions'>
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
    deselectRow() {
      this.$refs.grid.ej2Instances.selectionModule.deselectRow(2);
    },
  },
  provide: {
    grid: [Page]
  },
};
</script>
