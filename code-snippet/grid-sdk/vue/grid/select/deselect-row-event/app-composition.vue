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
<script setup>
import { GridComponent, ColumnsDirective, ColumnDirective, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
import { ref } from 'vue';

const grid = ref(null);
const selectionOptions = { mode: "Row", type: "Multiple" };
const pageOptions = { pageSize: 5 };

const onRowDeselecting = (args) => {
  // Prevent deselection of rows with Freight > 50
  if (args.data && args.data.Freight > 50) {
    args.cancel = true;
  }
};

const deselectAllRows = () => {
  grid.value.ej2Instances.selectionModule.deselectRows([0, 1, 2, 3, 4]);
};

provide = { grid: [Page] };
</script>
