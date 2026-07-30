ej.grids.Grid.Inject(ej.grids.Toolbar,ej.grids.Edit);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbarClick:clickHandler,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90, isPrimaryKey:true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 270
});
grid.appendTo('#Grid');

let message = document.getElementById('message');

function clickHandler(args)
{
    if (args.item.id === 'Grid_add') { // 'Grid_add' -> Grid component id + _ + toolbar item name
        args.cancel = true;
        const newRecord = {
            OrderID: 10247,
            CustomerID: 'TOMSP',
            ShipName: 'Hanari Carnes',
            ShipCity: 'Lyon',
        };
        grid.addRecord(newRecord);
        message.textContent= 'The default adding action is cancelled, and a new record is added using the addRecord method.';
    }
    else
    message.textContent = ''
}