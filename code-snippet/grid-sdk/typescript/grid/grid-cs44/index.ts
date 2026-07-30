import { Grid, Edit, Toolbar} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true }, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', defaultValue: 'HANAR', validationRules: { required: true, minLength: 3 },  width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', validationRules: {required: true, min: 1, max:1000 }, width: 120, defaultValue: '1', format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', defaultValue: 'France', width: 150 }
    ],
    height: 273
});
grid.appendTo('#Grid');
