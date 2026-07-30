ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit,ej.treegrid.Toolbar);

var treegrid = new ej.treegrid.TreeGrid({
  dataSource: var textdata,
  childMapping: "Children",
  treeColumnIndex: 1,
  height: 269,
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: "Cell"
  },
  toolbar: ["Add", "Delete", "Update", "Cancel"],
  treeColumnIndex: 1,
  queryCellInfo: queryCellInfo,
  columns: [
    { field: "EmpID", headerText: "EmpID", isPrimaryKey: true, textAlign: "Right", width: 80 },
    { field: "Name", headerText: "Employee Name", width: 70 },
    { field: "DOB", headerText: "DOB", textAlign: "Right", width: 70, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" } },
    { field: "EmployeeID", headerText: "EmployeeID", textAlign: "Right", editType: "dropdownedit",
      edit: {
        params: {
          dataSource: new ej.data.DataManager(var dropData),
          fields: { text: "EmployeeName", value: "EmployeeID" },
          query: new ej.data.Query()
        }
      },
      width: 70 },
    { field: "Country", headerText: "Country", width: 90, textAlign: "Right" }
  ]
});
treegrid.appendTo("#TreeGrid");
function queryCellInfo(args) {
  if (args.column.field === "EmployeeID") {
    for (var i = 0; i < dropData.length; i++) {
      let data = args.data;
      if (data[args.column.field] === dropData[i]["EmployeeID"]) {
        args.cell.innerText = dropData[i]["EmployeeName"]; // assign the foreignkey field value to the innertext
      }
    }
  }
}

