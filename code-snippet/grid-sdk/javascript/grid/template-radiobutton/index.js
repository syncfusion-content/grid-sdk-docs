var grid = new ej.grids.Grid({
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

function initializeRadioButtons(args) {
    if (args.column.field === 'OrderStatus') {
      let orderStatus = args.data['OrderStatus']; // Get current row status.
        let radioButtons = args.cell.querySelectorAll('.order-status-radio');
        radioButtons.forEach((radio) => {
            let status = radio.getAttribute('data-status');
            let radioButton = new ej.buttons.RadioButton({
                label: status,
                name: `orderStatus-${args.data['OrderID']}`, // Unique name per row.
                checked: status === orderStatus
            });
            radioButton.appendTo(radio);
        });
    }
}