ej.treegrid.TreeGrid.Inject(ej.treegrid.CommandColumn);

var treeGrid = new ej.treegrid.TreeGrid({
  dataSource: var sampleData,
  childMapping: "subtasks",
  treeColumnIndex: 1,
  height: 280,
  rowDataBound: rowDataBound,
  queryCellInfo: queryCellInfo,
  columns: [
    { field: "taskID", headerText: "Task ID", isPrimaryKey: true, width: 80, textAlign: "Right" },
    { field: "taskName", headerText: "Task Name", width: 200 },
    { field: "startDate", headerText: "Start Date", textAlign: "Right", width: 90,
      format: { skeleton: "yMd", type: "date" } },
    { field: "endDate", headerText: "End Date", textAlign: "Right", width: 90,
     format: { skeleton: "yMd", type: "date" } },
    { field: "duration", headerText: "Duration", textAlign: "Right", width: 90 },
    { field: "progress", headerText: "Progress", width: 90 },
    { headerText: "Commands", width: 120,
      commands: [
        {
          buttonOption: {
            content: "Details",
            cssClass: "e-flat"
          }
        }
      ]
    }
  ]
});
treeGrid.appendTo("#TreeGrid");
function rowDataBound(args) {
  if (!args.data.hasChildRecords) {
    args.row.style.backgroundColor = "green";
  }
}
function queryCellInfo(args) {
  if (!args.data.hasChildRecords) {
    if (args.cell.classList.contains("e-unboundcell")) {
      args.cell.querySelector(".e-unboundcelldiv").style.display = "none";
    }
  }
}

