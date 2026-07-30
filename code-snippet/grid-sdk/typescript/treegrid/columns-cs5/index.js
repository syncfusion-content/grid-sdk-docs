ej.treegrid.TreeGrid.Inject(ej.treegrid.ColumnMenu,ej.treegrid.Sort,ej.treegrid.Filter);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 315,
    showColumnMenu: true,
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    treeColumnIndex: 1,
    columnMenuOpen: function (args) {
        for (const item of args.items) {
            if (item.text === 'Filter' && args.column.field === 'taskName') {
                item.hide = true;
            } else {
                item.hide = false;
            }
        }
    },
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

