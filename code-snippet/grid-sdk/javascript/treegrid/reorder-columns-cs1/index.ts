

import { TreeGrid, Reorder } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

TreeGrid.Inject(Reorder);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowReordering: true,
    height: 285,
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
        { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

let reorderMultipleColsBtn: Button = new Button();
reorderMultipleColsBtn.appendTo('#reorderMultipleCols');

document.getElementById('reorderMultipleCols').addEventListener('click', () => {
    treeGridObj.reorderColumns(['taskID','duration'],'progress');
});



