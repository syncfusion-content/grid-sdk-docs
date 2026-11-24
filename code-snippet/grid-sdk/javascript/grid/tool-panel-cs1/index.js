ej.grids.Grid.Inject(ej.grids.Filter, ej.grids.Reorder, ej.grids.ColumnChooser, ej.grids.SideBar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    allowReordering: true,
    enableToolPanel: true,
    toolPanelSettings: {
        position: 'Left',
        isOpen: true,
        defaultToolPanel: 'columns',
        toolPanels: [
            { id: 'columns', type: 'Columns', headerText: 'Columns' },
            { id: 'filters', type: 'Filters', headerText: 'Filters' }
        ]
    },
    columnChooserSettings: { allowReordering: true },
    columns: [
        { field: 'ProductID', headerText: 'Product ID', width: 110, textAlign: 'Right' },
        { field: 'ProductName', headerText: 'Product Name', width: 140 },
        { field: 'Category', headerText: 'Category', width: 140 },
        { field: 'UnitPrice', headerText: 'Unit Price', width: 140, textAlign: 'Right' },
        { field: 'Stock', headerText: 'Stock', width: 140, textAlign: 'Right' }
    ],
    height: 320
});
grid.appendTo('#Grid');
