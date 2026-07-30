ej.grids.Grid.Inject(ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    toolbar: ['PdfExport'],
    height: 272,
    allowPdfExport: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', visible: false, width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'ShipCountry', width: 150 }
    ],
    toolbarClick: toolbarClick,
    pdfExportComplete: pdfExportComplete
});
grid.appendTo('#Grid');

var queryClone;
function toolbarClick(args) {
    if (args.item.id === 'Grid_pdfexport') {
        queryClone = grid.query;
        grid.query = new ej.data.Query().addParams('recordcount', '15');
        document.getElementById('message').innerText =
            'Key: ' + grid.query.params[0].key +
            ' and Value: ' + grid.query.params[0].value + ' on ' + args.item.text;
        grid.pdfExport();
    }
}

function pdfExportComplete() {
    grid.query = queryClone;
}