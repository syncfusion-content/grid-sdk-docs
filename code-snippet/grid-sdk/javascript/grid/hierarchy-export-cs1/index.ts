import { Grid, DetailRow, Toolbar, ExcelExport, GridModel, ColumnModel, ExcelExportProperties, DetailDataBoundEventArgs} from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
Grid.Inject(DetailRow, Toolbar, ExcelExport);

let grid: Grid = new Grid({
  dataSource: employeeData,
  toolbar: ['ExcelExport'],
  allowExcelExport: true,
  columns: [
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
    { field: 'FirstName', headerText: 'First Name', width: 150 },
    { field: 'LastName', headerText: 'Last Name', width: 150 },
    { field: 'City', headerText: 'City', width: 150 }
  ],
  childGrid: {
    dataSource: data,
    queryString: 'EmployeeID',
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'Freight', headerText: 'Freight', width: 150, textAlign: 'Right' },
      { field: 'OrderDate', headerText: 'Order Date', width: 120,format: { type: 'date', format: 'dd-MM-yyyy' }},
      { field: 'ShipCity', headerText: 'ShipCity', width: 150 }
    ],
  },
  exportDetailDataBound: exportDetailDataBound,
  toolbarClick: toolbarClick,
});
grid.appendTo('#Grid');

function exportDetailDataBound(args: DetailDataBoundEventArgs) {
  ((args.childGrid as GridModel).columns as ColumnModel[])[2].format ='dd\\/MM\\/yyyy';
}
function toolbarClick(args: ClickEventArgs) {
  if (args['item'].id === 'Grid_excelexport') {
    let exportProperties: ExcelExportProperties = {
      hierarchyExportMode: 'All',
    };
    grid.excelExport(exportProperties);
  }
}