ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var textboxElem;
var textboxObject;

ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowTextWrap: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer Name', width: 120, validationRules: { required: true, minLength: 5 } },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true } },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, editType: 'datepickeredit', format: 'yMd', textAlign: 'Right' },
        {
            field: 'ShipAddress', headerText: 'Ship Country', disableHtmlEncode: false,
            valueAccessor: function (field, data) {
                var value = data.ShipAddress;
                return (value !== undefined) ? value.split('\n').join('<br>') : '';
            }, width: 150,
            edit: {
                create: createShipAddressFn,
                destroy: destroyShipAddressFn,
                read: readShipAddressFn,
                write: writeShipAddressFn
            }
        }
    ],
    height: 265
});
grid.appendTo('#Grid');

function createShipAddressFn() {
    textboxElem = document.createElement('textarea');
    return textboxElem;
}
function destroyShipAddressFn() {
    textboxObject.destroy();
}
function readShipAddressFn() {
    return textboxObject.value;
}

function writeShipAddressFn(args) {
    var rowData = args.rowData;
    textboxObject = new ej.inputs.TextBox({
        multiline: true,
        value: rowData.ShipAddress,
    });
    textboxObject.appendTo(textboxElem);
}