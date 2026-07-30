var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: complexData,
    childMapping: 'subtasks',
    height: 300,
    gridLines: 'Both',
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', clipMode: 'EllipsisWithTooltip', width: 180 },
        { field: 'assignee.firstName', headerText: 'Assignee', clipMode: 'Ellipsis', width: 90},
        { field: 'priority', headerText: 'Priority', clipMode: 'Clip', width: 150 },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

