ej.grids.Grid.Inject(ej.grids.DomVirtualization);

function setRowHeight(row) {
    if (row.data.priority === 'Critical') {
        return 60;
    } else if (row.data.priority === 'High') {
        return 50;
    }
    return 36;
}

var grid = new ej.grids.Grid({
    dataSource: taskData,
    enableDomVirtualization: true,
    height: '400px',
    setRowHeight: setRowHeight,
    columns: [
        { field: 'issueId', headerText: 'Issue ID', width: 130, textAlign: 'Left' },
        { field: 'title', headerText: 'Title', width: 260, textAlign: 'Left' },
        { field: 'priority', headerText: 'Priority', width: 100, textAlign: 'Center' },
        { field: 'status', headerText: 'Status', width: 110, textAlign: 'Center' },
        { field: 'reporter', headerText: 'Reported By', width: 150, textAlign: 'Left' }
    ]
});

grid.appendTo('#Grid');
