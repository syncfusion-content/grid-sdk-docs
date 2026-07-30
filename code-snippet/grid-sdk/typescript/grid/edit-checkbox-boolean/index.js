ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings:  { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true,validationRules: { required: true, number: true }, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true }},
        { field: 'Freight', headerText: 'Freight', validationRules: { required: true, min: 1, max: 1000 }, textAlign: 'Right', editType: 'numericedit', width: 120},
        { field: 'ShipCity', headerText: 'Ship City', editType: 'dropdownedit', validationRules:  { required: true }, width: 150},
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yyyy-MM-dd', editType: 'datetimepickeredit', validationRules:  { required: true }},
        { field: 'Verified', headerText: 'Verified', width: 100, displayAsCheckBox: 'true', editType: 'booleanedit', edit: {
            params: {
                disabled: true,
            }
        }}
    ],
    height: 265
});
grid.appendTo('#Grid');