var customFn = function (args) {
    return (args['value'] <= 1000);
};

var customFn1 = function (args) {
    return (args['value'] >= 1);
};

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    pageSettings: { pageCount: 5 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: '140', textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: '140', validationRules: { required: true } },
        { field: 'Freight', headerText: 'Freight', width: '140', format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, maxLength: [customFn, 'Please enter a value less than 1000'], minLength: [customFn1, 'Please enter a value greater than 1'] },edit:{params: { change: onChange}} },
        { field: 'OrderDate', headerText: 'Order Date', width: '120', editType: 'datetimepickeredit', format: 'M/d/y hh:mm a', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: '150', editType: 'dropdownedit',edit:{ params: { popupHeight: '300px' } }}
    ],
    actionComplete: onActionComplete
});
grid.appendTo('#Grid');

function onActionComplete(args) {
    if (args.requestType === "beginEdit" || args.requestType === "add") {
        formElement = args.form;
    }
}

function onChange() {
    formElement['ej2_instances'][0].validate();
}