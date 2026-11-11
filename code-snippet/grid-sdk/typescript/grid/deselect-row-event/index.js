import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource';

Grid.Inject(Page, Selection);

let grid;

const gridElement = document.getElementById('Grid');
grid = new Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageSize: 5 },
    selectionSettings: { type: 'Multiple', mode: 'Row' },
    rowDeselecting: onRowDeselecting,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2' }
    ]
});

grid.appendTo('#Grid');

function onRowDeselecting(args) {
    // Prevent deselection of rows with Freight > 50
    if (args.data && args.data['Freight'] > 50) {
        args.cancel = true;
    }
}

const button = new Button({ cssClass: 'e-outline' }, '#button');
button.element.onclick = () => {
    grid.selectionModule.deselectRows([0, 1, 2, 3, 4]);
};
