var grid = new ej.grids.Grid({
    dataSource: data,
    height: 272,
    toolbar: ['ExcelExport'],
    allowExcelExport: true,
    toolbarClick: toolbarClick,
    excelExportComplete: excelExportComplete,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', visible: false, width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid');

var message = document.getElementById('message');

function toolbarClick(args) {
    if (args.item.id === 'Grid_excelexport') {
        var queryClone = grid.query;
        grid.query = new ej.data.Query().addParams('recordcount', '15');
        message.innerText = 'Key: ' + grid.query.params[0].key + ' and Value: ' + grid.query.params[0].value + ' on ' + args.item.text;
        grid.excelExport();
    }
}

function excelExportComplete(args) {
    grid.query = queryClone;
}