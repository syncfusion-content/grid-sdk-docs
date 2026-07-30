import { getOrders } from './orderService.js';

ej.grids.Grid.Inject(ej.grids.Page);

const query= new ej.data.Query().addParams('Syncfusion_Grid', 'true')
const state= { skip: 0, take: 12,query:query};

let grid= new ej.grids.Grid({
    allowPaging: true,
    created:created,
    query:query,
    dataStateChange: dataStateChange,
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
