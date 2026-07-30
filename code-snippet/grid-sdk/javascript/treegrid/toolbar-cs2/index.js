var clickHandler = function(args){
    if (args.item.text === 'Click') {
        alert("Custom toolbar click...");
    }
};

ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.Toolbar);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    toolbar: ['ExpandAll', 'CollapseAll', { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-time', id: 'Click' }],
    treeColumnIndex: 1,
    toolbarClick: clickHandler,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    height: 270,
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

