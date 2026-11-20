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
          <e-column field='ProductID' headerText='Product ID' width=120 textAlign='Right' :isPrimaryKey='true' :validationRules='ProductIDRules'></e-column>
          <e-column field='ProductName' headerText='Product Name' width=170 :validationRules='ProductNameRules'></e-column>
          <e-column field='Category' headerText='Category' width=140 editType='dropdownedit'></e-column>
          <e-column field='UnitPrice' headerText='Unit Price' width=120 editType='numericedit' format='C2' textAlign='Right' :validationRules='UnitPriceRules'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,
  data() {
    return {
      data: data,
      ProductIDRules: { required: true, number: true },
      ProductNameRules: { required: true },
      UnitPriceRules: { required: true, min: 1 },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true, enableBatchUndoRedo: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo']
    };
  },
  provide: {
    grid: [Edit, Toolbar]
  }
});
