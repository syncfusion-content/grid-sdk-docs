

import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 270,
    treeColumnIndex: 1,
    columns: [
                { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 180 },
                {
                    field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

let show: Button = new Button({ cssClass: 'e-flat' }, '#show');
let hide: Button = new Button({ cssClass: 'e-flat' }, '#hide');

document.getElementById('show').onclick = () => {
    treeGridObj.showColumns(['Task ID', 'Duration']); //show by HeaderText
};

document.getElementById('hide').onclick = () => {
    treeGridObj.hideColumns(['Task ID', 'Duration']); //hide by HeaderText
};



