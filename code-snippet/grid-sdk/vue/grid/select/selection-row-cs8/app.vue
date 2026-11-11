<template>
  <div id="app">
    <div style="padding: 20px 0px 0px 0px">
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource='data' :selectedRowIndex=0 allowPaging=true
      :isRowNonDeselectable='isRowNonDeselectable' :selectionSettings='selectionOptions' :pageSettings='pageOptions'>
        <e-columns>
          <e-column type='checkbox' width=50></e-column>
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
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, CheckBoxSelection } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      selectionOptions: {
        mode: "Row",
        type: "Multiple"
      },
      pageOptions: { pageSize: 5 },
      isRowNonDeselectable: function (data) {
        if (data.ShipCountry === "France") {
          return true;
        }
        return false;
      }
    };
  },
  provide: {
    grid: [Page, Selection, CheckBoxSelection]
  },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>
