var grid = new ej.grids.Grid({
  dataSource: data,
  filterSettings: { type: 'Excel'},
  allowFiltering: true,
  allowPaging: true,
  pageSettings: { pageSize: 12 },
  allowSorting: true,
  height: 273,
  actionBegin: actionBegin,
  columns: [
      { field: 'OrderID', headerText: 'Order ID', width: 100, textAlign: "Right" },
      { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
      { field: 'Freight', headerText: 'Freight', width: 100, format: "C2" },
      { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd' }
  ]
});
grid.appendTo('#Grid');

function actionBegin(args) {
    var hostUrl = 'https://services.syncfusion.com/js/production/';
    if (args.requestType === "filterBeforeOpen") {
        args.filterModel.options.dataSource = new ej.data.DataManager({
            url: hostUrl + 'api/Orders', 
            adaptor: new ej.data.WebApiAdaptor(),
        });
    }
}