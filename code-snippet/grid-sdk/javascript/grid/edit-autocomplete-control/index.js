ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar, ej.grids.Page);

var autoCompleteElement;
var autoCompleteObj;

// Initialize the Grid
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', type: 'number', textAlign: 'Right', isPrimaryKey: true, width: 100 },
        {
            field: 'CustomerID', headerText: 'Customer ID', type: 'string',
            edit:
            {
                create: function () {
                    autoCompleteElement = document.createElement('input');
                    return autoCompleteElement;
                },
                destroy: function () {
                    autoCompleteObj.destroy();
                },
                read: function () {
                    return autoCompleteObj.value;
                },
                write: function (args) {
                    autoCompleteObj = new ej.dropdowns.AutoComplete({
                        allowCustom: true,
                        value: args.rowData[args.column.field],
                        dataSource: autoCompleteData,
                        fields: { value: 'CustomerID', text: 'CustomerID' },
                    });
                    autoCompleteObj.appendTo(autoCompleteElement);
                }
            },
            width: 100
        },
        { field: 'Freight', headerText: 'Freight', type: 'number', textAlign: 'Right', editType: 'numericedit', format: 'C2', width: 120 },
        { field: 'OrderDate', headerText: 'OrderDate', type: 'date', format: 'yMd', editType: 'datepickeredit', width: 150 }
    ],
    pageSettings: { pageSize: 7 },
    height: 273
});
grid.appendTo('#Grid');

var autoCompleteData = [
    { CustomerID: 'VINET', Id: '1' },
    { CustomerID: 'TOMSP', Id: '2' },
    { CustomerID: 'HANAR', Id: '3' },
    { CustomerID: 'VICTE', Id: '4' },
    { CustomerID: 'SUPRD', Id: '5' },
];