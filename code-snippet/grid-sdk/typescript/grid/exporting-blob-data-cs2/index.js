var excelExpComplete = (args) => {
    // This event will be triggered when excel exporting.
    args.promise.then((e) => {
        // In this `then` function, you can get blob data through the arguments after promise resolved.          
        exportBlob(e.blobData)
    });
};
var pdfExpComplete= (args) => {
    // This event will be triggered when pdf exporting.
    args.promise.then((e) => {
         // In this `then` function, you can get blob data through the arguments after promise resolved.                
        exportBlob(e.blobData)
    });
};

var exportBlob= (blob) => {
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    var url= window.URL.createObjectURL(blob); // Fix typo here
    a.href = url;
    a.download = 'Export';
    a.click();
    window.URL.revokeObjectURL(url); // Fix typo here
    document.body.removeChild(a);
}

ej.grids.Grid.Inject(ej.grids.ExcelExport, ej.grids.PdfExport, ej.grids.Page, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowExcelExport: true,
    allowPdfExport: true,
    excelExportComplete: excelExpComplete,
    pdfExportComplete: pdfExpComplete,
    toolbar: ['PdfExport','ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', width: 150, headerText: 'Customer ID' },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ]
});
grid.appendTo('#Grid');

grid.toolbarClick = (args) => {
    if (args['item'].id === 'Grid_pdfexport') {
        grid.pdfExport(undefined, undefined, undefined, true);
    }
    if (args['item'].id === 'Grid_excelexport') {
        grid.excelExport(undefined, undefined, undefined, true);
    }
}