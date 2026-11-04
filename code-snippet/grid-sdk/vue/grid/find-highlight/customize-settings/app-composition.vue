<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' :findSettings='findSettings' height='272px' :toolbar='toolbarOptions' :allowPaging='true' :pageSettings='pageSettings'>
      <e-columns>
        <e-column field='TicketID' headerText='Ticket ID' textAlign='Right' width=90></e-column>
        <e-column field='Customer' headerText='Customer' textAlign='Left' width=120></e-column>
        <e-column field='Subject' headerText='Subject' textAlign='Left' width=200></e-column>
        <e-column field='Status' headerText='Status' textAlign='Left' width=100></e-column>
        <e-column field='Priority' headerText='Priority' textAlign='Left' width=90></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Find, Toolbar, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
const findSettings = { caseSensitive: true, currentPageOnly: true };
const toolbarOptions = ['Find'];
const pageSettings = { pageSize: 8 };
provide('grid', [Find, Toolbar, Page]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>
