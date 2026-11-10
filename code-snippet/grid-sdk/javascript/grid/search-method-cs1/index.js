var grid = new ej.grids.Grid({
    dataSource: data,
    searchSettings: { mode: 'OnEnter' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    toolbar: ['Search'],
    height: 260
});
grid.appendTo('#Grid');

var searchMode = new ej.dropdowns.DropDownList({
    dataSource: [
        { text: 'OnEnter', value: 'OnEnter' },
        { text: 'Immediate', value: 'Immediate' }
    ],
    fields: { text: 'text', value: 'value' },
    value: 'OnEnter',
    change: function () {
        var mode = searchMode.value;
        grid.searchSettings = mode === 'Immediate' ? { mode: mode, immediateModeDelay: 1500 } : { mode: mode };
    }
});
searchMode.appendTo('#searchMode');