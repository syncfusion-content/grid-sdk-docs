var initialAdvancedFilterRule = {
    condition: 'and',
    rules: [
        {
            field: 'Status',
            label: 'Status',
            type: 'string',
            operator: 'notequal',
            value: 'Done'
        },
        {
            field: 'Priority',
            label: 'Priority',
            type: 'string',
            operator: 'equal',
            value: 'High'
        }
    ]
};

var grid = new ej.grids.Grid({
    dataSource: ticketdata,
    enableVirtualization: true,
    allowSorting: true,
    height: 400,
    pageSettings: { pageSize: 50 },
    allowAdvancedFiltering: true,
    toolbar: ['AdvancedFilter'],
    advancedFilterSettings: {
        queryBuilderSettings: {
            rule: initialAdvancedFilterRule
        }
    },
    load: function (args) {
        if (args) {
            args.enableSeamlessScrolling = true;
        }
    },
    rowHeight: 45,
    columns: [
        { field: 'TicketID', headerText: 'Ticket ID', textAlign: 'Right', width: 120, isPrimaryKey: true },
        { field: 'Title', headerText: 'Title', width: 260 },
        { field: 'TypeofRequest', headerText: 'Type', width: 150 },
        { field: 'Assignee', headerText: 'Assignee', width: 150 },
        { field: 'Priority', headerText: 'Priority', width: 130 },
        { field: 'Status', headerText: 'Status', width: 130 },
        { field: 'CreatedDate', headerText: 'Created Date', width: 140, textAlign: 'Right', format: 'yMd' },
        { field: 'DueDate', headerText: 'Due Date', width: 140, textAlign: 'Right', format: 'yMd' },
    ]
});
grid.appendTo('#Grid');