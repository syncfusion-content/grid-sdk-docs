var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: stringData,
    childMapping: 'subtasks',
    height: 315,
    treeColumnIndex: 1,
    columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 110 },
            { field: 'taskName', headerText: 'Task Name', width: 180 },
            { 
                field: 'name', headerText: 'Assignee', textAlign: 'Left',  valueAccessor: orderFormatter, width: 150 
            },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    height: 315
});

treeGridObj.appendTo('#TreeGrid');

function orderFormatter(field, data, column) {
    return data[field].map(s =>{
         return s.lastName || s.firstName }).join(' '); 
}

