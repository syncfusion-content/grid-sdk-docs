import { Grid, Edit, Toolbar, EditEventArgs } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let isAddable = true;
let grid: Grid = new Grid({
  dataSource: data,
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  actionBegin: actionBegin,
  columns: [
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true }, width: 100 },
    { field: 'EmployeeName', headerText: 'Employee Name', validationRules: { required: true }, width: 120 },
    { field: 'Role', headerText: 'Role', validationRules: { required: true }, width: 120 },
    { field: 'EmployeeCountry', headerText: 'Employee Country', editType: 'dropdownedit', width: 150 }
  ]
});
grid.appendTo('#Grid');

function actionBegin(args: EditEventArgs) {
  if ((args.requestType == 'beginEdit') && (args.rowData as { Role: string}['Role'] == 'Admin')) {
    args.cancel = true;
  }
  else if ((args.requestType == 'delete') && ((args as any).data[0]['Role'] == 'Admin')) {
    args.cancel = true;
  }
  else if ((args.requestType == 'add') && (!isAddable)) {
    args.cancel = true;
  }
}

let button: Button = new Button(
  { content: 'Grid is Addable', }
);
button.appendTo('#Add');

(<HTMLElement>document.getElementById('Add')).onclick = () => {
  button.content == 'Grid is Addable' ? (button.content = 'Grid is Not Addable') : (button.content = 'Grid is Addable');
  isAddable = !isAddable;
};