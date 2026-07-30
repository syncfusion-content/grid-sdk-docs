
var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: '270',
    width: '100%',
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', width: 110, textAlign: 'Right' }
    ],
    rowSelected: rowSelected
});

treeGridObj.appendTo('#TreeGrid');

var numeric = new  ej.inputs.NumericTextBox({
    width: 200,
    min: 0,
    showSpinButton: false,
    format: 'N',
    placeholder: 'Enter index to select a row',
    change: onchange
}, '#numeric');

function onchange(){
    treeGridObj.selectRow(parseInt(numeric.getText(), 10));
}

function rowSelected(args) {
    var rowHeight = treeGridObj.getRows()[treeGridObj.getSelectedRowIndexes()[0]].scrollHeight;
    treeGridObj.getContent().children[0].scrollTop = rowHeight * treeGridObj.getSelectedRowIndexes()[0];
}


