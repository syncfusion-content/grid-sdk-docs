import { Grid, Filter, Selection, Sort, StatusBar } from '@syncfusion/ej2-grids';
import { groceryProducts } from './datasource';

Grid.Inject(Filter, Selection, Sort, StatusBar);

const statusBarValueFormatter = (params: { value: number }): string =>
  params.value.toLocaleString();

const grid = new Grid({
  dataSource: groceryProducts,
  allowFiltering: true,
  filterSettings: { type: 'Excel' },
  allowSorting: true,
  allowSelection: true,
  selectionSettings: { mode: 'Row', type: 'Multiple' },
  enableStatusBar: true,
  statusBarSettings: {
    items: [
      {
        key: 'totalRows',
        type: 'TotalRowCount',
        position: 'Left',
        statusPanelParams: { valueFormatter: statusBarValueFormatter }
      },
      { key: 'selectedCount', type: 'SelectedRowCount', position: 'Center' }
    ]
  },
  columns: [
    { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 120 },
    { field: 'ProductName', headerText: 'Product Name', width: 160 },
    { field: 'Category', headerText: 'Category', width: 140 },
    { field: 'PurchasePrice', headerText: 'Purchase Price', format: 'C2', textAlign: 'Right', width: 140 },
    { field: 'SellingPrice', headerText: 'Selling Price', format: 'C2', textAlign: 'Right', width: 140 },
    { field: 'AvailableStock', headerText: 'Available Stock', textAlign: 'Right', width: 150 }
  ]
});

grid.appendTo('#Grid');
