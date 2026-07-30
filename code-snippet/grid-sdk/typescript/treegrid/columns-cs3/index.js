ej.treegrid.TreeGrid.Inject(ej.treegrid.Page,ej.treegrid.Resize,ej.treegrid.Filter,ej.treegrid.Sort,ej.treegrid.ColumnMenu);

var treeGridObj = new ej.treegrid.TreeGrid({
     dataSource: sampleData,
    childMapping: 'subtasks',
    height: 315,
    allowFiltering: true,
    allowResizing: true,
    filterSettings: { type: 'Menu' },
    allowSorting: true,
    showColumnMenu: true,
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right',showColumnMenu: false, type: 'date',format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

