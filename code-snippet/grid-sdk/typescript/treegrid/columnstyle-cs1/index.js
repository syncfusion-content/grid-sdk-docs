
var treegrid = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    height: 275,
    columns: [
       { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
       { field: 'taskName', headerText: 'Task Name', width: 200,customAttributes: { class: 'customcss' },  textAlign: 'Left' },
       { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
       { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
    ]
});
treegrid.appendTo('#TreeGrid');

