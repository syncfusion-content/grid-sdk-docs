var grid = new ej.grids.Grid({
    dataSource: data.slice(0, 7),
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID',width: 150 },
        { field: 'ShipCity', headerText: 'Ship City',width: 150 },
        { field: 'ShipName', headerText: 'Ship Name',width: 150 }
    ]
});
grid.appendTo('#Grid');