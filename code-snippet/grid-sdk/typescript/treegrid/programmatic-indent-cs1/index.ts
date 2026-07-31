

import { TreeGrid, RowDD } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(RowDD);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right'},
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        { field: 'priority', headerText: 'Priority', width: 90 },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    height: 270
});
treeGridObj.appendTo('#TreeGrid');

document.getElementById('Indenting').addEventListener('click', Indent);
document.getElementById('Outdenting').addEventListener('click', Outdent);

function Indent() {
    treeGridObj.indent(treeGridObj.getCurrentViewRecords()[2]);
}

function Outdent() {
    treeGridObj.outdent(treeGridObj.getCurrentViewRecords()[2]);
}



