ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.Toolbar);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, showDeleteConfirmDialog: true, mode: 'Cell' },
    treeColumnIndex: 1,
    columns: [
        {
            field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right',
            validationRules: { required: true, number: true }, width: 100
        },
        {
            field: 'taskName', headerText: 'Task Name', editType: 'stringedit',
            validationRules: { required: true }, width: 170
        },
        {
            field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 180,
            editType: 'datetimepickeredit', edit: { params: { format: 'M/d/y hh:mm a' } },
            format: { format: 'M/d/y hh:mm a', type: 'dateTime' }, validationRules: { date: true }
        },
        {
            field: 'approved', headerText: 'Approved', width: 110, editType: 'booleanedit',
            type: 'boolean', displayAsCheckBox: true
        },
        {
            field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 120,
            editType: 'numericedit', validationRules: { number: true, min: 0 }, edit: { params: { format: 'n' } }
        },
        { field: 'priority', headerText: 'Priority', width: 110, editType: 'dropdownedit', validationRules: { required: true } }
    ],
    height: 270
});

treeGridObj.appendTo('#TreeGrid');

