ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.Toolbar);

var treeGrid = new ej.treegrid.TreeGrid({
  dataSource: var projectData,
  idMapping: "TaskID",
  parentIdMapping: "parentID",
  treeColumnIndex: 1,
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: "Dialog"
  },
  height: 250,
  toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
  actionComplete: actionComplete,
  columns: [
    { field: "TaskID", headerText: "Task ID", isPrimaryKey: true, textAlign: "Right", width: 70 },
    { field: "TaskName", headerText: "Task Name", width: 100 },
    { field: "StartDate", headerText: "Start Date", textAlign: "Right", width: 90, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" }, edit: { params: { format: "y/M/d" } }  },
    { field: "EndDate", headerText: "End Date", textAlign: "Right", width: 90, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" }, edit: { params: { format: "y/M/d" } } },
    { field: "Duration", headerText: "Duration", textAlign: "Right", width: 90 },
    { field: "Priority", headerText: "Priority", width: 90 }
  ]
});
treeGrid.appendTo("#TreeGrid");
function actionComplete(args) {
  if (args.requestType === "beginEdit" || args.requestType === "add") {
    const dialog = args.dialog;
    const TaskName = "TaskName";
    dialog.height = 400;
    // change the header of the dialog
    dialog.header =
      args.requestType === "beginEdit"
        ? "Record of " + args.rowData[TaskName]
        : "New Customer";
  }
}

