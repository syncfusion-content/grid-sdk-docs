ej.treegrid.TreeGrid.Inject(ej.treegrid.ColumnMenu,ej.treegrid.Sort);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 315,
    showColumnMenu: true,
    allowSorting: true,
    sortSettings: {
      columns: [{ direction: 'Ascending', field: 'taskID' }],
    },
    columnMenuItems: [{ text: 'Clear Sorting', id: 'clearsorting' }],
    columnMenuClick: function (args) {
        if (args.item.id === 'clearsorting') {
            treeGridObj.clearSorting();
        }
    },
    treeColumnIndex: 1,
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

