import { Grid, Reorder, Column } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Reorder);

let grid: Grid = new Grid({
 dataSource: data,
 allowReordering: true,
 columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
    { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
    { field: 'Freight', headerText: 'Freight', format: 'C2', width: 120, textAlign: 'Right' },
    {
      headerText: 'Order Details',
      textAlign:'Center', 
      columns: [
        { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 150 },
        { field: 'EmployeeID', headerText: 'Employee ID', width: 150, textAlign: 'Right' },
      ],
    },
    {
      headerText: 'Ship Details',
      textAlign:'Center', 
      columns: [
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
      ],
    },
  ],
});

grid.appendTo('#Grid');

// Reorder a stacked header column before a normal column.
let reorderColumn: Button = new Button({ cssClass: 'e-info' }, '#reorderColumn');
(document.getElementById('reorderColumn') as HTMLElement).onclick = function () {
  grid.reorderColumnByModel(grid.columns[3] as Column, grid.columns[1] as Column);
};

// Reorder a child column within a stacked header column.
let reorderChildColumn: Button = new Button({ cssClass: 'e-info' }, '#reorderChildColumn');
(document.getElementById('reorderChildColumn') as HTMLElement).onclick = function () {
  let shipInfo = grid.columns[4] as Column;
  grid.reorderColumnByModel(shipInfo.columns[1] as Column, shipInfo.columns[0] as Column);
};
