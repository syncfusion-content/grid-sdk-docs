ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
  dataSource: data,
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  columns: [
    { field: 'OrderID', headerText: 'Order ID', validationRules: { required: true, number: true }, textAlign: 'Right', isPrimaryKey: true, width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 120 },
    {
      field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', validationRules: { required: true }, edit: {
        params: {
          allowFiltering: true,
        }
      }, width: 150
    }
  ],
  height: 273
});
grid.appendTo('#Grid');