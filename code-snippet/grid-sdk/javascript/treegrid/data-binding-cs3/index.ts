

import { TreeGrid, Page } from '@syncfusion/ej2-treegrid';
import { projectData } from './datasource.ts';
TreeGrid.Inject(Page);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: projectData,
    idMapping: 'TaskID',
    parentIdMapping: 'parentID',
    allowPaging: true,
    treeColumnIndex: 1,
    pageSettings: {pageSize: 7},
    columns: [
                { field: 'TaskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
                { field: 'TaskName', headerText: 'Task Name', width: 180 },
                {
                    field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');



