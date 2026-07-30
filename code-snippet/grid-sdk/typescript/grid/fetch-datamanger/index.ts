import { Grid, Page } from '@syncfusion/ej2-grids';
import { DataManager, WebApiAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

Grid.Inject(Page);

let SERVICE_URL = 'https://ej2services.syncfusion.com/production/web-services/api/Orders';
let statusMessage = document.getElementById("statusMessage") as HTMLParagraphElement;
let getData = new DataManager({
    url: SERVICE_URL,
    adaptor: new WebApiAdaptor()
});
let grid = new Grid({
    allowPaging:true,
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

(document.getElementById("fetchButton") as HTMLElement).addEventListener("click", () => {
    statusMessage.textContent = "Fetching data...";
    getData.executeQuery(new Query()).then((e: ReturnOption) => {
        grid.dataSource = e.result;
        statusMessage.textContent = `Data fetched successfully! Total Records: ${e.result.length}`;
    }).catch(() => {
        statusMessage.textContent = "Error fetching data!";
    });
});
