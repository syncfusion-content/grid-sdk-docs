import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true }, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true, minLength: 5 }, width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 1, max: 1000 }, width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 273
});
grid.appendTo('#Grid');

let button = new Button({
    content: 'Delete Multiple',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
    let selectedRows: Element[] = grid.getSelectedRows();
    selectedRows.forEach((row:Element) => {
        grid.deleteRow(row as HTMLTableRowElement);
    });
};
