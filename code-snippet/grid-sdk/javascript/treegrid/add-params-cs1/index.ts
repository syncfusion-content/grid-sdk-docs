


import { TreeGrid, Filter } from "@syncfusion/ej2-treegrid";
import { projectData } from './datasource.ts';

TreeGrid.Inject(Filter);

let treegrid: TreeGrid = new TreeGrid({
  dataSource: projectData,
  idMapping: "TaskID",
  parentIdMapping: "parentID",
  treeColumnIndex: 1,
  height: 273,
  allowFiltering: true,
  filterSettings: { type: "Menu" },
  columns: [
    { field: "TaskID", headerText: "Task ID", textAlign: "Right", width: 70, filter: { params: { showSpinButton: false } } },
    { field: "TaskName", headerText: "Task Name", width: 100 },
    { field: "StartDate", headerText: "Start Date", textAlign: "Right", width: 90, format: { skeleton: "yMd", type: "date" } },
    { field: "EndDate", headerText: "End Date", textAlign: "Right", width: 90, format: { skeleton: "yMd", type: "date" } },
    { field: "Duration", headerText: "Duration", textAlign: "Right", width: 90 },
    { field: "Priority", headerText: "Priority", width: 90 }
  ]
});
treegrid.appendTo("#TreeGrid");



