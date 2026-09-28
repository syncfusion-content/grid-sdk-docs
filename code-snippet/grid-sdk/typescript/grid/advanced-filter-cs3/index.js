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

var closeButton = false;

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
    advancedFilterOpen: function (args) {
        if (closeButton) {
            return;
        }
        args.dialog.buttons = args.dialog.buttons.concat({
            buttonModel: { content: 'Close dialog' },
            click: function () { grid.closeAdvancedFilterDialog(); }
        });
        args.dialog.dataBind();
        closeButton = true;
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

document.getElementById('open').onclick = function () { return grid.openAdvancedFilterDialog(); };
document.getElementById('apply').onclick = function () { return grid.applyAdvancedFilter(initialAdvancedFilterRule); };
document.getElementById('set').onclick = function () { return grid.setAdvancedFilter(initialAdvancedFilterRule); };
document.getElementById('get').onclick = function () { return console.log(grid.getAdvancedFilter()); };
document.getElementById('predicate').onclick = function () { return console.log(grid.getPredicateFromRule(initialAdvancedFilterRule)); };
document.getElementById('isApplied').onclick = function () { return console.log(grid.isAdvancedFilterApplied()); };
document.getElementById('clear').onclick = function () { return grid.clearAdvancedFilter(); };