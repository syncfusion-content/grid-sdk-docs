import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'],
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', validationRules: { required: true, number: true }, textAlign: 'Right', isPrimaryKey: true, width: 120 },
        { field: 'Name', headerText: 'Name', validationRules: { required: true }, width: 150 },
        { field: 'Department', headerText: 'Department', editType: 'dropdownedit', validationRules: { required: true }, width: 140 },
        { field: 'Salary', headerText: 'Salary', textAlign: 'Right', editType: 'numericedit', format: 'C0', validationRules: { required: true, min: 1 }, width: 120 }
    ],
    height: 273
});
grid.appendTo('#Grid');
