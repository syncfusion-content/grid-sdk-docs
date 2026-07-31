ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top', showAddNewRow: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true }, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true, minLength: 5 }, width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType:'numericedit', validationRules: { required: true, min: 1 }, width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType:'dropdownedit', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');