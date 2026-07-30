import { Grid, Page, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DataManager, Query } from '@syncfusion/ej2-data';
Grid.Inject(Page, Toolbar);
var lastSearchString = '';
let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  toolbar: ['Search'],
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true},
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2', textAlign: 'Right' },
    { field: 'ShipCountry', headerText: 'Ship Name', width: 150 }
  ],
  pageSettings: { pageCount: 5 },
  actionComplete: function (args) {
    if (args.requestType === 'searching') {
      lastSearchString = args.searchString; // Store the last searched value.
    }
  },
});
grid.appendTo('#Grid');
document.getElementById('getSearchedRecords').addEventListener('click', function () {
  if (lastSearchString) {
    new DataManager(data).executeQuery(new Query().search(lastSearchString, [], undefined, true)).then((e: any) => {
      console.log('Searched Records:', e.result); // Log searched records.
    });
  }
});