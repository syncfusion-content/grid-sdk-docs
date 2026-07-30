ej.treegrid.TreeGrid.Inject(ej.treegrid.Toolbar, ej.treegrid.RowDD);

var treegrid = new ej.treegrid.TreeGrid({
  dataSource: sampleData,
  childMapping: 'subtasks',
  toolbar: ['Indent', 'Outdent'],
  selectedRowIndex: 2,
  treeColumnIndex: 1,
  columns: [
      { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right'},
      { field: 'taskName', headerText: 'Task Name', width: 180 },
      { field: 'priority', headerText: 'Priority', width: 90 },
      { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
  ],
  height: 270
});
treegrid.appendTo('#TreeGrid');


