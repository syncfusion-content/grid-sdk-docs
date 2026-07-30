ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var dropdownElem;
var dropdownlistObj;

var selectDatasource = [
    { text: 'Germany', value: 'Germany' },
    { text: 'Brazil', value: 'Brazil' },
    { text: 'Belgium', value: 'Belgium' },
    { text: 'Switzerland', value: 'Switzerland' },
    { text: 'Venezuela', value: 'Venezuela' },
    { text: 'Austria', value: 'Austria' },
    { text: 'Mexico', value: 'Mexico' },
    { text: 'France', value: 'France' }
];

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer Name', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 120,format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 1, max: 1000 }},
        { field: 'OrderDate', headerText: 'Order Date', width: 130, editType: 'datepickeredit', format: 'yMd', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 , edit: {
                create: function(){
                    dropdownElem = document.createElement('input');
                    return dropdownElem;
                },
                read: function() {
                    return dropdownlistObj.value;
                },
                destroy: function() {
                    dropdownlistObj.destroy();
                },
                write: function(args){
                    var rowData = args.rowData;
                    dropdownlistObj = new ej.dropdowns.DropDownList({
                        dataSource: selectDatasource,
                        value: rowData.ShipCountry
                    });
                    dropdownlistObj.appendTo(args.element);
                }
            }
        }
    ],
    height: 273
});
grid.appendTo('#Grid');
