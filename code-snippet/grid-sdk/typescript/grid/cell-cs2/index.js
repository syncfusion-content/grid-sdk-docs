var grid = new ej.grids.Grid({
    dataSource: data,
    selectionSettings:{
        mode: 'Cell',
        type: 'Multiple',
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'ShipCity', width:130 },
        { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right', width: 80 }
    ],
    height: 315
});
grid.appendTo('#Grid');