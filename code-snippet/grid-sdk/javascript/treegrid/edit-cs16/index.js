ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.Toolbar);

var customFn = function(args) {
    return args['value'].length <= 8;
};

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, showDeleteConfirmDialog: true, mode: 'Cell' },
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right'},
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', editType: 'datepickeredit', type: 'date', format: 'yMd'
        },
        { field: 'priority', headerText: 'Priority', width: 80, validationRules: { required: true, minLength: [customFn, 'Value should be within 8 letters'] } }
    ],
    height: 270
});

treeGridObj.appendTo('#TreeGrid');

