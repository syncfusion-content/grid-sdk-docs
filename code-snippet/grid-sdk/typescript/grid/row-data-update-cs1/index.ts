import { Grid, Sort, Filter, Page } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { restaurantMenu } from './datasource.ts';
Grid.Inject(Sort, Filter, Page);

let grid: Grid = new Grid({
    dataSource: restaurantMenu,
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'Excel' },
    allowPaging: true,
    pageSettings: { pageSize: 8, pageCount: 4 },
    columns: [
        { field: 'ItemID', headerText: 'Item ID', width: 100, isPrimaryKey: true },
        { field: 'ItemName', headerText: 'Dish Name', width: 130, clipMode: 'EllipsisWithTooltip' },
        { field: 'Category', headerText: 'Category', width: 120 },
        { field: 'Price', headerText: 'Cost', width: 100, format: 'C2', textAlign: 'Right' },
        { field: 'SpiceLevel', headerText: 'Spiciness', width: 110 },
        { field: 'Description', headerText: 'Description', width: 260, clipMode: 'EllipsisWithTooltip' }
    ],
    queryCellInfo: (args: any) => {
        if (args.column.field === 'Price') {
            const price = args.data.Price == null ? 0 : args.data.Price;
            let cls = 'price-low';
            if (price > 25) { cls = 'price-premium'; }
            else if (price > 20) { cls = 'price-high'; }
            else if (price > 15) { cls = 'price-mid-high'; }
            else if (price > 10) { cls = 'price-mid'; }
            args.cell.innerHTML = '<div class="price-cell ' + cls + '">$' + price.toFixed(2) + '</div>';
        }
    }
});
grid.appendTo('#Grid');

function randomPrice(price: number): number {
    return Number(Math.min(Math.max(price + (12 * Math.random() - 6), 4), 32).toFixed(2));
}

function findItem(id: string): any {
    return restaurantMenu.filter((item: any) => item.ItemID === id)[0];
}

new Button({ cssClass: 'e-outline' }, '#updateSingle');
new Button({ cssClass: 'e-outline' }, '#updateMultiple');

document.getElementById('updateSingle').addEventListener('click', () => {
    const item = findItem('ITEM-1002');
    grid.setRowData('ITEM-1002', Object.assign({}, item, { Price: randomPrice(item.Price), Description: item.Description }));
});

document.getElementById('updateMultiple').addEventListener('click', () => {
    const updates = [
        Object.assign({}, findItem('ITEM-1001'), { Price: randomPrice(findItem('ITEM-1001').Price), Description: 'Spicy Paneer Tikka Masala' }),
        Object.assign({}, findItem('ITEM-1002'), { Price: randomPrice(findItem('ITEM-1002').Price), Description: 'Caesar Salad' }),
        Object.assign({}, findItem('ITEM-1003'), { Price: randomPrice(findItem('ITEM-1003').Price), Description: 'Cheesecake with honey' })
    ];
    updates.reduce((chain: Promise<any>, row: any) => chain.then(() => grid.setRowDataAsync(row.ItemID, row, 0)), Promise.resolve());
});
