import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 90, format: 'C2' },
        { field: 'OrderStatus', headerText: 'Order Status', template: '#columnTemplate', width: 200 },
    ],
    height: 315,
    queryCellInfo: dropdown
});
grid.appendTo('#Grid');

let dropData = ['Order Placed', 'Processing', 'Delivered'];

function dropdown(args: QueryCellInfoEventArgs){
    if (args.column.field === 'OrderStatus') {
        let drop = new DropDownList({
            dataSource: dropData,
            value: args.data['OrderStatus'],
            popupHeight: 150,
            popupWidth: 150,
        });
        drop.appendTo(args.cell.querySelector('#dropElement'));
    }
}