import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { RadioButton } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 90, format: 'C2' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 120 },
        { field: 'OrderStatus', headerText: 'Order Status', template: '#columnTemplate', width: 200 },
    ],
    height: 315,
    queryCellInfo: initializeRadioButtons
});
grid.appendTo('#Grid');

function initializeRadioButtons(args: QueryCellInfoEventArgs){
    if (args.column.field === 'OrderStatus') {
        let orderStatus = args.data['OrderStatus']; // Get current row status.
        let radioButtons = (args.cell as HTMLElement).querySelectorAll('.order-status-radio');
        radioButtons.forEach((radio) => {
            let status = (radio as HTMLInputElement).getAttribute('data-status');
            let radioButton = new RadioButton({
                label: status,
                name: `orderStatus-${args.data['OrderID']}`, // Unique name per row.
                checked: status === orderStatus
            });
            radioButton.appendTo(radio as HTMLElement);
        });
    }
}