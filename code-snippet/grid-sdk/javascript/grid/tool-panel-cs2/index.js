ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Selection, ej.grids.ColumnChooser, ej.grids.SideBar);
var grid = new ej.grids.Grid({
    dataSource: data,
    height: 320,
    enableToolPanel: true,
    toolPanelSettings: {
        position: 'Right',
        isOpen: true,
        defaultToolPanel: 'editing',
        toolPanels: [
            {
                id: 'editing',
                type: 'Edit',
                headerText: 'Editing'
            },
            {
                id: 'columns',
                type: 'Columns',
                headerText: 'Columns'
            }
        ]
    },
    editSettings: { allowEditing: true, mode: 'Normal' },
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 140, textAlign: 'Right', isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
        { field: 'ShipCity', headerText: 'Ship City', width: 140 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140 },
        { field: 'Freight', headerText: 'Freight', width: 140, textAlign: 'Right', format: 'C2' }
    ]
});
grid.appendTo('#Grid');
