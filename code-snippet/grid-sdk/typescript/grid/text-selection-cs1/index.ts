import { Switch, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { Grid, Group, Find } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Group, Find);

let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: false,
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
    change: (args: ChangeEventArgs) => {
        grid.allowTextSelection = args.checked as boolean;
    },
    checked: true
});
toggle.appendTo('#switch');
