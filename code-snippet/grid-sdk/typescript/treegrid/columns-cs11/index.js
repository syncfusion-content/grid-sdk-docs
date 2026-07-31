ej.treegrid.TreeGrid.Inject(ej.treegrid.Filter,ej.treegrid.Sort);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 270,
    treeColumnIndex: 1,
    allowSorting: true,
    allowFiltering: true,
    columns: [
                { 
                    field: 'taskID', headerText: 'Task ID', allowSorting: false, width: 90, textAlign: 'Right' 
                },
                { field: 'taskName', headerText: 'Task Name', width: 180 },
                {
                    field: 'startDate', headerText: 'Start Date', allowFiltering: false, width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                }, 
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

