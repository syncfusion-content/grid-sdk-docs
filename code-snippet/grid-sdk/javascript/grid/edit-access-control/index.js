ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    actionComplete: access,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', type: 'string', validationRules: { required: true }, width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', validationRules: { required: true }, format: 'C2', editType: 'numericedit', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit' }
    ],
    height: 265
});
grid.appendTo('#Grid');

function access(args) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        var tr = args.row;
        var numericTextBox = tr.querySelector('.e-numerictextbox'); // numeric TextBox control element
        if (numericTextBox) {
            var numericTextBoxInstance = (numericTextBox).ej2_instances[0];
            numericTextBoxInstance.element.style.backgroundColor = 'light pink';
            numericTextBoxInstance.element.style.color = 'black';
            numericTextBoxInstance.element.style.border = '2px solid red';
            numericTextBoxInstance.element.style.textAlign = 'center';
            numericTextBoxInstance.max = 1000;
            numericTextBoxInstance.min = 1;
        }
        var dropDownList = tr.querySelector('.e-dropdownlist'); // dropDownList control element
        if (dropDownList) {
            var dropDownListInstance = (dropDownList).ej2_instances[0]
            dropDownListInstance.showPopup(); // Open the dropdown list
        }
    }
}
