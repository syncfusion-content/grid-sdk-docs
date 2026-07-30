var clickHandler = function(args){
    if (args.item.id === 'toolbarfilter') {
        treeGridObj.filterByColumn('taskName', 'startswith', 'Testing');
    }
};

ej.treegrid.TreeGrid.Inject(ej.treegrid.Filter, ej.treegrid.Toolbar);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    toolbar: [{text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'toolbarfilter', align:'Right'}],
    treeColumnIndex: 1,
    allowFiltering: true,
    toolbarClick: clickHandler,
    height: 265,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 160 },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

