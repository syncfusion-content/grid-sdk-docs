

import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { complexData } from './datasource.ts';

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: complexData,
    childMapping: 'subtasks',
    height: 300,
    gridLines: 'Both',
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', clipMode: 'Clip', width: 70 },
        { field: 'assignee.firstName', headerText: 'Assignee', clipMode: 'Ellipsis', width: 30},
        { field: 'priority', headerText: 'Priority', clipMode: 'EllipsisWithTooltip', width: 30 },
        { field: 'duration', headerText: 'Duration', width: 30, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');



