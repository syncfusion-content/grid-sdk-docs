ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.Toolbar);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog',
    template: '#dialogtemplate' },
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right'},
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
        },
        { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' }
    ],
    height: 270,
    actionBegin: function(args){
        if (args.requestType === 'save') {
            // cast string to integer value.
            args.data['progress'] = parseFloat(args.form.querySelector("#progress").value);
        }
    },
    actionComplete: function(args){
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('progress', {max: 100});
            // EJ2-control Rendering
            var priorityData = ej.data.DataUtil.distinct(treeGridObj.grid.dataSource, 'priority',true);
            new ej.dropdowns.DropDownList({value: args.rowData.priority, popupHeight: '200px', floatLabelType: 'Always',
                dataSource: priorityData, fields: {text: 'priority', value: 'priority'}, placeholder: 'Priority'}, args.form.elements.namedItem('priority'));

            new ej.calendars.DatePicker({value: args.rowData.startDate, floatLabelType: 'Always', placeholder: 'Start Date'}, args.form.elements.namedItem('startDate'))

            new ej.calendars.DatePicker({value: args.rowData.endDate, floatLabelType: 'Always', placeholder: 'End Date'}, args.form.elements.namedItem('endDate'))

            new ej.buttons.CheckBox({ label: 'Approved', checked: args.rowData.approved }, args.form.elements.namedItem('approved'));

            new ej.inputs.NumericTextBox({value: args.rowData.progress, format: 'n', placeholder: 'Progress', floatLabelType: 'Always' }, args.form.elements.namedItem('progress'));
             // Set initail Focus
            if (args.requestType === 'beginEdit') {
                (args.form.elements.namedItem('taskName')).focus();
            }
        }
    }
});

treeGridObj.appendTo('#TreeGrid');

