import { getOrders } from './orderService.js';

ej.grids.Grid.Inject(ej.grids.InfiniteScroll, ej.grids.Filter, ej.grids.Sort, ej.grids.Toolbar, ej.grids.Search);

const sortSettings = { columns: [{ field: 'ProductID', direction: 'Descending' }] };
const state = { skip: 0, take: 36, sorted: sortSettings.columns };
let requestCount = 0;

let grid = new ej.grids.Grid({
    enableInfiniteScrolling: true,
    infiniteScrollSettings: { enableCache: true, initialBlocks: 3, maxBlocks: 3 },
    pageSettings: { pageSize: 12 },
    allowFiltering: true,
    allowSorting: true,
    created: created,
    sortSettings: sortSettings,
    dataStateChange: dataStateChange,
    toolbar: ['Search'],
    columns: [
        { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerName', width: 140, headerText: 'Customer Name', type: 'string' },
        { field: 'ProductID', headerText: 'Product ID', width: 120 },
        { field: 'ProductName', headerText: 'Product Name', width: 140 }
    ],
    height: 315
});

grid.appendTo('#Grid');

// triggers at initial render of the Grid
function created() {
    // initial state needs to be sent manually
    dataStateChange(state);
}
// triggers only when the requested data is not available in the cache
function dataStateChange(state) {
    requestCount++;
    document.getElementById('requests').innerText = 'Server requests made: ' + requestCount;
    const query = grid.getDataModule().generateQuery();
    getOrders(state, query).then((result) => {
        grid.dataSource = result.result; // { result, count }
    });
}
