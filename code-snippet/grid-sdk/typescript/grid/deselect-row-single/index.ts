import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource';

Grid.Inject(Page, Selection);

let grid: Grid;

const gridElement = document.getElementById('Grid') as HTMLElement;
grid = new Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageSize: 5 },
    selectedRowIndex: 1,
    selectionSettings: { type: 'Multiple', mode: 'Row' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2' }
    ]
});

grid.appendTo('#Grid');

const button = new Button({ cssClass: 'e-outline' }, '#button');
button.element.onclick = () => {
    grid.selectionModule.deselectRow(2);
};
