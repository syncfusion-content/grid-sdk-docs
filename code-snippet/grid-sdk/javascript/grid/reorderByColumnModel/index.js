ej.grids.Grid.Inject(ej.grids.Reorder);
var grid = new ej.grids.Grid({
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
var reorderColumn = new ej.buttons.Button({ cssClass: 'e-info' }, '#reorderColumn');
(document.getElementById('reorderColumn')).onclick = function () {
  grid.reorderColumnByModel(grid.columns[3], grid.columns[1]);
};

// Reorder a child column within a stacked header column.
var reorderChildColumn= new ej.buttons.Button({ cssClass: 'e-info' }, '#reorderChildColumn');
(document.getElementById('reorderChildColumn')).onclick = function () {
  var shipInfo = grid.columns[4];
  grid.reorderColumnByModel(shipInfo.columns[1], shipInfo.columns[0]);
};