ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', enableUndoRedo: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true } },
        { field: 'Name', headerText: 'Name', width: 160, validationRules: { required: true } },
        { field: 'Department', headerText: 'Department', width: 140, editType: 'dropdownedit' },
        { field: 'Salary', headerText: 'Salary', width: 120, editType: 'numericedit', format: 'C0', textAlign: 'Right', validationRules: { required: true, min: 1000 } }
    ],
    height: 273
});
grid.appendTo('#Grid');
