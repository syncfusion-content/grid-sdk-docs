import { Grid, QueryCellInfoEventArgs, Column } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    enableHover: false,
    allowSelection: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 80},
        { field: 'ShipCity', headerText: 'Ship City', width: 130 },
    ],
    height: 315,
    queryCellInfo: customiseCell
});
grid.appendTo('#Grid');

function customiseCell(args: QueryCellInfoEventArgs) {
    if(((args.column)as Column).field === 'Freight') {
        let freightData= args.data['Freight'];
        if (freightData <= 30){
            ((args.cell)as Element).classList.add('below-30');
        } else if(freightData > 30 && freightData < 80 ) {
            ((args.cell)as Element).classList.add('below-80');
        } else {
            ((args.cell)as Element).classList.add('above-80');
        }
    }
}