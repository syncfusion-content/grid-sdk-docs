

import { TreeGrid, RowDD } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(RowDD);

let treegrid: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    treeColumnIndex: 1,
    childMapping: 'subtasks',
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: 'destTree' },
    selectionSettings: { type: 'Multiple' },
    columns: [
            { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180 },
            {
                field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
            },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});
treegrid.appendTo('#TreeGrid');

let destTree: TreeGrid = new TreeGrid({
    dataSource: [],
    treeColumnIndex: 1,
    childMapping: 'subtasks',
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: 'TreeGrid' },
    selectionSettings: { type: 'Multiple' },
    columns: [
            { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180 },
            {
                field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
            },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});
destTree.appendTo('#destTree');



