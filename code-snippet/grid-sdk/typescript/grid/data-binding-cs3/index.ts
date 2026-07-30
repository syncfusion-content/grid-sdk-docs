import { Grid, Page } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Page);

let count = 0;
let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  pageSettings: { pageSize: 5, pageCount: 3 },
  columns: [
    { field: 'OrderID', headerText: 'OrderID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 120 },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 }
  ],
});
grid.appendTo('#Grid');

let newColumn: object[] = [
  { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 125 },
  { field: 'CustomerName', headerText: 'Customer Name', width: 125 },
  { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right'},
  { field: 'Freight', headerText: 'Freight', width: 120, textAlign: 'Right'},
];

let button: Button = new Button();
button.appendTo('#changebutton');

(document.getElementById('changebutton')as HTMLElement).addEventListener('click', function () {
  count = count + 100;
  grid.changeDataSource(data.slice(0, count + 100), newColumn as Object[]);
});