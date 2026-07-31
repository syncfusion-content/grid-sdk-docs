ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Edit,  ej.grids.Toolbar);

var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowEditing: true, mode: "Normal"},
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    actionBegin: actionBegin,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', validationRules: { required: true }, textAlign: 'Right', isPrimaryKey: true, width: 100},
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', validationRules: { min:1,max:1000 }, width: 120, format: 'C2'},
        { field: "ShipCountry", headerText: "Ship Country", editType: 'dropdownedit',  width: 150}
    ],
    height: 273
});
grid.appendTo('#Grid');

function actionBegin(args) {
  if (args.requestType === 'beginEdit' && (args.rowData).ShipCountry === 'France') {
      args.cancel = true;
  }
}