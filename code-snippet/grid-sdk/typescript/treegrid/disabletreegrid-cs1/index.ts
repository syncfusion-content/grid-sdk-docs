

import { TreeGrid, Edit, Toolbar } from '@syncfusion/ej2-treegrid';
import { Button } from '@syncfusion/ej2-buttons';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Edit,Toolbar);
let button: Button = new Button();
button.appendTo('#primarybtn');

let treegrid: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    height: 220,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowAdding:true, allowEditing: true, allowDeleting:true },
     columns: [
     { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right' },
     { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
     { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'},
     { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
});
treegrid.appendTo('#TreeGrid');

document.getElementById('primarybtn').addEventListener('click', () => {

    if (treegrid.element.classList.contains('disabletreegrid')) {
        treegrid.element.classList.remove('disabletreegrid');
        document.getElementById("TreeGridParent").classList.remove('wrapper');
    }
    else {
        treegrid.element.classList.add('disabletreegrid');
        document.getElementById("TreeGridParent").classList.add('wrapper');
    }
});



