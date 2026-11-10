<template>
  <div id="app">
    <ejs-grid :dataSource="data" :enableDomVirtualization="true" height="400px" :setRowHeight="setRowHeight">
      <e-columns>
        <e-column field="issueId" headerText="Issue ID" width="130" textAlign="Left"></e-column>
        <e-column field="title" headerText="Title" width="260" textAlign="Left"></e-column>
        <e-column field="priority" headerText="Priority" width="100" textAlign="Center"></e-column>
        <e-column field="status" headerText="Status" width="110" textAlign="Center"></e-column>
        <e-column field="reporter" headerText="Reported By" width="150" textAlign="Left"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { DomVirtualization, GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-grids";
import { issueData } from "./datasource.js";

function setRowHeight(row) {
  if (row.data.priority === 'Critical') {
    return 60;
  } else if (row.data.priority === 'High') {
    return 50;
  }
  return 36;
}

const data = issueData;
provide("grid", [DomVirtualization]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>