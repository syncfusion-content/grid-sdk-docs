<template>
  <div id="app">
    <ejs-grid :dataSource='data' height='320px' :enableToolPanel='true' :toolPanelSettings='toolPanelSettings' :editSettings='editSettings' :selectionSettings='selectionSettings'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right' :isPrimaryKey='true'></e-column>
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Edit, Selection, ColumnChooser, SideBar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

const toolPanelSettings = {
    position: 'Right',
    isOpen: true,
    defaultToolPanel: 'editing',
    toolPanels: [
        {
            id: 'editing',
            type: 'Edit',
            headerText: 'Editing'
        },
        {
            id: 'columns',
            type: 'Columns',
            headerText: 'Columns'
        }
    ]
};
const editSettings = { allowEditing: true, mode: 'Normal' };
const selectionSettings = { type: 'Multiple' };
provide('grid', [Edit, Selection, ColumnChooser, SideBar]);
</script>
