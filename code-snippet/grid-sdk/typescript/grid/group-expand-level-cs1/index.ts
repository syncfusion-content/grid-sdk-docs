import { Grid, Group } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { columns: ['ShipCountry', 'ShipCity'], defaultExpanded: 1 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 160 },
        { field: 'ShipCity', headerText: 'Ship City', width: 140 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 }
    ],
    height: 400
});
grid.appendTo('#Grid');