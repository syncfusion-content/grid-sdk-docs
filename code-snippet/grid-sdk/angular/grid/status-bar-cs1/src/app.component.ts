import { Grid, Filter, StatusBar } from '@syncfusion/ej2-grids';

Grid.Inject(Filter, StatusBar);

const grid = new Grid({
  dataSource: data,
  allowFiltering: true,
  enableStatusBar: true,
  statusBarSettings: {
    items: [
      { key: 'totalRows', type: 'TotalRowCount', position: 'Left' },
      { key: 'filteredRows', type: 'FilteredRowCount', position: 'Left' },
      { key: 'filteredTotalRows', type: 'TotalAndFilteredRowCount', position: 'Right' },
      { key: 'selectedCount', type: 'SelectedRowCount', position: 'Center' }
    ]
  },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 150 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
  ]
});

grid.appendTo('#Grid');