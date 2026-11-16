import { Switch, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { Grid, Group } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { columns: ['ShipCountry'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', format: 'C2', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    change: change,
    checked: true
});
toggle.appendTo('#switch');

function change(args: ){
    if (!args.checked) {
        grid.allowTextSelection = false;
    } else {
        grid.allowTextSelection = true;
    }
}
