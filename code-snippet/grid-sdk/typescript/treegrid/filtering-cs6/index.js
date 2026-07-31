ej.treegrid.TreeGrid.Inject(ej.treegrid.Filter);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 275,
    allowFiltering: true,
    filterSettings: {type: 'Menu'},
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 75, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 120, textAlign: 'Left' },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'
        }
    ]
});

treeGridObj.appendTo('#TreeGrid');

