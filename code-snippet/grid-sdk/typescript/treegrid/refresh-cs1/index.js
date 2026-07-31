var treegrid = new ej.treegrid.TreeGrid({
    dataSource: projectData,
    idMapping: 'TaskID',
    parentIdMapping: 'parentID',
    treeColumnIndex: 1,
    columns: [
     { field: 'TaskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
     { field: 'TaskName', headerText: 'Task Name', width: 100, textAlign: 'Left' },
     { field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'},
     { field: 'EndDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'},
     { field: 'Duration', headerText: 'Duration', width: 90, textAlign: 'Right' },
     { field: 'Priority', headerText: 'Priority', width: 90, textAlign: 'Right' }
    ],
});
treegrid.appendTo('#TreeGrid');

var add = new ej.buttons.Button({}, '#add');
var dele = new ej.buttons.Button({}, '#delete');

document.getElementById('add').onclick = () => {
    var data = { TaskID: 111, TaskName: "New Task", Duration: 40, StartDate: new Date(8367642e5), Priority: "High" };
    (treegrid.dataSource).unshift(data); // add new record.
    treegrid.refresh(); // refresh the TreeGrid.
};

document.getElementById('delete').onclick = () => {
    if (treegrid.getSelectedRowIndexes().length) {
        var selectedRow = treegrid.getSelectedRowIndexes()[0];
        (treegrid.dataSource).splice(selectedRow, 1); // delete the selected record.
    } else {
        alert("No records selected for delete operation");
    }
    treegrid.refresh(); // refresh the TreeGrid.
};

