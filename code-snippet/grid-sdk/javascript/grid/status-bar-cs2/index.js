ej.grids.Grid.Inject(ej.grids.Filter, ej.grids.Selection, ej.grids.Sort, ej.grids.StatusBar);

var grid = new ej.grids.Grid({
  dataSource: data,
  allowFiltering: true,
  filterSettings: { type: 'Excel' },
  allowSorting: true,
  allowSelection: true,
  selectionSettings: { mode: 'Cell', type: 'Multiple' },
  enableStatusBar: true,
  statusBarSettings: {
    items: [
      {
        key: 'selectedAgg',
        type: 'SelectedCellAggregates',
        position: 'Right',
        statusPanelParams: { aggregateFunctions: ['Avg', 'Sum', 'Max'] }
      }
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
