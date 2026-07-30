var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 270,
    treeColumnIndex: 1,
    columns: [
                { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 180 },
                {
                    field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

var show = new ej.buttons.Button({ cssClass: 'e-flat' }, '#show');
var hide = new ej.buttons.Button({ cssClass: 'e-flat' }, '#hide');

document.getElementById('show').onclick = function() {
    treeGridObj.showColumns(['Task ID', 'Duration']); //show by HeaderText
};

document.getElementById('hide').onclick = function() {
    treeGridObj.hideColumns(['Task ID', 'Duration']); //hide by HeaderText
};

