import { Grid } from '@syncfusion/ej2-grids';
import { DataManager, WebApiAdaptor, Page } from '@syncfusion/ej2-data';
Grid.Inject(Page);
class CustomAdaptor extends WebApiAdaptor {
  beforeSend(args:any, xhr:any, settings:any) {
    xhr.withCredentials = true;
    super.beforeSend(args, xhr, settings);
    xhr.headers.set('Syncfusion', true); // Assign custom headers here.
  }
}
let data: DataManager = new DataManager({
  url: 'https://services.syncfusion.com/js/production/api/Orders',
  adaptor: new CustomAdaptor(),
});
let grid: Grid = new Grid({
    dataSource: data,
    allowPaging:true,
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
      { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
      { field: 'ShipCountry', headerText: 'ShipCountry', width: 140, format: 'yMd' }
    ],
});
grid.appendTo('#Grid');