

import { TreeGrid, Selection, Toolbar, ColumnChooser } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Selection, Toolbar, ColumnChooser);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    showColumnChooser: true,
    treeColumnIndex: 1,
    toolbar: ['ColumnChooser'],
    columns: [
        { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'taskName', headerText: 'Task Name', width: 240, showInColumnChooser: false },
        { field: 'startDate', headerText: 'Start Date', width: 110, format: 'yMd' },
        { field: 'endDate', headerText: 'End Date', width: 110, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'duration', headerText: 'Duration', width: 100, textAlign: 'Right' },
        { field: 'progress', headerText: 'Progress', width: 100, textAlign: 'Right' },
        { field: 'priority', headerText: 'Priority', width: 90 }
    ]
    height: 315
});

treeGridObj.appendTo('#TreeGrid');



