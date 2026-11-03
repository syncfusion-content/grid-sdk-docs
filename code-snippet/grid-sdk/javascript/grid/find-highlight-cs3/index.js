ej.grids.Grid.Inject(ej.grids.Find);
var grid = new ej.grids.Grid({
    dataSource: data,
    findSettings: { enabled: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Left', width: 110 },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Left', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Left', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 90, format: 'C2' }
    ],
    height: 272
});
grid.appendTo('#Grid');

var highlightButton = new ej.buttons.Button();
highlightButton.appendTo('#highlight');
document.getElementById('highlight').addEventListener('click', function () {
    var text = document.getElementById('findText').value;
    grid.find(text);
});
