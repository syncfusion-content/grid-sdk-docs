import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'],
    columns: [
        { field: 'ProductID', headerText: 'Product ID', validationRules: { required: true, number: true }, textAlign: 'Right', isPrimaryKey: true, width: 120 },
        { field: 'ProductName', headerText: 'Product Name', validationRules: { required: true }, width: 160 },
        { field: 'Category', headerText: 'Category', editType: 'dropdownedit', validationRules: { required: true }, width: 140 },
        { field: 'UnitPrice', headerText: 'Unit Price', textAlign: 'Right', editType: 'numericedit', format: 'C2', validationRules: { required: true, min: 1 }, width: 120 }
    ],
    height: 273
});
grid.appendTo('#Grid');
