ej.treegrid.TreeGrid.Inject(ej.treegrid.RowDD);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 275,
    treeColumnIndex: 1,
    allowRowDragAndDrop: true,
    columns: [
            { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180 },
            {
                field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
            },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    rowDrop : function (args) {
        if (args.dropPosition == 'middleSegment') {
          args.cancel = true;
          treeGridObj.reorderRows([args.fromIndex], args.dropIndex, 'above');
        }
    }
});

treeGridObj.appendTo('#TreeGrid');


