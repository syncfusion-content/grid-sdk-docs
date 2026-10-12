import { Grid, Sort, Toolbar, VirtualScroll, AdvancedFilter, LoadEventArgs } from '@syncfusion/ej2-grids';
import { ticketdata } from './datasource.ts';
Grid.Inject(Sort, Toolbar, VirtualScroll, AdvancedFilter);

let grid: Grid = new Grid({
    dataSource: ticketdata,
    enableVirtualization: true,
    allowSorting: true,
    height: 400,
    rowHeight: 45,
    load: function (args: LoadEventArgs) {
        if (args) {
            args.enableSeamlessScrolling = true;
        }
    },
    pageSettings: { pageSize: 50 },
    allowAdvancedFiltering: true,
    toolbar: ['AdvancedFilter'],
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
})
grid.appendTo('#Grid');