<template>
    <div id="app">
      <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
        <e-columns>
          <e-column field='EmployeeID' headerText='Employee ID' width=120 textAlign='Right' :isPrimaryKey='true' :validationRules='EmployeeIDRules'></e-column>
          <e-column field='Name' headerText='Name' width=160 :validationRules='NameRules'></e-column>
          <e-column field='Department' headerText='Department' width=140 editType='dropdownedit'></e-column>
          <e-column field='Salary' headerText='Salary' width=120 editType='numericedit' format='C0' textAlign='Right' :validationRules='SalaryRules'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', enableUndoRedo: true };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const EmployeeIDRules = { required: true, number: true };
const NameRules = { required: true };
const SalaryRules = { required: true, min: 1000 };
provide('grid', [Edit, Toolbar]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>
