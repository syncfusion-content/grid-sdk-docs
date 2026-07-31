import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', customAttributes: {class: 'custom-css'}, textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'ShipCity', customAttributes: {class: 'custom-css'}, width:130 },
        { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right', width: 80 }
    ],
    height: 315
});
grid.appendTo('#Grid');