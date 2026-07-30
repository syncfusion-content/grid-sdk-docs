ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var country =  [
    { countryName: 'United States', countryId: '1' },
    { countryName: 'Australia', countryId: '2' },
    { countryName: 'India', countryId: '3' }
];

var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', validationRules: { required: true, number: true }, textAlign: 'Right', isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 120},
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit',validationRules: { required: true }, width: 150, edit: { 
                params: {
                    dataSource: new ej.data.DataManager(country),
                    fields: { text: 'countryName', value: 'countryName' },
                    query:  new ej.data.Query(),
                    actionComplete: () => false
                }
            }
        }
    ],
    height: 273
});
grid.appendTo('#Grid');