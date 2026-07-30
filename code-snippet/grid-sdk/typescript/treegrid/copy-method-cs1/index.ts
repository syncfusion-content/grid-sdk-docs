import { TreeGrid, Page, Selection } from '@syncfusion/ej2-treegrid';
import { Button } from '@syncfusion/ej2-buttons';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Page, Selection);
let treegrid: TreeGrid = new TreeGrid(
    {
        dataSource: sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        allowSelection: true,
        selectionSettings: { type: 'Multiple', mode: 'Row' },
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
            { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
            { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
        ],
        height: 230
    });
treegrid.appendTo('#TreeGrid');

let copyBtn: Button = new Button();
copyBtn.appendTo('#copy');

document.getElementById('copy').addEventListener('click', () => {
    treegrid.copy();
});

let copyHeaderBtn: Button = new Button();
copyHeaderBtn.appendTo('#copyHeader');

document.getElementById('copyHeader').addEventListener('click', () => {
    treegrid.copy(true);
});



