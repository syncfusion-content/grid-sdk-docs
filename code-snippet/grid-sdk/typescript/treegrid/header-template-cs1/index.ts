

import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { headerData } from './datasource.ts';
let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: headerData,
    childMapping: 'subtasks',
    height: 315,
    columns: [  
        { field: 'taskName', headerTemplate: '#projectName', width: 220 },
        { field: 'startDate', headerTemplate: '#dateTemplate', format: 'yMd', textAlign: 'Right' },
        { field: 'duration', headerTemplate: '#durationTemplate', textAlign: 'Right' },
        { field: 'progress', headerTemplate: '#progressTemplate', textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');



