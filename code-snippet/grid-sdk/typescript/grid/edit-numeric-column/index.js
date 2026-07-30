ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    height: 265,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true }, width: 100 },
        { field: 'CustomerID', headerText: 'CustomerID', validationRules: { required: true }, width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, validationRules: { required: true, min: 1, max: 1000 } },
        {
            field: 'ShipCity', headerText: 'Ship City', editType: 'dropdownedit', edit: {
                params: {
                    showClearButton: true,
                    popupHeight: 120
                }
            }, validationRules: { required: true }, width: 150
        }
    ]
});
grid.appendTo('#Grid');