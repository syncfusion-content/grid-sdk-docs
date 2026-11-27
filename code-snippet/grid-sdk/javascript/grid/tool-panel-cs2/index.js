ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Selection, ej.grids.ColumnChooser, ej.grids.SideBar);
var grid = new ej.grids.Grid({
    dataSource: data,
    height: 320,
    enableToolPanel: true,
    toolPanelSettings: {
        position: 'Right',
        width: 300,
        toolPanels: [
            'Edit',
            'Columns'
        ]
    },
    editSettings: { allowEditing: true, mode: 'Normal' },
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', width: 140, textAlign: 'Right', isPrimaryKey: true },
        { field: 'Name', headerText: 'Name', width: 140 },
        { field: 'Title', headerText: 'Title', width: 140 },
        { field: 'Country', headerText: 'Country', width: 140 },
        { field: 'Salary', headerText: 'Salary', width: 140, textAlign: 'Right', format: 'C0' }
    ]
});
grid.appendTo('#Grid');
