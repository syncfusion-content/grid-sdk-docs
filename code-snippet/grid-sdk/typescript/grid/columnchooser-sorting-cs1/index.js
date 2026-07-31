ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.ColumnChooser);

var grid = new ej.grids.Grid({
    dataSource: data,
    showColumnChooser: true,
    toolbar: ['ColumnChooser'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, isPrimaryKey: true, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer Name', width: 150, textAlign: 'Left' },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCity', headerText: 'Ship City', width: 150, showInColumnChooser: false },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 150, visible: false },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    ],
    height: 235
});
grid.appendTo('#Grid');

// Sort the column chooser list based on the sort direction.
grid.beforeOpenColumnChooser = function (args) {
   args.sortDirection = "Ascending";
};
