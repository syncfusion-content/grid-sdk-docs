var grid = new ej.grids.Grid({
    dataSource: data,
    enableHover: false,
    allowSelection: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 80},
        { field: 'ShipCity', headerText: 'Ship City', width: 130 },
    ],
    height: 315,
    queryCellInfo: customiseCell
});
grid.appendTo('#Grid');

function customiseCell(args) {
    if(args.column.field === 'Freight') {
        var freightData= args.data['Freight'];
        if (freightData <= 30){
            args.cell.classList.add('below-30');
        } else if(freightData > 30 && freightData < 80 ) {
            args.cell.classList.add('below-80');
        } else {
            args.cell.classList.add('above-80');
        }
    }
}