var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { columns: ['ShipCountry'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', format: 'C2', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
    change: change,
    checked: true
});
toggle.appendTo('#switch');

function change(args){
    if (!args.checked) {
        grid.allowTextSelection = false;
    } else {
        grid.allowTextSelection = true;
    }
}
