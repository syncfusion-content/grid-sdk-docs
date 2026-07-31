

import { TreeGrid, Page, Selection, Edit, Toolbar } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Page, Selection, Edit, Toolbar );
let treegrid: TreeGrid = new TreeGrid(
    {
        dataSource: sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        enableHover: false,
        allowSelection: true,
        toolbar: ['Add', 'Update', 'Cancel'],
        selectionSettings: { type: 'Multiple', mode: 'Cell', cellSelectionMode: 'Box' },
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
            { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
            { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
        ],
        height: 220
    });
treegrid.appendTo('#TreeGrid');



