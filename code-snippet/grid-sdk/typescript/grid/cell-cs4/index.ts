import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width:130 },
        { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right', width: 80 }
    ],
    dataBound:() => {
        let header = grid.getHeaderContent().querySelector('.e-headercell');
        (header as HTMLElement).style.backgroundColor = 'red';
        (header as HTMLElement).style.color = 'white';
        let cell = grid.getCellFromIndex(1, 2);
        (cell as HTMLElement).style.background = '#f9920b';
        (cell as HTMLElement).style.color = 'white';
    },
    height: 315
});
grid.appendTo('#Grid');