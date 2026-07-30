


import { TreeGrid, Edit, Toolbar, ITreeData } from "@syncfusion/ej2-treegrid";
import { foreignKeyData, dropData } from './datasource.ts';
import { DataManager, Query } from "@syncfusion/ej2-data";
import { QueryCellInfoEventArgs, Column, IEditCell } from "@syncfusion/ej2-grids";

TreeGrid.Inject(Edit,Toolbar);

let treegrid: TreeGrid = new TreeGrid({
  dataSource: foreignKeyData,
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
  queryCellInfo: queryCellInfo,
  columns: [
    { field: "EmpID", headerText: "EmpID", textAlign: "Right", isPrimaryKey: true, width: 70 },
    { field: "Name", headerText: "Employee Name", width: 70 },
    { field: "DOB", headerText: "DOB", textAlign: "Right", width: 70, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" } },
    { field: "EmployeeID", headerText: "EmployeeID", textAlign: "Right", editType: "dropdownedit",
      edit: {
        params: {
          dataSource: new DataManager(dropData),
          fields: { text: "EmployeeName", value: "EmployeeID" },
          query: new Query()
        }
      },
      width: 70 },
    { field: "Country", headerText: "Country", width: 90, textAlign: "Right" }
  ]
});
treegrid.appendTo("#TreeGrid");
function queryCellInfo(args: QueryCellInfoEventArgs) {
  if ((args.column as Column).field === "EmployeeID") {
    for (var i = 0; i < dropData.length; i++) {
      let data: Object = args.data as Object;
      if (data[(args.column as Column).field] === dropData[i]["EmployeeID"]) {
        (args.cell as HTMLElement).innerText = dropData[i]["EmployeeName"]; // assign the foreignkey field value to the innertext
      }
    }
  }
}



