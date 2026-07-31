ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: 'true',
    pageSettings: { pageCount: 5 },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true } },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true } },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', editType: 'datepickeredit', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit', edit: { params: { popupHeight: '300px' } } }
    ],
    height: 273
});
grid.appendTo('#Grid');

var positionData = [
    { text: 'Top', value: 'Top' },
    { text: 'Bottom', value: 'Bottom' }]

var dropdownList = new ej.dropdowns.DropDownList({
    value: 'Top',
    popupHeight: '240px',
    width: 100,
    dataSource: positionData,
    change: changePosition,
});
dropdownList.appendTo('#dropdown');

function changePosition(args) {
    grid.editSettings.newRowPosition = args.value;
}