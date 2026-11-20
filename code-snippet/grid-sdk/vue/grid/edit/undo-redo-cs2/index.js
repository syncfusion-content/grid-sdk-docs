import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
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
`,
  data() {
    return {
      data: data,
      EmployeeIDRules: { required: true, number: true },
      NameRules: { required: true },
      SalaryRules: { required: true, min: 1000 },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', enableUndoRedo: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  provide: {
    grid: [Edit, Toolbar]
  }
});
