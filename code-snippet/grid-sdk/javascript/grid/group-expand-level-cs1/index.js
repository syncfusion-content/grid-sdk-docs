ej.grids.Grid.Inject(ej.grids.Group);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { columns: ['ShipCountry', 'ShipCity'], defaultExpanded: 1 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 160 },
        { field: 'ShipCity', headerText: 'Ship City', width: 140 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 }
    ],
    height: 400
});
grid.appendTo('#Grid');