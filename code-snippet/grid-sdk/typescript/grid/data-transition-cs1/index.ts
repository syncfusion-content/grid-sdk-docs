import { Grid, Sort, Filter, Page, Edit } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { productSalesDetails } from './datasource.ts';
Grid.Inject(Sort, Filter, Page, Edit);

let grid: Grid = new Grid({
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

function randomId(): string {
    return 'S-' + Math.floor(1000 * Math.random());
}

['addRecord', 'deleteRecord', 'addRecordAsync', 'updateRecordAsync', 'deleteRecordAsync'].forEach((id: string) => {
    new Button({ cssClass: 'e-outline' }, '#' + id);
});

document.getElementById('addRecord').addEventListener('click', () => {
    grid.addRecord({
        SaleID: randomId(), ProductName: 'Smart Lamp', UnitsSold: Math.floor(20 * Math.random()) + 1,
        UnitPrice: 120.5, TotalRevenue: 2410, IsDiscounted: false, Category: 'Home Tech', Region: 'Central', SalesPerson: 'Bob'
    });
});

document.getElementById('deleteRecord').addEventListener('click', () => {
    grid.deleteRecord();
});

document.getElementById('addRecordAsync').addEventListener('click', () => {
    const records = [
        { SaleID: randomId(), ProductName: 'Smart Watch', UnitsSold: 12, UnitPrice: 250, TotalRevenue: 3000, IsDiscounted: false, Category: 'Wearables', Region: 'East', SalesPerson: 'Julia' },
        { SaleID: randomId(), ProductName: 'Gaming Laptop', UnitsSold: 6, UnitPrice: 1200, TotalRevenue: 7200, IsDiscounted: true, Category: 'Electronics', Region: 'West', SalesPerson: 'Charlie' }
    ];
    Promise.all(records.map((record) => grid.addRecordAsync(record)));
});

document.getElementById('updateRecordAsync').addEventListener('click', () => {
    const row: any = grid.getCurrentViewRecords()[1];
    grid.updateRowAsync(1, {
        SaleID: row.SaleID,
        ProductName: 'Phone Pro',
        UnitsSold: Math.floor(5 * Math.random()) + 1,
        UnitPrice: Math.floor(1000 * Math.random()) + 500
    });
});

document.getElementById('deleteRecordAsync').addEventListener('click', () => {
    grid.deleteRecordAsync();
});
