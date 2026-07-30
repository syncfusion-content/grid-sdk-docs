

import { TreeGrid, Resize } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Resize);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowResizing: true,
    dataBound: () => treeGridObj.autoFitColumns(['taskName']),
    height: 315,
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'taskName', headerText: 'Task Name', width: 60 },
        {
            field: 'startDate', headerText: 'Start Date', format: 'yMd', width: 120, textAlign:'Right'
        },
        { field: 'duration', headerText: 'Duration', width: 120, textAlign: 'Right' },
        { field: 'progress', headerText: 'Progress', width: 120, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');



