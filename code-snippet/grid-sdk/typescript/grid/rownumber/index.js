ej.grids.Grid.Inject(ej.grids.Sort, ej.grids.Filter);

var grid = new ej.grids.Grid({
    dataSource: groceryProducts,
    allowSorting: true,
    allowFiltering: true,
    columns: [
        { type: 'RowNumber', textAlign: 'Center' },
        { field: 'ProductID', headerText: 'Product ID', width: 120, visible: false, textAlign: 'Right', isPrimaryKey: true, type: 'number' },
        { field: 'ProductName', headerText: 'Products', width: 160, allowEditing: false },
        { field: 'Category', headerText: 'Category', width: 140, allowEditing: false },
        { field: 'SellingPrice', headerText: 'Price', width: 130, format: 'C', textAlign: 'Right' },
        { field: 'AvailableStock', headerText: 'In-Stock', width: 120, textAlign: 'Right', template: '#availableStockTemplate' },
        { field: 'SoldStock', headerText: 'Sold', width: 120, textAlign: 'Right', template: '#soldStockTemplate' }
    ],
    height: 273
});
grid.appendTo('#Grid');