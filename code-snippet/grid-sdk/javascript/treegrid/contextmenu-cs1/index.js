ej.treegrid.TreeGrid.Inject(ej.treegrid.Resize, ej.treegrid.ContextMenu, ej.treegrid.Edit, 
ej.treegrid.Page, ej.treegrid.PdfExport, ej.treegrid.ExcelExport, ej.treegrid.RowDD);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowSorting: true,
    allowResizing: true,
    allowPaging: true,
    pageSettings: {pageSize: 7},
    editSettings: {allowEditing: true, allowAdding: true, allowDeleting: true, mode:"Row"},
    allowPdfExport: true,
    allowExcelExport: true,
    contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', 'Edit','Delete', 'Save', 'Cancel', 'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage', 'LastPage', 'NextPage', 'Indent', 'Outdent'],
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, editType: 'datePickeredit', textAlign: 'Right', type: 'date', format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', width: 80, editType: 'numericedit', textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

