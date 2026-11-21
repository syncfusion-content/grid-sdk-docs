<template>
  <div id="app">
    <div style="padding: 20px 0px 0px 0px">
      <ejs-button @click='deselectRows'>Deselect Rows at Index 1, 2, 3</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource='data' allowPaging=true 
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
<script setup>
import { GridComponent, ColumnsDirective, ColumnDirective, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
import { ref } from 'vue';

const grid = ref(null);
const selectionOptions = { mode: "Row", type: "Multiple" };
const pageOptions = { pageSize: 5 };

const deselectRows = () => {
  grid.value.ej2Instances.selectionModule.deselectRows([1, 2, 3]);
};

provide = { grid: [Page] };
</script>
