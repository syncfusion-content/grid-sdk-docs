


import { TreeGrid, Page, Toolbar, PdfExport, ExcelExport } from "@syncfusion/ej2-treegrid";
import { projectData } from './datasource.ts';
import { ClickEventArgs } from "@syncfusion/ej2-navigations";
import { Query } from "@syncfusion/ej2-data";

TreeGrid.Inject(Page, ExcelExport, Toolbar, PdfExport);

let treegrid: TreeGrid = new TreeGrid({
  dataSource: projectData,
  idMapping: "TaskID",
  parentIdMapping: "parentID",
  treeColumnIndex: 1,
  allowPaging: true,
  pageSettings: { pageSize: 5, pageCount: 5 },
  allowExcelExport: true,
  allowPdfExport: true,
  pdfExportComplete: pdfExportComplete,
  excelExportComplete: excelExportComplete,
  toolbar: ["PdfExport", "ExcelExport"],
  toolbarClick: toolbarClick,
  columns: [
    { field: "TaskID", headerText: "Task ID", textAlign: "Right", width: 70 },
    { field: "TaskName", headerText: "Task Name", width: 150 },
    { field: "StartDate", headerText: "Start Date", textAlign: "Right", width: 90,
      format: { skeleton: "yMd", type: "date" } },
    { field: "EndDate", headerText: "End Date", textAlign: "Right", width: 90,
      format: { skeleton: "yMd", type: "date" } },
    { field: "Duration", headerText: "Duration", textAlign: "Right", width: 80 },
    { field: "Priority", headerText: "Priority", width: 90 }
  ]
});
treegrid.appendTo("#TreeGrid");
function toolbarClick(args: ClickEventArgs) {
  if (treegrid && args.item.text === "PDF Export") {
    treegrid.showSpinner();
    treegrid.pdfExport();
  } else if (treegrid && args.item.text === "Excel Export") {
    treegrid.showSpinner();
    treegrid.excelExport();
  }
}
function pdfExportComplete(args) {
  if (treegrid) {
    treegrid.hideSpinner();
  }
}
function excelExportComplete(args) {
  if (treegrid) {
    treegrid.hideSpinner();
  }
}



