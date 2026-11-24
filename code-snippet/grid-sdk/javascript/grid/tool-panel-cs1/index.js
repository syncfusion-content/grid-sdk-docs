ej.grids.Grid.Inject(ej.grids.Filter, ej.grids.Reorder, ej.grids.ColumnChooser, ej.grids.Group, ej.grids.Aggregate, ej.grids.SideBar);
var grid = new ej.grids.Grid({
    dataSource: data,
    height: 320,
    enableToolPanel: true,
    toolPanelSettings: {
        position: 'Right',
        width: 300,
        toolPanels: [
            'Columns',
            'Filters'
        ]
    },
    allowFiltering: true,
    allowGrouping: true,
    allowReordering: true,
    columnChooserSettings: { allowReordering: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 140, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
        { field: 'ShipCity', headerText: 'Ship City', width: 140 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140 },
        { field: 'Freight', headerText: 'Freight', width: 140, textAlign: 'Right', format: 'C2' }
    ]
});
grid.appendTo('#Grid');
