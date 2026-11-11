var isRowNonDeselectable = function (data) {
    if (data.ShipCountry === 'France') {
        return true;
    }
    return false;
};

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowSelection: true,
    selectedRowIndex: 0,
    isRowNonDeselectable: isRowNonDeselectable,
    pageOptions: { pageSize: 5 },
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
    },
    columns: [
        { type: 'checkbox', width: 50 },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150, textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right', format: 'C2' }
    ],
    height: 315,
});
grid.appendTo('#Grid');
