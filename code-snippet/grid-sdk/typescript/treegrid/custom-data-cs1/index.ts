


import { TreeGrid, Edit, Toolbar } from "@syncfusion/ej2-treegrid";
import { projectData } from './datasource.ts';
import { Query, DataManager } from "@syncfusion/ej2-data";
import { IEditCell } from "@syncfusion/ej2-grids";

TreeGrid.Inject(Edit, Toolbar);
let priorityData: object[] = [
  { priorityName: "Normal", priorityId: "1" },
  { priorityName: "High", priorityId: "2" },
  { priorityName: "Low", priorityId: "3" },
  { priorityName: "Critical", priorityId: "4" },
  { priorityName: "Breaker", priorityId: "5" }
];

let treegrid: TreeGrid = new TreeGrid({
  dataSource: projectData,
  idMapping: "TaskID",
  parentIdMapping: "parentID",
  treeColumnIndex: 1,
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: "Row"
  },
  toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
  columns: [
    { field: "TaskID", headerText: "Task ID", isPrimaryKey: true, textAlign: "Right", width: 70 },
    { field: "TaskName", headerText: "Task Name", width: 100 },
    { field: "StartDate", headerText: "Start Date", textAlign: "Right", width: 100, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" } },
    { field: "EndDate", headerText: "End Date", textAlign: "Right", width: 100, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" } },
    { field: "Duration", headerText: "Duration", textAlign: "Right", width: 90 },
    { field: "Priority", headerText: "Priority", width: 90, editType: "dropdownedit",
      edit: {
        params: {
          actionComplete: () => false,
          allowFiltering: true,
          dataSource: new DataManager(priorityData),
          fields: { text: "priorityName", value: "priorityName" },
          query: new Query()
        }
      }
    }
  ]
});
treegrid.appendTo("#TreeGrid");



