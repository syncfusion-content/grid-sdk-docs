ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var comboboxElem;
var comboboxObj;

var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer Name', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 1, max: 1000 } },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, editType: 'datepickeredit', format: 'yMd', textAlign: 'Right' },
        {
            field: 'ShipCountry', headerText: 'Ship Country', width: 150,
            edit: {
                create: function () {
                    comboboxElem = document.createElement('input');
                    return comboboxElem;
                },
                read: function () {
                    return comboboxObj.value;
                },
                destroy: function () {
                    comboboxObj.destroy();
                },
                write: function (args) {
                    var rowData = args.rowData;
                    comboboxObj = new ej.dropdowns.ComboBox({
                        dataSource: selectDatasource,
                        value: rowData.ShipCountry,
                        change: function (e) {
                            rowData.ShipCountry = e.value;
                        }
                    });
                    comboboxObj.appendTo(args.element);
                }
            }
        }
    ],
    height: 273
});
grid.appendTo('#Grid');

var selectDatasource = [
    { text: 'Germany', value: 'Germany' },
    { text: 'Brazil', value: 'Brazil' },
    { text: 'Belgium', value: 'Belgium' },
    { text: 'Switzerland', value: 'Switzerland' },
    { text: 'Venezuela', value: 'Venezuela' },
    { text: 'Austria', value: 'Austria' },
    { text: 'Mexico', value: 'Mexico' },
];