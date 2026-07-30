ej.treegrid.TreeGrid.Inject(ej.treegrid.Page,ej.treegrid.Toolbar,ej.treegrid.PdfExport,ej.treegrid.Filter);

var treegrid = new ej.treegrid.TreeGrid({
  dataSource: var projectData,
  idMapping: "TaskID",
  parentIdMapping: "parentID",
  treeColumnIndex: 1,
  allowPaging: true,
  allowFiltering: true,
  pageSettings: { pageSize: 5, pageCount: 5 },
  allowPdfExport: true,
  toolbar: ["PdfExport"],
  toolbarClick: toolbarClick,
  columns: [
    { field: "TaskID", headerText: "Task ID", textAlign: "Right", width: 70 },
    { field: "TaskName", headerText: "Task Name", width: 100 },
    {  field: "StartDate", headerText: "Start Date", textAlign: "Right", width: 100,
      format: { skeleton: "yMd", type: "date" } },
    { field: "EndDate", headerText: "End Date", textAlign: "Right", width: 100,
      format: { skeleton: "yMd", type: "date" } },
    { field: "Duration", headerText: "Duration", textAlign: "Right", width: 90 },
    { field: "Priority", headerText: "Priority", width: 90 }
  ]
});
treegrid.appendTo("#TreeGrid");
function toolbarClick(args) {
  if (treegrid && args.item.text === "PDF Export") {
    let pdfdata;
    pdfdata = treegrid.filterModule.filteredResult;
    const exportProperties = {
      dataSource: pdfdata
    };
    if (treegrid) {
      treegrid.pdfExport(exportProperties);
    }
  }
}


