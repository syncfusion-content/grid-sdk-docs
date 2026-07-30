var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: complexData,
    childMapping: 'subtasks',
    height: 315,
    treeColumnIndex: 1,
    columns: [
                { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 180 },
                { field: 'assignee.firstName', headerText: 'Assignee', width: 90},
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

