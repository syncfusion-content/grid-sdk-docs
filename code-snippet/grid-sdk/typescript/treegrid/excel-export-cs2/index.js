ej.treegrid.TreeGrid.Inject(ej.treegrid.Page, ej.treegrid.ExcelExport, ej.treegrid.Toolbar);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowExcelExport: true,
    allowPaging: true,
    height: 220,
    pageSettings: {pageSize: 7},
    toolbar: ['ExcelExport'],
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');
treeGridObj.toolbarClick = function(args) {
    if (args['item'].text === 'Excel Export') {
        treeGridObj.excelExport();
    }
}

treeGridObj.excelQueryCellInfo = function(args) {
    if(args.column.field == 'duration'){
        if(args.value === 0 || args.value === "") {
            args.style = {backgroundColor: '#336c12'};
        }
        else if(args.value < 3) {
            args.style = {backgroundColor: '#7b2b1d'};
        }
    }
}

treeGridObj.queryCellInfo = function(args) {
    if (args.data['duration'] == 0 && args.column.field === 'duration' ) {
        args.cell.style.background= '#336c12';
    } else if (args.data['duration'] < 3 && args.column.field === 'duration') {
        args.cell.style.background= '#7b2b1d';
    }
}

