var lastSearchString = '';
var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  toolbar: ['Search'],
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2',textAlign: 'Right' },
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
    new ej.data.DataManager(data).executeQuery(new ej.data.Query().search(lastSearchString, [], undefined, true)).then((e) => {
      console.log('Searched Records:', e.result); // Log searched records.
    });
  }
});