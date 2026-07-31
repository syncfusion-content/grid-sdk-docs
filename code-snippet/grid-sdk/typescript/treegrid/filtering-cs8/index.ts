

import { TreeGrid, Filter } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Filter);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 273,
    allowFiltering: true,
    filterSettings: { type:'Menu' },
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 75, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 150, textAlign: 'Left', filter: { type : 'Excel' } },
        { field: 'duration', headerText: 'Duration', width: 90, textAlign: 'Right' },
        { field: 'progress', headerText: 'Progress', width: 90, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');



