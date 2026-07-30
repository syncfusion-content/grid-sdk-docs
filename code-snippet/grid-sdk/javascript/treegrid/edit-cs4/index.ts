

import { TreeGrid, CommandColumn, Edit, IRow, Column } from '@syncfusion/ej2-treegrid';
import { closest } from '@syncfusion/ej2-base';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(CommandColumn, Edit);

let onClick = (args: Event) => {
    let rowIndex: number = (<HTMLTableRowElement>closest(args.target as Element, '.e-row')).rowIndex;
    let data: Object = treeGridObj.getCurrentViewRecords();
    alert(JSON.stringify(data[rowIndex]));
}

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' },
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right'},
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
        { headerText: 'Commands', width: 120, commands: [{ buttonOption: { content: 'Details', cssClass: 'e-flat', click: onClick } }]},
    ],
    height: 270
});
treeGridObj.appendTo('#TreeGrid');



