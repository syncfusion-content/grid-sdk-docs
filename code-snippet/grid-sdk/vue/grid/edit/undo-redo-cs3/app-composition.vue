<template>
    <div id="app">
      <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
        <e-columns>
          <e-column field='ProductID' headerText='Product ID' width=120 textAlign='Right' :isPrimaryKey='true' :validationRules='ProductIDRules'></e-column>
          <e-column field='ProductName' headerText='Product Name' width=170 :validationRules='ProductNameRules'></e-column>
          <e-column field='Category' headerText='Category' width=140 editType='dropdownedit'></e-column>
          <e-column field='UnitPrice' headerText='Unit Price' width=120 editType='numericedit' format='C2' textAlign='Right' :validationRules='UnitPriceRules'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true, enableBatchUndoRedo: true };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'];
const ProductIDRules = { required: true, number: true };
const ProductNameRules = { required: true };
const UnitPriceRules = { required: true, min: 1 };
provide('grid', [Edit, Toolbar]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>
