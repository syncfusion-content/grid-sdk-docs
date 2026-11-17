ej.grids.Grid.Inject(ej.grids.Sort, ej.grids.Filter, ej.grids.Page);

function progressTemplate(props) {
    var progress = props.Progress == null ? 0 : props.Progress;
    var cls = 'progress-very-low';
    if (progress >= 0.9) cls = 'progress-excellent';
    else if (progress >= 0.75) cls = 'progress-high';
    else if (progress >= 0.5) cls = 'progress-medium';
    else if (progress >= 0.25) cls = 'progress-low';
    return '<div class="progress-cell ' + cls + '">' + (progress * 100).toFixed(0) + '%</div>';
}

let grid = new ej.grids.Grid({
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
        { field: 'Progress', headerText: 'Progress', textAlign: 'Right', template: progressTemplate, format: 'P', width: 110 },
        { field: 'Status', headerText: 'State', width: 110 },
        { field: 'Department', headerText: 'Department', width: 130, clipMode: 'EllipsisWithTooltip' },
        { field: 'AssignedDate', headerText: 'Assigned Date', width: 130, type: 'date', format: 'yMd', textAlign: 'Right' },
        { field: 'Deadline', headerText: 'Deadline', width: 120, type: 'date', format: 'yMd', textAlign: 'Right' }
    ]
});
grid.appendTo('#Grid');

new ej.buttons.Button({ cssClass: 'e-outline' }, '#updateOne');
new ej.buttons.Button({ cssClass: 'e-outline' }, '#updateMultiple');

document.getElementById('updateOne').addEventListener('click', function () {
    grid.setCellValue(tasksData[2].TaskNumber, 'Progress', Math.random());
});

document.getElementById('updateMultiple').addEventListener('click', async function () {
    var updates = [0, 1, 3].map(function (index) {
        return { key: tasksData[index].TaskNumber, field: 'Progress', value: Math.random() };
    });
    for (var update of updates) {
        await grid.setCellValueAsync(update.key, update.field, update.value, 0);
    }
});
