ej.treegrid.TreeGrid.Inject(ej.treegrid.RowDD);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 275,
    treeColumnIndex: 1,
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: ['secondTree', 'thirdTree'] },
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

treeGridObj.appendTo('#TreeGrid');

var secondTree = new ej.treegrid.TreeGrid({
    dataSource: [],
    childMapping: 'subtasks',
    height: 275,
    treeColumnIndex: 1,
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: ['TreeGrid', 'thirdTree'] },
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

secondTree.appendTo('#secondTree');

var thirdTree = new ej.treegrid.TreeGrid({
    dataSource: [],
    childMapping: 'subtasks',
    height: 275,
    treeColumnIndex: 1,
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: ['TreeGrid', 'secondTree'] },
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

thirdTree.appendTo('#thirdTree');
