ej.treegrid.TreeGrid.Inject(ej.treegrid.Reorder);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowReordering: true,
    height: 285,
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
        { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

var reorderMultipleCols = new ej.buttons.Button();
reorderMultipleCols.appendTo('#reorderMultipleCols');

document.getElementById('reorderMultipleCols').addEventListener('click', function(){
    treeGridObj.reorderColumns(['taskID','duration'],'progress');
});

