import { Grid, Toolbar, Edit,ClickEventArgs} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, Edit);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbarClick:clickHandler,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90, isPrimaryKey:true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 270
});
grid.appendTo('#Grid');

let message = document.getElementById('message');

function clickHandler(args:ClickEventArgs)
{
    if (args.item.id === 'Grid_add') { // 'Grid_add' -> Grid component id + _ + toolbar item name
        args.cancel = true;
        const newRecord = {
            OrderID: 10247,
            CustomerID: 'TOMSP',
            ShipName: 'Hanari Carnes',
            ShipCity: 'Lyon',
        };
        grid.addRecord(newRecord);
        (message as HTMLElement).textContent= 'The default adding action is cancelled, and a new record is added using the addRecord method.';
    }
    else
    (message as HTMLElement).textContent = ''
}