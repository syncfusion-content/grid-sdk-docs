ej.treegrid.TreeGrid.Inject(ej.treegrid.ColumnChooser,ej.treegrid.Toolbar);


var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    showColumnChooser: true,
    treeColumnIndex: 1,
    childMapping: 'subtasks',
    toolbar: ['ColumnChooser'],
    columns: [
        { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'taskName', headerText: 'Task Name', width: 240, showInColumnChooser: false },
        { field: 'startDate', headerText: 'Start Date', width: 110, format: 'yMd' },
        { field: 'endDate', headerText: 'End Date', width: 110, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'duration', headerText: 'Duration', width: 100, textAlign: 'Right' },
        { field: 'progress', headerText: 'Progress', width: 100, textAlign: 'Right' },
        { field: 'priority', headerText: 'Priority', width: 90 }
    ],
    height: 315
});

treeGridObj.appendTo('#TreeGrid');


