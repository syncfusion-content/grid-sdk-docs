var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 315,
    treeColumnIndex: 1,
    columns: [
                { 
                    field: 'taskID', headerText: 'Task ID', hideAtMedia: '(min-width: 700px)', width: 90, textAlign: 'Right' 
                },// column hides when browser screen width lessthan 700px;
                { field: 'taskName', headerText: 'Task Name', width: 180 },
                {
                    field: 'startDate', headerText: 'Start Date', hideAtMedia: '(max-width: 500px)',width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                }, // column shows when browser screen width lessthan or equalto 500px;
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

