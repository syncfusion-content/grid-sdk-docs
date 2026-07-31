import { Grid, Sort, Page, Filter, FilterEventArgs } from '@syncfusion/ej2-grids';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

Grid.Inject(Sort,Page,Filter);

let grid: Grid = new Grid({
  dataSource: data,
  filterSettings: { type: 'Excel'},
  allowFiltering: true,
  allowPaging: true,
  pageSettings: { pageSize: 12 },
  allowSorting: true,
  height: 273,
  actionBegin: actionBegin,
  columns: [
      { field: 'OrderID', headerText: 'Order ID', width: 100, textAlign: "Right" },
      { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
      { field: 'Freight', headerText: 'Freight', width: 100, format: "C2" },
      { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd' }
  ]
});
grid.appendTo('#Grid');

function actionBegin(args: FilterEventArgs) {
    var hostUrl = 'https://services.syncfusion.com/js/production/';
    if (args.requestType === "filterBeforeOpen") {
        args.filterModel.options.dataSource = new DataManager({
            url: hostUrl + 'api/Orders', 
            adaptor: new WebApiAdaptor(),
        });
    }
}