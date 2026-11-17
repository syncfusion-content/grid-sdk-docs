import { DataSourceChangedEventArgs, DataStateChangeEventArgs, Grid ,SortSettingsModel,FilterSettingsModel} from '@syncfusion/ej2-grids';
import { getOrders, addRecord, updateRecord, deleteRecord } from '../orderService';
import { InfiniteScroll, Filter, Sort, Toolbar, Edit, Search } from '@syncfusion/ej2-grids';

Grid.Inject(InfiniteScroll, Filter, Sort, Toolbar, Edit, Search);

interface CustomDataStateChangeEventArgs extends DataStateChangeEventArgs {
  sort?: SortSettingsModel;
  filter?: FilterSettingsModel;
}
const filterSettings: object = { columns: [{ field: 'CustomerName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Maria' }] };
const sortSettings: object = { columns: [{ field: 'ProductID', direction: 'Descending' }] }
const state:CustomDataStateChangeEventArgs= { skip: 0, take: 36, sort: sortSettings,filter: filterSettings};

let grid: Grid = new Grid({
    enableInfiniteScrolling: true,
    infiniteScrollSettings: { enableCache: true },
    allowFiltering:true,
    allowSorting:true,
    created:created,
    sortSettings:sortSettings,
    filterSettings:filterSettings,
    dataStateChange: dataStateChange,
    dataSourceChanged: dataSourceChanged,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel','Search'],
    columns: [
        { field: 'OrderID', isPrimaryKey:true,headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerName', width: 140, headerText: 'Customer Name', type: 'string' },
        { field: 'ProductID', headerText: 'Product ID' ,width: 120 },
        { field: 'ProductName', headerText: 'Product Name', width: 140}
    ],
    height: 315
});

grid.appendTo('#Grid');

// triggers at initial render of the Grid
function created() {
  // initial state needs to be sent manually
  dataStateChange(state);
}
function  dataStateChange (state:DataStateChangeEventArgs) {
    const query = grid.getDataModule().generateQuery();
    getOrders(state, query).then((result) => {
        grid.dataSource = result.result; // Assign the result to the data property
    });
  }
function dataSourceChanged (state:DataSourceChangedEventArgs) {
  if (state.action === 'add') {
    addRecord(state.data); (state as any).endEdit();
  } else if (state.action === 'edit') {
    updateRecord(state.data); (state as any).endEdit();
  } else if (state.requestType === 'delete') {
    deleteRecord((state as any).data[0].OrderID); (state as any).endEdit();
  }
}