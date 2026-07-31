var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        {field: 'CustomerID', headerText: 'Customer Name', foreignKeyValue:"ContactName", foreignKeyField:"CustomerID", dataSource:customerData, template: '#columnTemplate', width: 120},
        { field: 'Freight', headerText: 'Freight', width: 90, format: 'C2' },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 120 },
    ],
    height: 315,
    queryCellInfo: navToAccount,
});
grid.appendTo('#Grid');

function navToAccount(args){
    if (args.column.field === "CustomerID" && args.data) {
        const anchor = args.cell.querySelector("a");
        if (anchor) {
            const accountId = args.data.OrderID; // Get the actual ID field.
            anchor.href = `../Account/AccountDetail.cshtml?custid=0&accountId=${accountId}`;
            // Prevent default navigation and use history push.
            anchor.addEventListener("click", (event) => {
                event.preventDefault();
                window.history.pushState(
                    '',
                    'changed',
                    `../Account/AccountDetail.cshtml?custid=0&accountId=${accountId}`
                );
            });
        }
    }
}