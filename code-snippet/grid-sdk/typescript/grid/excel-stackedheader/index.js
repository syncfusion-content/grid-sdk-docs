ej.grids.Grid.Inject(ej.grids.ExcelExport, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    height: 272,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', visible: false, width: 100 },
        { headerText: 'Order Details', textAlign: 'Center', columns: [
            { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 130, textAlign: 'Right', minWidth: 10 },
            { field: 'Freight', headerText: 'Freight ($)', format: 'C1', width: 120, textAlign: 'Right', minWidth: 10 }
        ]},
        { headerText: 'Ship Details', textAlign: 'Center', columns: [
            { field: 'ShippedDate', headerText: 'Shipped Date', format: 'yMd', width: 150, textAlign: 'Right', minWidth: 10 },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150, minWidth: 10 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150, minWidth: 10, visible: false }
        ]}
    ],
    toolbarClick: function(args) {
        if (args.item.id === 'Grid_excelexport') {
            grid.columns[2].columns[0].visible = false; 
            grid.columns[3].columns[2].visible = true;  
            grid.excelExport();
        }
    },
    excelExportComplete: function(args) {
        grid.columns[2].columns[0].visible = true; 
        grid.columns[3].columns[2].visible = false; 
    }
});
grid.appendTo('#Grid');