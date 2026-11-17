ej.grids.Grid.Inject(ej.grids.Find, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Find'],
    columns: [
        { field: 'TicketID', headerText: 'Ticket ID', textAlign: 'Right', width: 90 },
        { field: 'Customer', headerText: 'Customer', textAlign: 'Left', width: 120 },
        { field: 'Subject', headerText: 'Subject', textAlign: 'Left', width: 200 },
        { field: 'Status', headerText: 'Status', textAlign: 'Left', width: 100 },
        { field: 'Priority', headerText: 'Priority', textAlign: 'Left', width: 90 }
    ],
    height: 272
});
grid.appendTo('#Grid');
