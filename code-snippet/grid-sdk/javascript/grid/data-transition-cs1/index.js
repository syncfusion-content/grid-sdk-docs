ej.grids.Grid.Inject(ej.grids.Sort, ej.grids.Filter, ej.grids.Page, ej.grids.Edit);

function randomId() {
    return 'S-' + Math.floor(1000 * Math.random());
}

let grid = new ej.grids.Grid({
    dataSource: productSalesDetails,
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'Excel' },
    allowPaging: true,
    pageSettings: { pageSize: 8, pageCount: 4 },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'SaleID', headerText: 'Sale ID', width: 100, isPrimaryKey: true, textAlign: 'Right' },
        { field: 'ProductName', headerText: 'Product Name', width: 120 },
        { field: 'Category', headerText: 'Category', clipMode: 'EllipsisWithTooltip', width: 100 },
        { field: 'SalesPerson', headerText: 'Sales Person', width: 110 },
        { field: 'UnitsSold', headerText: 'Units Sold', width: 100, textAlign: 'Right' },
        { field: 'UnitPrice', headerText: 'Unit Price', format: 'C2', width: 110, textAlign: 'Right' },
        { field: 'TotalRevenue', headerText: 'Revenue', format: 'C2', width: 110, textAlign: 'Right' }
    ]
});
grid.appendTo('#Grid');

new ej.buttons.Button({ cssClass: 'e-outline' }, '#addRecord');
new ej.buttons.Button({ cssClass: 'e-outline' }, '#deleteRecord');
new ej.buttons.Button({ cssClass: 'e-outline' }, '#addRecordAsync');
new ej.buttons.Button({ cssClass: 'e-outline' }, '#updateRecordAsync');
new ej.buttons.Button({ cssClass: 'e-outline' }, '#deleteRecordAsync');

document.getElementById('addRecord').addEventListener('click', function () {
    grid.addRecord({
        SaleID: randomId(), ProductName: 'Smart Lamp', UnitsSold: Math.floor(20 * Math.random()) + 1,
        UnitPrice: 120.5, TotalRevenue: 2410, IsDiscounted: false, Category: 'Home Tech', Region: 'Central', SalesPerson: 'Bob'
    });
});

document.getElementById('deleteRecord').addEventListener('click', function () {
    grid.deleteRecord();
});

document.getElementById('addRecordAsync').addEventListener('click', async function () {
    var records = [
        { SaleID: randomId(), ProductName: 'Smart Watch', UnitsSold: 12, UnitPrice: 250, TotalRevenue: 3000, IsDiscounted: false, Category: 'Wearables', Region: 'East', SalesPerson: 'Julia' },
        { SaleID: randomId(), ProductName: 'Gaming Laptop', UnitsSold: 6, UnitPrice: 1200, TotalRevenue: 7200, IsDiscounted: true, Category: 'Electronics', Region: 'West', SalesPerson: 'Charlie' }
    ];
    await Promise.all(records.map(function (record) { return grid.addRecordAsync(record); }));
});

document.getElementById('updateRecordAsync').addEventListener('click', async function () {
    var row = grid.getCurrentViewRecords()[1];
    await grid.updateRowAsync(1, {
        SaleID: row.SaleID,
        ProductName: 'Phone Pro',
        UnitsSold: Math.floor(5 * Math.random()) + 1,
        UnitPrice: Math.floor(1000 * Math.random()) + 500
    });
});

document.getElementById('deleteRecordAsync').addEventListener('click', async function () {
    await grid.deleteRecordAsync();
});
