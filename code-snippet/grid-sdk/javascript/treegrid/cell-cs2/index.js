var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 300,
    queryCellInfo: customiseCell,
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
        { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

function customiseCell(args) {
    if (args.column.field === 'progress' && +args.cell.innerHTML > 90 && +args.cell.innerHTML <= 100){
        args.cell.setAttribute('style', 'background-color:#336c12;color:white;');
    } else if (+args.cell.innerHTML > 20 && args.column.field === 'progress') {
        args.cell.setAttribute('style', 'background-color:#7b2b1d;color:white;');
    }
}

