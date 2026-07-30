ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    height: 273,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2', validationRules: { min: 1, max: 1000 } },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ]
});
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
    change: toggleShowDeleteConfirmDialog,
    checked: false,
});
toggle.appendTo('#switch');

function toggleShowDeleteConfirmDialog() {
    grid.editSettings.showDeleteConfirmDialog = toggle.checked;
}