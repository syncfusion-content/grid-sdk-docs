


import { TreeGrid, Freeze } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Freeze);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    height: 317,
    treeColumnIndex: 1,
    childMapping: 'subtasks',
    allowSelection: false,
    columns: [
                { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
                { field: 'taskName', headerText: 'Task Name', width: 230, freeze: 'Left' },
                { field: 'startDate', headerText: 'Start Date', width: 120, textAlign: 'Right',
                    type: 'date', format: { type: 'dateTime', format: 'dd/MM/yyyy' } },
                { field: 'endDate', headerText: 'End Date', width: 150, textAlign: 'Right',
                    type: 'date', format: { type: 'dateTime', format: 'dd/MM/yyyy' } },
                { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 110 },
                { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 120 },
                { field: 'priority', headerText: 'Priority', textAlign: 'Left', freeze: 'Right',  width: 120 },
                { field: 'approved', headerText: 'Approved', width: 110, textAlign: 'Left' }
    ]
});

treeGridObj.appendTo('#TreeGrid');



