var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 140 },
        { field: 'CustomerID', headerText: '<strong> Customer ID </strong>', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 80, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCity', headerText: 'Ship City', width: 130 }
    ],
    height: 315
});
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
    change: change,
 });
toggle.appendTo('#switch');

 function change(args){
    if (args.checked) {
        grid.getColumnByField('CustomerID').disableHtmlEncode = false;
    } else {
        grid.getColumnByField('CustomerID').disableHtmlEncode = true;
    }
    grid.refreshColumns();
 }