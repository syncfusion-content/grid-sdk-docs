var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 90, format: 'C2' },
        { field: 'OrderStatus', headerText: 'Order Status', template: '#columnTemplate', width: 200 },
    ],
    height: 315,
    queryCellInfo: dropdown
});
grid.appendTo('#Grid');

var dropData = ['Order Placed', 'Processing', 'Delivered'];

function dropdown(args) {
  if (args.column.field === 'OrderStatus') {
      var drop = new ej.dropdowns.DropDownList({
          dataSource: dropData,
          value: args.data['OrderStatus'],
          popupHeight: 150,
          popupWidth: 150,
      });
      drop.appendTo(args.cell.querySelector('#dropElement'));
  }
}