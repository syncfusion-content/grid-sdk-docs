var count = 0;
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageSize: 5, pageCount: 3 },
    columns: [
      { field: 'OrderID', headerText: 'OrderID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 120 },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 }
    ],
    height: 280
});
grid.appendTo('#Grid');

var newColumn = [
  { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 125 },
  { field: 'CustomerName', headerText: 'Customer Name', width: 125 },
  { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right'},
  { field: 'Freight', headerText: 'Freight', width: 120, textAlign: 'Right'},
];

var button = new ej.buttons.Button();
button.appendTo('#changebutton');

document.getElementById('changebutton').addEventListener('click', function () {
  count = count + 100;
  grid.changeDataSource(data.slice(0, count + 100), newColumn);
});