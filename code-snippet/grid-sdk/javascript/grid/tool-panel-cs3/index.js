ej.grids.Grid.Inject(ej.grids.ColumnChooser, ej.grids.SideBar);
var grid = new ej.grids.Grid({
    dataSource: data,
    height: 320,
    enableToolPanel: true,
    toolPanelSettings: {
        position: 'Left',
        isOpen: true,
        defaultToolPanel: 'columns',
        toolPanels: [
            {
                id: 'columns',
                type: 'Columns',
                headerText: 'Columns'
            },
            {
                id: 'summary',
                type: 'Custom',
                headerText: 'Summary',
                iconCss: 'e-icons e-description',
                template: '#customPanelTemplate'
            }
        ]
    },
    columns: [
        { field: 'ProductID', headerText: 'Product ID', width: 140, textAlign: 'Right' },
        { field: 'ProductName', headerText: 'Product Name', width: 140 },
        { field: 'Category', headerText: 'Category', width: 140 },
        { field: 'UnitPrice', headerText: 'Unit Price', width: 140, textAlign: 'Right', format: 'C2' },
        { field: 'UnitsInStock', headerText: 'Units In Stock', width: 140, textAlign: 'Right' }
    ]
});
grid.appendTo('#Grid');
