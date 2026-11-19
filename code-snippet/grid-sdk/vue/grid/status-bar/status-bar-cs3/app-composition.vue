<template>
  <div id="app">
    <ejs-grid :dataSource="data" :allowFiltering="true" :filterSettings="filterSettings"
      :allowSorting="true" :allowSelection="true" :selectionSettings="selectionSettings"
      :enableStatusBar="true" :statusBarSettings="statusBarSettings" height="320px">
      <e-columns>
        <e-column field="ProductID" headerText="Product ID" width="120" textAlign="Right" :isPrimaryKey="true"></e-column>
        <e-column field="ProductName" headerText="Product Name" width="160"></e-column>
        <e-column field="Category" headerText="Category" width="140"></e-column>
        <e-column field="PurchasePrice" headerText="Purchase Price" width="140" format="C2" textAlign="Right"></e-column>
        <e-column field="SellingPrice" headerText="Selling Price" width="140" format="C2" textAlign="Right"></e-column>
        <e-column field="AvailableStock" headerText="Available Stock" width="150" textAlign="Right"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import {
  GridComponent as EjsGrid,
  ColumnDirective as EColumn,
  ColumnsDirective as EColumns,
  Filter,
  Selection,
  Sort,
  StatusBar
} from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

const filterSettings = { type: "Excel" };
const selectionSettings = { mode: "Row", type: "Multiple" };
const statusBarValueFormatter = (params) => params.value.toLocaleString();
const statusBarSettings = {
  items: [
    {
      key: "totalRows",
      type: "TotalRowCount",
      position: "Left",
      statusPanelParams: { valueFormatter: statusBarValueFormatter }
    },
    { key: "selectedCount", type: "SelectedRowCount", position: "Center" }
  ]
};

provide("grid", [Filter, Selection, Sort, StatusBar]);
</script>
