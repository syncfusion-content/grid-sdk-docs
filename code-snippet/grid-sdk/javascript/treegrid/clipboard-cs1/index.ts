

import { TreeGrid, Page, Selection } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Page, Selection);
let treegrid: TreeGrid = new TreeGrid(
    {
        dataSource: sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        allowSelection: true,
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        selectionSettings: { type: 'Multiple', mode: 'Row' },
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
            { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
            { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
        ],
        height: 260
    });
treegrid.appendTo('#TreeGrid');




