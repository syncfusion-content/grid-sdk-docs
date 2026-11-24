<template>
  <div id="app">
    <ejs-grid :dataSource='data' height='320px' :enableToolPanel='true' :toolPanelSettings='toolPanelSettings'>
      <e-columns>
        <e-column field='ProductID' headerText='Product ID' width='140' textAlign='Right'></e-column>
        <e-column field='ProductName' headerText='Product Name' width='140'></e-column>
        <e-column field='Category' headerText='Category' width='140'></e-column>
        <e-column field='UnitPrice' headerText='Unit Price' width='140' textAlign='Right' format='C2'></e-column>
        <e-column field='UnitsInStock' headerText='Units In Stock' width='140' textAlign='Right'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ColumnChooser, SideBar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

const toolPanelSettings = {
    position: 'Left',
    type: 'Over',
    width: 300,
    isOpen: true,
    toolPanels: [
        'Columns',
        {
            type: 'Custom',
            template: '#customPanelTemplate'
        }
    ]
};
provide('grid', [ColumnChooser, SideBar]);
</script>
