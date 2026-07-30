ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var isAddable = true;
var grid = new ej.grids.Grid({
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

function actionBegin(args) {
  if ((args.requestType == 'beginEdit') && (args.rowData['Role'] == 'Admin')) {
    args.cancel = true;
  }
  else if ((args.requestType == 'delete') && (args.data[0]['Role'] == 'Admin')) {
    args.cancel = true;
  }
  else if ((args.requestType == 'add') && (!isAddable)) {
    args.cancel = true;
  }
}

var button = new ej.buttons.Button({
  content: 'Grid is Addable',
});
button.appendTo('#Add');

document.getElementById('Add').onclick = () => {
  button.content == 'Grid is Addable' ? (button.content = 'Grid is Not Addable') : (button.content = 'Grid is Addable');
  isAddable = !isAddable;
};