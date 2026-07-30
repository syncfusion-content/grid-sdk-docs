class CustomAdaptor extends ej.data.WebApiAdaptor {
  beforeSend(args, xhr, settings) {
      xhr.withCredentials = true;
      super.beforeSend(args, xhr, settings);
      xhr.headers.set('Syncfusion', true); // Assign custom headers here.
  }
}
var data = new ej.data.DataManager({
url: 'https://services.syncfusion.com/js/production/api/Orders',
adaptor: new CustomAdaptor(),
});
var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging:true,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
    { field: 'ShipCountry', headerText: 'ShipCountry', width: 140, format: 'yMd' }
  ]
});
grid.appendTo('#Grid');