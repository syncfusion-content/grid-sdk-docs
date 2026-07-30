ej.treegrid.TreeGrid.Inject(ej.treegrid.Freeze);
var treegrid = new ej.treegrid.TreeGrid({
        dataSource: sampleData,
        height: 317,
        allowSelection: false,
        frozenRows: 3,
        frozenColumns: 2,
        treeColumnIndex: 1,
        childMapping: 'subtasks',
        columns: [
                { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 100 },
                { field: 'taskName', headerText: 'Task Name', width: 230 },
                { field: 'startDate', headerText: 'Start Date', width: 120, textAlign: 'Right',
                    type: 'date', format: { type: 'dateTime', format: 'dd/MM/yyyy' } },
                { field: 'endDate', headerText: 'End Date', width: 120, textAlign: 'Right',
                    type: 'date', format: { type: 'dateTime', format: 'dd/MM/yyyy' } },
                { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 110 },
                { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 120 },
                { field: 'priority', headerText: 'Priority', textAlign: 'Left', width: 120 },
                { field: 'approved', headerText: 'Approved', width: 110, textAlign: 'Left' }
    ]
    });
    treegrid.appendTo('#TreeGrid');

