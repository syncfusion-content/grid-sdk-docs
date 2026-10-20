var grid = new ej.grids.Grid({
    dataSource: [],
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    emptyRecordMode: 'Sticky',
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right', validationRules: { required: true, number: true }, width: 140 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 140 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 140, format: 'C2', validationRules: { required: true } },
        { field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', width: 160, format: 'ymd', },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150, },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 200 }
    ],
});
grid.appendTo('#Grid');
let mode = [
    { Id: 'Sticky', Mode: 'Sticky' },
    { Id: 'Normal', Mode: 'Normal' }
]
let dropdownlistobject =  new ej.dropdowns.DropDownList({
    dataSource: mode,
    fields: { text: 'Mode', value: 'Id' },
    value: 'Sticky',
    width: 100,
    change: (args) => {
        grid.emptyRecordMode = args.value;
    }
});
dropdownlistobject.appendTo('#dropdown');

