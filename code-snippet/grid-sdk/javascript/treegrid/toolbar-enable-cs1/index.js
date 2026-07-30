var clickHandler = function(args){
    if (args.item.text === 'QuickFilter') {
        treeGridObj.filterByColumn('taskName', 'startswith', 'Testing');
    }
    if (args.item.text === 'ClearFilter') {
        treeGridObj.clearFiltering();
    }
};

ej.treegrid.TreeGrid.Inject(ej.treegrid.Filter, ej.treegrid.Toolbar);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    toolbar: ['QuickFilter', 'ClearFilter'],
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

var enable = new ej.buttons.Button({}, '#enable');
var disable = new ej.buttons.Button({}, '#disable');

enable.element.onclick = function(){
    treeGridObj.toolbarModule.enableItems([treeGridObj.element.id + '_gridcontrol_QuickFilter', treeGridObj.element.id + '_gridcontrol_ClearFilter'], true);// enable toolbar items.
};

disable.element.onclick = function(){
    treeGridObj.toolbarModule.enableItems([treeGridObj.element.id + '_gridcontrol_QuickFilter', treeGridObj.element.id + '_gridcontrol_ClearFilter'], false);// disable toolbar items.
};


