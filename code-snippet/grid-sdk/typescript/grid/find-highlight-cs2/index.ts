import { Grid, Find, Toolbar, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Find, Toolbar, Page);

var grid: Grid = new Grid({
    dataSource: data,
    findSettings: { caseSensitive: true, currentPageOnly: true },
    toolbar: ['Find'],
    allowPaging: true,
    pageSettings: { pageSize: 8 },
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
