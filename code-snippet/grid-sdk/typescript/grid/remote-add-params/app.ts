import { DataStateChangeEventArgs, Grid } from '@syncfusion/ej2-grids';
import { getOrders} from '../orderService';
import { Page} from '@syncfusion/ej2-grids';
import { Query } from '@syncfusion/ej2-data';

Grid.Inject(Page);

interface CustomDataStateChangeEventArgs extends DataStateChangeEventArgs {
    query?: Query; 
    skip?:number;
    take?:number;
}

const query:Query= new Query().addParams('Syncfusion_Grid', 'true')
const state:CustomDataStateChangeEventArgs= { skip: 0, take: 12,query:query};

let grid: Grid = new Grid({
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

function created() {
  dataStateChange(state);
}
function  dataStateChange (state:DataStateChangeEventArgs) {
    const query = grid.getDataModule().generateQuery();
    getOrders(state, query).then((result) => {
        grid.dataSource = result.result; // Assign the result to the data property
    });
}