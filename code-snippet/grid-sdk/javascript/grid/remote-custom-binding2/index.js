import { getOrders, addRecord, updateRecord, deleteRecord } from './orderService.js';

ej.grids.Grid.Inject(ej.grids.Group,ej.grids.Filter,ej.grids.Sort,ej.grids.Toolbar,ej.grids.Edit,ej.grids.Search, ej.grids.LazyLoadGroup, ej.grids.Filter);

const groupSettings= { enableLazyLoading: true, columns: ['ProductName'], showGroupedColumn: true, };
const filterSettings= { columns: [{ field: 'CustomerName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Maria' }] };
const sortSettings = { columns: [{ field: 'ProductID', direction: 'Descending' }] }
const state = { skip: 0, take: 12,group: groupSettings,sort: sortSettings,filter: filterSettings};

let grid= new ej.grids.Grid({
    allowPaging: true,
    allowFiltering:true,
    allowSorting:true,
    allowGrouping:true,
    created:created,
    groupSettings:groupSettings,
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
function  dataStateChange (state) {
    const query = grid.getDataModule().generateQuery();
    getOrders(state, query).then((result) => {
        grid.dataSource = result.result; // Assign the result to the data property
    });
}
function dataSourceChanged (state) {
  if (state.action === 'add') {
    addRecord(state.data); state.endEdit();
  } else if (state.action === 'edit') {
    updateRecord(state.data); state.endEdit();
  } else if (state.requestType === 'delete') {
    deleteRecord(state.data[0].OrderID); state.endEdit();
  }
}