import { DataStateChangeEventArgs, Grid, SortSettingsModel } from '@syncfusion/ej2-grids';
import { getOrders } from '../orderService';
import { InfiniteScroll, Filter, Sort, Toolbar, Search } from '@syncfusion/ej2-grids';

Grid.Inject(InfiniteScroll, Filter, Sort, Toolbar, Search);

const sortSettings: SortSettingsModel = { columns: [{ field: 'ProductID', direction: 'Descending' }] };
const state: DataStateChangeEventArgs = { skip: 0, take: 36, sorted: sortSettings.columns } as any;
let requestCount: number = 0;

let grid: Grid = new Grid({
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
function dataStateChange(state: DataStateChangeEventArgs) {
    requestCount++;
    (document.getElementById('requests') as HTMLElement).innerText = 'Server requests made: ' + requestCount;
    const query = grid.getDataModule().generateQuery();
    getOrders(state, query).then((result: any) => {
        grid.dataSource = result.result; // { result, count }
    });
}
