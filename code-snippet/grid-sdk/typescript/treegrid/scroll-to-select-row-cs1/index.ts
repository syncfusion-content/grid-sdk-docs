

import { TreeGrid, RowSelectEventArgs } from '@syncfusion/ej2-treegrid';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { sampleData } from './datasource.ts';

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    height: '270',
    width: '100%',
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    rowSelected: rowSelected,
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

let numeric: NumericTextBox = new NumericTextBox({
    width: 200,
    min: 0,
    showSpinButton: false,
    format: 'N',
    placeholder: 'Enter index to select a row',
    change: onchange
}, '#numeric');

function onchange(): void {
    treeGridObj.selectRow(parseInt(numeric.getText(), 10));
}

function rowSelected(args: RowSelectEventArgs) {
    let rowHeight: number = treeGridObj.getRows()[treeGridObj.getSelectedRowIndexes()[0]].scrollHeight;
    treeGridObj.getContent().children[0].scrollTop = rowHeight * treeGridObj.getSelectedRowIndexes()[0];
}



