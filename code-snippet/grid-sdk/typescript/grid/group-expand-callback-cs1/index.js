ej.grids.Grid.Inject(ej.grids.Group);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { columns: ['Category', 'Region'], isGroupOpenByDefault: (args) => args.level === 1 && args.key === 'Beverages' },
    columns: [
        { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 120 },
        { field: 'ProductName', headerText: 'Product Name', width: 150 },
        { field: 'Category', headerText: 'Category', width: 140 },
        { field: 'Region', headerText: 'Region', width: 130 },
        { field: 'UnitPrice', headerText: 'Unit Price', textAlign: 'Right', width: 120 },
        { field: 'UnitsInStock', headerText: 'Units In Stock', textAlign: 'Right', width: 140 }
    ],
    height: 400
});
grid.appendTo('#Grid');