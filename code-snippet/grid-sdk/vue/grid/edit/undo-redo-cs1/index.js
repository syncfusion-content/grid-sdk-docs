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
      <e-column field='TaskID' headerText='Task ID' textAlign='Right' :isPrimaryKey='true' :validationRules='taskIDRules' width=100></e-column>
      <e-column field='Title' headerText='Title' width=180 :validationRules='requiredRules'></e-column>
      <e-column field='Assignee' headerText='Assignee' width=120 :validationRules='requiredRules'></e-column>
      <e-column field='Status' headerText='Status' editType='dropdownedit' width=120></e-column>
    </e-columns>
  </ejs-grid>
</div>
`,
  data() {
    return {
      data: data,
      taskIDRules: { required: true, number: true },
      requiredRules: { required: true },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo']
    };
  },
  provide: {
    grid: [Edit, Toolbar]
  }
});
