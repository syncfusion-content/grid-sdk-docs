ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.Toolbar);

var priorityData = [
  { priorityName: "Normal", priorityId: "1" },
  { priorityName: "High", priorityId: "2" }
];
var durationData = [
  { durationValue: 2, priorityId: "1", durationId: 2 },
  { durationValue: 3, priorityId: "1", durationId: 3 },
  { durationValue: 4, priorityId: "1", durationId: 4 },
  { durationValue: 11, priorityId: "2", durationId: 11 },
  { durationValue: 15, priorityId: "2", durationId: 15 },
  { durationValue: 20, priorityId: "2", durationId: 20 }
];
var priorityElem;
var priorityObj;

var durationElem;
var durationObj;

var treeGrid = new ej.treegrid.TreeGrid({
  dataSource: var projectData,
  idMapping: "TaskID",
  parentIdMapping: "parentID",
  treeColumnIndex: 1,
  height: 273,
  toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: "Row"
  },
  columns: [
    { field: "TaskID", headerText: "Task ID", textAlign: "Right", isPrimaryKey: true, width: 70 },
    { field: "TaskName", headerText: "Task Name", width: 100 },
    { field: "StartDate", headerText: "Start Date", textAlign: "Right", width: 100, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" } },
    { field: "EndDate", headerText: "End Date", textAlign: "Right", width: 90, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" } },
    { field: "Priority", headerText: "Priority", width: 90, editType: "dropdownedit",
      edit: {
        create: () => {
          priorityElem = document.createElement("input");
          return priorityElem;
        },
        read: () => {
          return priorityObj.text;
        },
        destroy: () => {
          priorityObj.destroy();
        },
        write: () => {
          priorityObj = new ej.dropdowns.DropDownList({
            dataSource: new ej.data.DataManager(priorityData),
            fields: { value: "priorityId", text: "priorityName" },
            change: () => {
              durationObj.enabled = true;
              var tempQuery = new ej.data.Query().where(
                "priorityId",
                "equal",
                priorityObj.value
              );
              durationObj.query = tempQuery;
              durationObj.text = null;
              durationObj.dataBind();
            },
            placeholder: "Select a priority",
            floatLabelType: "Never"
          });
          priorityObj.appendTo(priorityElem);
        }
      }
    },
    { field: "Duration", headerText: "Duration", textAlign: "Right", editType: "dropdownedit", width: 90,
      edit: {
        create: () => {
          durationElem = document.createElement("input");
          return durationElem;
        },
        read: () => {
          return durationObj.text;
        },
        destroy: () => {
          durationObj.destroy();
        },
        write: () => {
          durationObj = new ej.dropdowns.DropDownList({
            dataSource: new ej.data.DataManager(durationData),
            fields: { value: "durationId", text: "durationValue" },
            enabled: false,
            placeholder: "Select a duration",
            floatLabelType: "Never"
          });
          durationObj.appendTo(durationElem);
        }
      }
    },
    { field: "Progress", headerText: "Progress", textAlign: "Right", width: 90 }
  ]
});
treeGrid.appendTo("#TreeGrid");

