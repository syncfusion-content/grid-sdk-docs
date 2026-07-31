import { Grid, Filter, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Filter, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Name' },
        { field: 'ShipName', headerText: 'Ship Name' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2' }
    ],
});     
grid.appendTo('#Grid');


let button: Button = new Button(
    { content: 'Filter Customer ID Column', }
  );
  button.appendTo('#performFilter');

  let buttonClear: Button = new Button(
    { content: 'Clear Filter', }
  );
  buttonClear.appendTo('#clearFilter');
  

(document.getElementById('performFilter') as HTMLElement).onclick = function () {
    grid.filterByColumn('CustomerID', 'startswith', 'V');
};

(document.getElementById('clearFilter') as HTMLElement).onclick = function () {
    grid.clearFiltering();
};


