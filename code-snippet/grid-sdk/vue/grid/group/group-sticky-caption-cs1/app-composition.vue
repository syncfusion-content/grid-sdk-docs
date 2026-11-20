<template>
  <div id="app">
    <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupSettings' height='400px'>
      <e-columns>
        <e-column field='accountId' headerText='Account ID' width=140></e-column>
        <e-column field='fullName' headerText='Full Name' width=150></e-column>
        <e-column field='state' headerText='State' width=130></e-column>
        <e-column field='portfolioType' headerText='Portfolio Type' width=140></e-column>
        <e-column field='balanceUsd' headerText='Balance (USD)' textAlign='Right' width=140></e-column>
        <e-column field='ytdReturnPct' headerText='YTD Return %' textAlign='Right' width=130></e-column>
        <e-column field='riskLevel' headerText='Risk Level' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

const groupSettings = { columns: ['state', 'portfolioType'], defaultExpanded: 1, enableSticky: true };
provide('grid', [Group]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>