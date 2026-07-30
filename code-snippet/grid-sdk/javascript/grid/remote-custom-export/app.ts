import { DataStateChangeEventArgs, Grid } from '@syncfusion/ej2-grids';
import { getOrders } from '../orderService';
import {  Page, PdfExport, ExcelExport,Toolbar } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from "@syncfusion/ej2-navigations";

Grid.Inject(Page, PdfExport, ExcelExport,Toolbar);
interface CustomDataStateChangeEventArgs extends DataStateChangeEventArgs {
  skip:number;
  take:number;
}
const state:CustomDataStateChangeEventArgs= { skip: 0, take: 10 };
let grid: Grid = new Grid({
    allowPaging: true,
    allowExcelExport:true,
    allowPdfExport:true,
    created:created,
    excelExportComplete:exportComplete,
    pdfExportComplete:exportComplete,
    toolbarClick:toolbarClick,
    dataStateChange: dataStateChange,
    toolbar: ["ExcelExport", "PdfExport"],
    columns: [
        { field: 'OrderID', isPrimaryKey:true,headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerName', width: 140, headerText: 'Customer Name', type: 'string' },
        { field: 'ProductID', headerText: 'Product ID' ,width: 120 },
        { field: 'ProductName', headerText: 'Product Name', width: 140}
    ],
    height: 315
});

grid.appendTo('#Grid');
function exportComplete() {
  grid.hideSpinner(); // Hide the spinner when export completed.
}
// Triggers at initial render of the Grid.
function created() {
  // Initial state needs to be sent manually.
  dataStateChange(state);
}
function  dataStateChange (state:DataStateChangeEventArgs) {
    getOrders(state).then((event) => {
        grid.dataSource = event.result; // Assign the result to the dataSource property.
    });
  }
function toolbarClick(args:ClickEventArgs) {
  let state= { action: {}, skip: 0, take: grid.pageSettings.totalRecordsCount };
  switch (args.item.text) {
    case "PDF Export":
      grid.showSpinner(); // Show the spinner when send the post to service.
      (state.action as any).isPdfExport = true;
      // Fetch the entire data while PDF exporting.
      getOrders(state).then((event) => {
        let pdfExportProperties = {
          dataSource: (event.result as any).result
        };
        grid.pdfExport(pdfExportProperties); // Need to call pdfExport method of Grid when get the entire data.
      });
      break;
    case "Excel Export":
      // Fetch the entire data while Excel exporting.
      grid.showSpinner();// Show the spinner when send the post to service.
      (state.action as any).isExcelExport = true;
      getOrders(state).then((event) => {
        let excelExportProperties = {
          dataSource: (event.result as any).result
        };
        grid.excelExport(excelExportProperties);// Need to call excelExport method of Grid when get the entire data.
      });
      break;
  }
}