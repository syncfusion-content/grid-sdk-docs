import { Grid, Sort, Filter, Page } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { tasksData } from './datasource.ts';
Grid.Inject(Sort, Filter, Page);

let grid: Grid = new Grid({
    dataSource: tasksData,
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'Excel' },
    allowPaging: true,
    pageSettings: { pageSize: 8, pageCount: 4 },
    columns: [
        { field: 'TaskNumber', headerText: 'Task ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'TaskName', headerText: 'Title', width: 130, clipMode: 'EllipsisWithTooltip' },
        { field: 'AssignedTo', headerText: 'Assignee', width: 110, clipMode: 'EllipsisWithTooltip' },
        { field: 'Priority', headerText: 'Priority', width: 100 },
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', format: 'P', width: 110 },
        { field: 'Status', headerText: 'State', width: 110 },
        { field: 'Department', headerText: 'Department', width: 130, clipMode: 'EllipsisWithTooltip' },
        { field: 'AssignedDate', headerText: 'Assigned Date', width: 130, type: 'date', format: 'yMd', textAlign: 'Right' },
        { field: 'Deadline', headerText: 'Deadline', width: 120, type: 'date', format: 'yMd', textAlign: 'Right' }
    ],
    queryCellInfo: (args: any) => {
        if (args.column.field === 'Progress') {
            const progress = args.data.Progress == null ? 0 : args.data.Progress;
            let cls = 'progress-very-low';
            if (progress >= 0.9) { cls = 'progress-excellent'; }
            else if (progress >= 0.75) { cls = 'progress-high'; }
            else if (progress >= 0.5) { cls = 'progress-medium'; }
            else if (progress >= 0.25) { cls = 'progress-low'; }
            args.cell.innerHTML = '<div class="progress-cell ' + cls + '">' + (progress * 100).toFixed(0) + '%</div>';
        }
    }
});
grid.appendTo('#Grid');

new Button({ cssClass: 'e-outline' }, '#updateOne');
new Button({ cssClass: 'e-outline' }, '#updateMultiple');

document.getElementById('updateOne').addEventListener('click', () => {
    const tasks = tasksData as { TaskNumber: number }[];
    grid.setCellValue(tasks[2].TaskNumber, 'Progress', Math.random());
});

document.getElementById('updateMultiple').addEventListener('click', () => {
    const tasks = tasksData as { TaskNumber: number }[];
    const updates = [0, 1, 3].map((index) => ({
        key: tasks[index].TaskNumber,
        field: 'Progress',
        value: Math.random()
    }));
    updates.reduce((chain: Promise<void>, update) =>
        chain.then(() => grid.setCellValueAsync(update.key, update.field, update.value, 0)), Promise.resolve());
});
