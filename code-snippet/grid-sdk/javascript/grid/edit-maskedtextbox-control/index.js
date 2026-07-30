ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var maskelem;
var maskObj;

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', type: 'number', textAlign: 'Right', isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },
        { field: 'CustomerNumber', headerText: 'Customer Number', width: 140 , edit: {
                create: function(){
                    maskelem = document.createElement('input');
                    return maskelem;
                },
                read: function() {
                    return maskObj.value;
                },
                destroy: function() {
                    maskObj.destroy();
                },
                write: function(args){
                    var rowData = args.rowData
                    maskObj = new ej.inputs.MaskedTextBox({
                        mask: "000-000-0000",
                        value: rowData.CustomerNumber
                    });
                    maskObj.appendTo(args.element);
                }
            }
        }
    ],
    height: 273
});
grid.appendTo('#Grid');