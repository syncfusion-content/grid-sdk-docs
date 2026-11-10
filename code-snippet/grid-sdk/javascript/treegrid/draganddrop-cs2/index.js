ej.treegrid.TreeGrid.Inject(ej.treegrid.RowDD);

var treegrid = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 275,
    treeColumnIndex: 1,
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: 'TreeGrid2' },
    selectionSettings: { type: 'Multiple' },
    columns: [
            { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180 },
            {
                field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
            },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treegrid.appendTo('#TreeGrid1');

var secondTree = new ej.treegrid.TreeGrid({
    dataSource: [],
    childMapping: 'subtasks',
    height: 275,
    treeColumnIndex: 1,
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: 'TreeGrid3' },
    selectionSettings: { type: 'Multiple' },
    columns: [
            { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180 },
            {
                field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
            },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

secondTree.appendTo('#TreeGrid2');

var thirdTree = new ej.treegrid.TreeGrid({
    dataSource: [],
    childMapping: 'subtasks',
    height: 275,
    treeColumnIndex: 1,
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: 'TreeGrid1' },
    selectionSettings: { type: 'Multiple' },
    columns: [
            { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180 },
            {
                field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
            },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

thirdTree.appendTo('#TreeGrid3');
