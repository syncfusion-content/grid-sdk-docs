var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: htmlData,
    childMapping: 'subtasks',
    height: 300,
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: '<span> Task ID </span>', disableHtmlEncode: true, width: 140, textAlign: 'Right' },
        { field: 'taskName', headerText: '<span> Task Name </span>', disableHtmlEncode: false, width: 180 },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
        { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

