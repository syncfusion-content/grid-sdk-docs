var grid = new ej.grids.Grid({
  dataSource: [
    { OrderID: 10248, CustomerID: 'VINET', Freight: 99999, ShipCountry: 'France' },
    { OrderID: 10249, CustomerID: 'TOMSP', Freight: 350, ShipCountry: 'Germany' }
  ],
  allowFiltering: true,
  allowSelection: true,
  selectionSettings: { mode: 'Cell', type: 'Multiple' },
  enableStatusBar: true,
  statusBarSettings: {
    items: [
      { key: 'totalRows', type: 'TotalRowCount', position: 'Left', statusPanelParams: { valueFormatter: function (params) { return params.value > 1000 ? (params.value / 1000) + ' K' : params.value.toString(); } } },
      { key: 'filteredRows', type: 'FilteredRowCount', position: 'Left' },
      { key: 'totalAndFilteredRows', type: 'TotalAndFilteredRowCount', position: 'Right' },
      { key: 'selectedCount', type: 'SelectedRowCount', position: 'Center' },
      { key: 'selectedAgg', type: 'SelectedCellAggregates', position: 'Center', statusPanelParams: { aggFuncs: ['Sum', 'Avg'] } },
      { key: 'custom', type: 'Custom', position: 'Right', statusPanelParams: { label: 'Total Revenue: ', template: function (context) { var button = document.createElement('button'); button.textContent = 'Refresh (' + context.totalCount + ')'; return button; } } }
    ]
  },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 150 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
  ]
});
grid.appendTo('#Grid');
