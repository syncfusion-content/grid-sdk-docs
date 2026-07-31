ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.Toolbar);

var elem;
var autoCompleteObj;
var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    height: 400,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        mode: 'Cell',
        newRowPosition: 'Below'
    },
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    columns: [
        {
            field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right', width: 90
        },
        { field: 'taskName', headerText: 'Task Name', editType: 'stringedit', edit: {
            create: function(){
                    elem = document.createElement('input');
                    return elem;
                },
            read: function() {
                    return autoCompleteObj.value;
                },
            destroy: function() {
                    autoCompleteObj.destroy();
                },
            write: function(args){
                    autoCompleteObj = new ej.dropdowns.AutoComplete({
                        dataSource: treeGridObj.grid.dataSource,
                        fields: { value: 'taskName' },
                        value: args.rowData[args.column.field]
                });
                autoCompleteObj.appendTo(elem);
            }
            },
            width: 180  },
        { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 130, editType: 'datepickeredit', type: 'date', format: 'yMd' },
        {
            field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 80, editType: 'numericedit', edit: { params: {  format: 'n'}}
        }
    ]
});

treeGridObj.appendTo('#TreeGrid');

