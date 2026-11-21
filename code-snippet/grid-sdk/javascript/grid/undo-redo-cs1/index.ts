import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', enableUndoRedo: true, undoRedoLimit: 10 },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 140, validationRules: { required: true, minLength: 3 } },
        { field: 'Freight', headerText: 'Freight', width: 120, editType: 'numericedit', format: 'C2', textAlign: 'Right', validationRules: { required: true, min: 1, max: 1000 } },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit' }
    ],
    height: 273
});
grid.appendTo('#Grid');
