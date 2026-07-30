var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: var sampleData,
    childMapping: 'subtasks',
    allowSelection: true,
    selectionSettings: { type: 'Multiple', mode: 'Row' },
    treeColumnIndex: 1,
    copyHierarchyMode: 'Parent',
    height: 230,
    allowPaging: true,
    pageSettings: { pageSize: 10 },
    columns: [
        { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 70 },
        { field: 'taskName', headerText: 'Task Name', width: 200, textAlign:'Left' },
        { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 100, format: { skeleton: 'yMd', type: 'date' } },
        { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
        { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 90 }
    ]
});
treeGridObj.appendTo('#TreeGrid');

var dropDownMode = new ej.dropdowns.DropDownList({
        dataSource: [
            { id: 'Parent', mode: 'Parent' },
            { id: 'Child', mode: 'Child' },
            { id: 'Both', mode: 'Both' },
            { id: 'None', mode: 'None' },
        ],
        fields: { text: 'mode', value: 'id' },
        value: 'Parent',
        change: function (e) {
            var mode = e.value;
            treeGridObj.copyHierarchyMode = mode;
        }
});

dropDownMode.appendTo('#mode');

