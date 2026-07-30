import { getOrders } from './orderService.js';
ej.grids.Grid.Inject(ej.grids.Toolbar,ej.grids.Page,ej.grids.ExcelExport,ej.grids.PdfExport);
const state = { skip: 0, take: 10 };
let grid= new ej.grids.Grid({
    allowPaging: true,
    created:created,
    allowExcelExport:true,
    allowPdfExport:true,
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
function  dataStateChange (state) {
  getOrders(state).then((event) => {
    grid.dataSource = event.result; // Assign the result to the dataSource property.
  });
}
function toolbarClick(args) {
  let state= { action: {}, skip: 0, take: grid.pageSettings.totalRecordsCount };
  switch (args.item.text) {
    case "PDF Export":
     grid.showSpinner(); // Show the spinner when send the post to service.
      state.action.isPdfExport = true;
      // Fetch the entire data while PDF exporting.
      getOrders(state).then((event) => {
        let pdfExportProperties = {
          dataSource: event.result.result
        };
        grid.pdfExport(pdfExportProperties); // Need to call pdfExport method of Grid when get the entire data.
      });
      break;
    case "Excel Export":
      // Fetch the entire data while Excel exporting.
      grid.showSpinner();// Show the spinner when send the post to service.
      state.action.isExcelExport = true;
      getOrders(state).then((event) => {
        let excelExportProperties = {
          dataSource: event.result.result
        };
        grid.excelExport(excelExportProperties);// Need to call excelExport method of Grid when get the entire data.
      });
      break;
  }
}