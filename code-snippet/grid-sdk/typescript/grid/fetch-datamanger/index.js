ej.grids.Grid.Inject(ej.grids.Page);

var SERVICE_URL = 'https://ej2services.syncfusion.com/production/web-services/api/Orders';
var statusMessage = document.getElementById("statusMessage");
var getData = new ej.data.DataManager({
    url: SERVICE_URL,
    adaptor: new ej.data.WebApiAdaptor()
});
var grid = new ej.grids.Grid({
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 160 },
        { field: 'EmployeeID', headerText: 'Employee ID', width: 120, textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 150, format: "C2", textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    dataSource: []
});
grid.appendTo('#Grid');

document.getElementById("fetchButton").addEventListener("click", function() {
    statusMessage.textContent = "Fetching data...";
    getData.executeQuery(new ej.data.Query()).then(function(e) {
        grid.dataSource = e.result;
        statusMessage.textContent = "Data fetched successfully! Total Records: " + e.result.length;
    }).catch(function() {
        statusMessage.textContent = "Error fetching data!";
    });
});
