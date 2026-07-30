var treegrid = new ej.treegrid.TreeGrid({
  dataSource: taskData,
  idMapping: 'TaskID',
  parentIdMapping: 'ParentID',
  treeColumnIndex: 1,
  height: 600,
  enableVirtualization: true,
  selectionSettings: { persistSelection: true },
  columns: [
    { type: 'checkbox', width: 50 },
    { field: 'Task', headerText: 'Task', width: 300 },
    { field: 'TaskID', isPrimaryKey: true, visible: false },
    { field: 'AssignedTo', headerText: 'Assigned To', width: 140 },
    { field: 'StartDate', headerText: 'Start', width: 180, format: 'yMd' },
    { field: 'DueDate', headerText: 'Due', width: 180, format: 'yMd' },
    { field: 'Priority', headerText: 'Priority', width: 90 },
    { field: 'Progress', headerText: 'Status', width: 110 }
  ]
});
treegrid.appendTo('#TreeGrid');

treegrid.grid.isRowSelectable = function (data, columns) {
    return data.Progress !== 'Completed';
};