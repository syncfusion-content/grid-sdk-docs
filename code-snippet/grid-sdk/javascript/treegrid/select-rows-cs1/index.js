ej.treegrid.TreeGrid.Inject(ej.treegrid.Page);

var selIndex = [];
var treeGrid = new ej.treegrid.TreeGrid({
  dataSource: var projectData,
  idMapping: "TaskID",
  parentIdMapping: "parentID",
  treeColumnIndex: 1,
  height: 269,
  allowPaging: true,
  selectionSettings: { type: "Multiple" },
  dataBound: dataBound,
  rowDataBound: rowDataBound,
  columns: [
    { field: "TaskID", headerText: "Task ID", textAlign: "Right", width: 70 },
    { field: "TaskName", headerText: "Task Name", width: 150 },
    { field: "StartDate", headerText: "Start Date", textAlign: "Right", width: 90,
      format: { skeleton: "yMd", type: "date" } },
    { field: "EndDate", headerText: "End Date", textAlign: "Right", width: 90,
      format: { skeleton: "yMd", type: "date" } },
    { field: "Duration", headerText: "Duration", textAlign: "Right", width: 80 },
    { field: "Progress", headerText: "Progress", width: 80, textAlign: "Right" },
    { field: "Priority", headerText: "Priority", width: 90 }
  ]
});
treeGrid.appendTo("#TreeGrid");
function dataBound(args) {
  if (this && selIndex.length) {
    this.selectRows(selIndex);
    selIndex = [];
  }
}
function rowDataBound(args) {
  if (args.data["Duration"] > 4) {
    selIndex.push(parseInt(args.row.getAttribute("aria-rowindex"), 0));
  }
}



