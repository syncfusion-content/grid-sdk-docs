import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { Switch } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    height: 273,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2', validationRules: { min: 1, max: 1000 } },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ]
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    change: toggleShowDeleteConfirmDialog,
    checked: false,
});
toggle.appendTo('#switch');

function toggleShowDeleteConfirmDialog() {
    grid.editSettings.showDeleteConfirmDialog = toggle.checked;
}