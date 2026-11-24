import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true, enableBatchUndoRedo: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'],
    columns: [
        { field: 'ProductID', headerText: 'Product ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true } },
        { field: 'ProductName', headerText: 'Product Name', width: 170, validationRules: { required: true } },
        { field: 'Category', headerText: 'Category', width: 140, editType: 'dropdownedit' },
        { field: 'UnitPrice', headerText: 'Unit Price', width: 120, editType: 'numericedit', format: 'C2', textAlign: 'Right', validationRules: { required: true, min: 1 } }
    ],
    height: 273
});
grid.appendTo('#Grid');
