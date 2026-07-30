

import { TreeGrid, Edit, Toolbar } from '@syncfusion/ej2-treegrid';
import { projectData } from './datasource.ts';

TreeGrid.Inject(Edit, Toolbar);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: projectData,
    idMapping: 'TaskID',
    parentIdMapping: 'parentID',
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', newRowPosition: 'Below' },
    treeColumnIndex: 1,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right'},
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        {
            field: 'StartDate', headerText: 'Start Date', width: 90, editType: 'datepickeredit', textAlign: 'Right', type: 'date',format: 'yMd'
        },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    height: 270
});
treeGridObj.appendTo('#TreeGrid');



