import { Grid, Page, ColumnMenu, Sort, Filter, Group} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(ColumnMenu, Page, Sort, Filter, Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true,
    allowGrouping: true,
    showColumnMenu: true,
    filterSettings: { type: 'CheckBox' },
    groupSettings: { showGroupedColumn: true },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90, showColumnMenu: false },
      { field: 'CustomerID', headerText: 'Customer Name', width: 100 },
      { field: 'Freight', headerText: 'Freight', format: 'C2', textAlign: 'Right', width: 80 },
      { field: 'ShipCity', headerText: 'Ship City', width: 100 }
    ]
});
grid.appendTo('#Grid');