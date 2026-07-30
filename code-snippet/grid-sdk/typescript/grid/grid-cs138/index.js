ej.grids.Grid.Inject(ej.grids.Page, ej.grids.PdfExport, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: purchaseData,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 80 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 260
});
grid.appendTo('#Grid');

grid.toolbarClick = function(args) {
    if (args['item'].id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

grid.pdfHeaderQueryCellInfo = function(args){
    if (args.cell && args.cell.row && args.cell.row.pdfGrid) {
        args.cell.row.pdfGrid.repeatHeader = true;
    }
}