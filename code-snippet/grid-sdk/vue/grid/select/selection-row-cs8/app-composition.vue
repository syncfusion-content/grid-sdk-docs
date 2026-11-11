<template>
  <div id="app">
    <div style="padding: 20px 0px 0px 0px">
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource='data' :selectedRowIndex=0 allowPaging=true
      :isRowNonDeselectable='isRowNonDeselectable' :selectionSettings='selectionOptions' :pageSettings='pageOptions'>
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
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Selection } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
import { ref } from "vue";
const grid = ref(null);
const selectionOptions = {
  type: "Multiple",
  mode: "Row"
};
const pageOptions = { pageSize: 5 };
const isRowNonDeselectable = function (data) {
  if (data.ShipCountry === "France") {
    return true;
  }
  return false;
};
provide('grid',  [Page, Selection]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>
