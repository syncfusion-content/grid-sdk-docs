

import { TreeGrid, Selection, ColumnChooser } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

TreeGrid.Inject(Selection, ColumnChooser);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    showColumnChooser: true,
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

let show: Button = new Button({ cssClass: 'e-flat' }, '#show');

document.getElementById('show').onclick = () => {
    treeGridObj.columnChooserModule.openColumnChooser(200, 50); // give X and Y axis
};



