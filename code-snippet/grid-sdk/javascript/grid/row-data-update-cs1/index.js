ej.grids.Grid.Inject(ej.grids.Sort, ej.grids.Filter, ej.grids.Page);

function randomPrice(price) {
    return Number(Math.min(Math.max(price + (12 * Math.random() - 6), 4), 32).toFixed(2));
}

function findItem(id) {
    return restaurantMenu.find(function (item) { return item.ItemID === id; });
}

function priceTemplate(props) {
    var price = props.Price == null ? 0 : props.Price;
    var cls = 'price-low';
    if (price > 25) cls = 'price-premium';
    else if (price > 20) cls = 'price-high';
    else if (price > 15) cls = 'price-mid-high';
    else if (price > 10) cls = 'price-mid';
    return '<div class="price-cell ' + cls + '">$' + price.toFixed(2) + '</div>';
}

let grid = new ej.grids.Grid({
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
        { field: 'Price', headerText: 'Cost', width: 100, format: 'C2', textAlign: 'Right', template: priceTemplate },
        { field: 'SpiceLevel', headerText: 'Spiciness', width: 110 },
        { field: 'Description', headerText: 'Description', width: 260, clipMode: 'EllipsisWithTooltip' }
    ]
});
grid.appendTo('#Grid');

new ej.buttons.Button({ cssClass: 'e-outline' }, '#updateSingle');
new ej.buttons.Button({ cssClass: 'e-outline' }, '#updateMultiple');

document.getElementById('updateSingle').addEventListener('click', function () {
    var item = findItem('ITEM-1002');
    grid.setRowData('ITEM-1002', Object.assign({}, item, { Price: randomPrice(item.Price), Description: item.Description }));
});

document.getElementById('updateMultiple').addEventListener('click', async function () {
    var updates = [
        Object.assign({}, findItem('ITEM-1001'), { Price: randomPrice(findItem('ITEM-1001').Price), Description: 'Spicy Paneer Tikka Masala' }),
        Object.assign({}, findItem('ITEM-1002'), { Price: randomPrice(findItem('ITEM-1002').Price), Description: 'Caesar Salad' }),
        Object.assign({}, findItem('ITEM-1003'), { Price: randomPrice(findItem('ITEM-1003').Price), Description: 'Cheesecake with honey' })
    ];
    for (var row of updates) {
        await grid.setRowDataAsync(row.ItemID, row, 0);
    }
});
