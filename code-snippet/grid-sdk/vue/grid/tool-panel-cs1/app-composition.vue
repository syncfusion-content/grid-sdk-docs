<template>
  <div id="app">
    <ejs-grid :dataSource='data' height='320px' :allowFiltering='true' :allowReordering='true' :enableToolPanel='true'
      :toolPanelSettings='toolPanelSettings' :columnChooserSettings='columnChooserSettings'>
      <e-columns>
        <e-column field='MovieID' headerText='Movie ID' width='110' textAlign="Right"></e-column>
        <e-column field='Title' headerText='Title' width='140'></e-column>
        <e-column field='Genre' headerText='Genre' width='140'></e-column>
        <e-column field='Year' headerText='Year' width='140' textAlign="Right"></e-column>
        <e-column field='Rating' headerText='Rating' width='140' textAlign="Right"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, Reorder, ColumnChooser, SideBar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

const toolPanelSettings = {
  position: 'Left',
  isOpen: true,
  defaultToolPanel: 'columns',
  toolPanels: [
    { id: 'columns', type: 'Columns', headerText: 'Columns' },
    { id: 'filters', type: 'Filters', headerText: 'Filters' }
  ]
};
const columnChooserSettings = { allowReordering: true };
provide('grid', [Filter, Reorder, ColumnChooser, SideBar]);
</script>
