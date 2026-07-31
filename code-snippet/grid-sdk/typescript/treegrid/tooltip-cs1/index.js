var treegrid = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    queryCellInfo: tooltip,
    columns: [
     { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
     { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
     { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'},
     { field: 'endDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
     { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
     { field: 'priority', headerText: 'Priority', width: 90 }
    ],
});
treegrid.appendTo('#TreeGrid');
 function tooltip(args) { // event triggers on every cell render.
    var tooltip = new  ej.popups.Tooltip({
        content: args.data[args.column.field].toString() // add Essential JS2 tooltip for every cell.
    },args.cell);
}

