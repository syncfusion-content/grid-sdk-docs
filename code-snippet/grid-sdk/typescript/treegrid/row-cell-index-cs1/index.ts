


import { TreeGrid } from "@syncfusion/ej2-treegrid";
import { projectData } from './datasource.ts';
import { RowSelectEventArgs } from "@syncfusion/ej2-grids";

let treegrid: TreeGrid = new TreeGrid({
  dataSource: projectData,
  idMapping: "TaskID",
  parentIdMapping: "parentID",
  treeColumnIndex: 1,
  height: 267,
  rowSelected: rowSelected,
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
treegrid.appendTo("#TreeGrid");
function rowSelected(args: RowSelectEventArgs) {
  alert("row index: " + " " + (args.row as HTMLTableRowElement).getAttribute("aria-rowindex"));
  alert("column index: " + " " + args.target.closest("td").getAttribute("aria-colindex"));
}



