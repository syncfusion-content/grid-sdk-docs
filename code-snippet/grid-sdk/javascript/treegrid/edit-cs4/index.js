ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.CommandColumn);

var onClick = function(args){
    var rowIndex = ej.base.closest(args.target, '.e-row').rowIndex;
    var data = treeGridObj.getCurrentViewRecords();
    alert(JSON.stringify(data[rowIndex]));
}

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' },
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right'},
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
        { headerText: 'Commands', width: 120, commands: [{ buttonOption: { content: 'Details', cssClass: 'e-flat', click: onClick } }]},
    ],
    height: 270
});

treeGridObj.appendTo('#TreeGrid');

