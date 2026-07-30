ej.treegrid.TreeGrid.Inject(ej.treegrid.RowDD);

var treegrid = new ej.treegrid.TreeGrid({
  dataSource: sampleData,
  childMapping: 'subtasks',
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
document.getElementById('Indenting').addEventListener('click', Indent);
document.getElementById('Outdenting').addEventListener('click', Outdent);
function Indent() {
  treegrid.indent(treegrid.getCurrentViewRecords()[2]);
}
function Outdent() {
  treegrid.outdent(treegrid.getCurrentViewRecords()[2]);
}


