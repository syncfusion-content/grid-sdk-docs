var grid = new ej.grids.Grid({
    dataSource: data,
    height: '70vh',
    width: '70vw',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format:'C2', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    ]
});
grid.appendTo('#Grid');