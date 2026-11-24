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
          <e-column field='OrderID' headerText='Order ID' width=120 textAlign='Right' :isPrimaryKey='true' :validationRules='OrderIDRules'></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=140 :validationRules='CustomerIDRules'></e-column>
          <e-column field='Freight' headerText='Freight' width=120 editType='numericedit' format='C2' textAlign='Right' :validationRules='FreightRules'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=150 editType='dropdownedit'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,
  data() {
    return {
      data: data,
      OrderIDRules: { required: true, number: true },
      CustomerIDRules: { required: true, minLength: 3 },
      FreightRules: { required: true, min: 1, max: 1000 },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', enableUndoRedo: true, undoRedoLimit: 10 },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo']
    };
  },
  provide: {
    grid: [Edit, Toolbar]
  }
});
