import { Grid, DetailRow, Toolbar, PdfExport, GridModel, ColumnModel, PdfExportProperties, DetailDataBoundEventArgs} from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
Grid.Inject(DetailRow, Toolbar, PdfExport);

let grid: Grid = new Grid({
  dataSource: employeeData,
  toolbar: ['PdfExport'],
  allowPdfExport: true,
  columns: [
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
    { field: 'FirstName', headerText: 'First Name', width: 150 },
    { field: 'City', headerText: 'City', width: 150 },
    { field: 'Country', headerText: 'Country', width: 150 }
  ],
  childGrid: {
    dataSource: data,
    queryString: 'EmployeeID',
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'OrderDate', headerText: 'Order Date', width: 120, type:'date', format: { type: 'date', format: 'dd-MM-yyyy' }},
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
  },
  exportDetailDataBound: exportDetailDataBound,
  toolbarClick: toolbarClick,
});
grid.appendTo('#Grid');

function exportDetailDataBound(args: DetailDataBoundEventArgs) {
  ((args.childGrid as GridModel).columns as ColumnModel[])[2].format ={ type: 'date', format: 'dd\\/MM\\/yyyy'};
}
function toolbarClick(args: ClickEventArgs) {
  if (args['item'].id === 'Grid_pdfexport') {
    let exportProperties: PdfExportProperties = {
      hierarchyExportMode: 'All',
    };
    grid.pdfExport(exportProperties);
  }
}