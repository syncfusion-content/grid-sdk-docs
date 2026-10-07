import { loadCultureFiles } from '@syncfusion/ej2-base';
import { Grid, Sort, Toolbar, VirtualScroll, AdvancedFilter, LoadEventArgs } from '@syncfusion/ej2-grids';
import { ticketdata } from './datasource.ts';
Grid.Inject(Sort, Toolbar, VirtualScroll, AdvancedFilter);

const initialAdvancedFilterRule = {
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

loadCultureFiles();
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
    advancedFilterSettings: {
        queryBuilderSettings: {
            rule: initialAdvancedFilterRule
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

document.getElementById('open')!.onclick = () => grid.openAdvancedFilterDialog();
document.getElementById('apply')!.onclick = () => grid.applyAdvancedFilter(initialAdvancedFilterRule);
document.getElementById('set')!.onclick = () => grid.setAdvancedFilter(initialAdvancedFilterRule);
document.getElementById('get')!.onclick = () => console.log(grid.getAdvancedFilter());
document.getElementById('clear')!.onclick = () => grid.clearAdvancedFilter();