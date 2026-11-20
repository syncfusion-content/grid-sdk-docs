<template>
  <div id="app">
    <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupSettings' height='400px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerName' headerText='Customer Name' width=160></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=140></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=140></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: data,
      groupSettings: { columns: ['ShipCountry', 'ShipCity'], defaultExpanded: 1 }
    };
  },
  provide: {
    grid: [Group]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>