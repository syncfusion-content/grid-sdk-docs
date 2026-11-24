<template>
  <div id="app">
    <ejs-grid :dataSource='data' height='320px' :enableToolPanel='true' :toolPanelSettings='toolPanelSettings' :allowFiltering='true' :allowReordering='true' :columnChooserSettings='columnChooserSettings'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='140'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width='140'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='140'></e-column>
        <e-column field='Freight' headerText='Freight' width='140' textAlign='Right' format='C2'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, Reorder, ColumnChooser, SideBar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

const toolPanelSettings = {
    position: 'Right',
    isOpen: true,
    defaultToolPanel: 'columns',
    toolPanels: [
        {
            id: 'columns',
            type: 'Columns',
            headerText: 'Columns'
        },
        {
            id: 'filters',
            type: 'Filters',
            headerText: 'Filters'
        }
    ]
};
const columnChooserSettings = { allowReordering: true };
provide('grid', [Filter, Reorder, ColumnChooser, SideBar]);
</script>
