

import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { RowSelectEventArgs } from '@syncfusion/ej2-grids';
import { sampleData } from './datasource.ts';

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 270,
    treeColumnIndex: 1,
    selectionSettings: {type: 'Multiple'},
    rowSelected: rowSelected
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 150 },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
        { field: 'progress', headerText: 'progress', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

function rowSelected(args: RowSelectEventArgs) {
    let selectedrowindex: number[] = treeGridObj.getSelectedRowIndexes();  // get the selected row indexes.
    alert(selectedrowindex); // to alert the selected row indexes.
    let selectedrecords: Object[] = treeGridObj.getSelectedRecords();  // get the selected records.
}



