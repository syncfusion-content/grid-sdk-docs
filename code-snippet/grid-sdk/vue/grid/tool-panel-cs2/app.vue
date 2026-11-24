<template>
  <div id="app">
    <ejs-grid :dataSource='data' height='320px' :enableToolPanel='true' :toolPanelSettings='toolPanelSettings' :editSettings='editSettings' :selectionSettings='selectionSettings'>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' width='140' textAlign='Right' :isPrimaryKey='true'></e-column>
        <e-column field='Name' headerText='Name' width='140'></e-column>
        <e-column field='Title' headerText='Title' width='140'></e-column>
        <e-column field='Country' headerText='Country' width='140'></e-column>
        <e-column field='Salary' headerText='Salary' width='140' textAlign='Right' format='C0'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Selection, ColumnChooser, SideBar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

export default {
  name: "App",
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },
  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, mode: 'Normal' },
selectionSettings: { type: 'Multiple' },
toolPanelSettings: {
          position: 'Right',
          isOpen: true,
          toolPanels: [
              'Edit',
              'Columns'
          ]
      }
    };
  },
  provide: {
    grid: [Edit, Selection, ColumnChooser, SideBar]
  }
}
</script>
