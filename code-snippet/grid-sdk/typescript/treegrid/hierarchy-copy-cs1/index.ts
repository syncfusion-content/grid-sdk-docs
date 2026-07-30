

import { TreeGrid, Page, Selection } from '@syncfusion/ej2-treegrid';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Page, Selection);
let treegrid: TreeGrid = new TreeGrid(
    {
        dataSource: sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        copyHierarchyMode: 'Parent',
        allowSelection: true,
        selectionSettings: { type: 'Multiple', mode: 'Row' },
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
            { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
            { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
        ],
        height: 230
    });
treegrid.appendTo('#TreeGrid');

 let dropDownMode: DropDownList = new DropDownList({
    dataSource: [
        { id: 'Parent', mode: 'Parent' },
        { id: 'Child', mode: 'Child' },
        { id: 'Both', mode: 'Both' },
        { id: 'None', mode: 'None' },
    ],
    fields: { text: 'mode', value: 'id' },
    value: 'Parent',
    change: (e: ChangeEventArgs) => {
        let mode: any = <string>e.value;
        treeGridObj.copyHierarchyMode = mode;
    }
});
dropDownMode.appendTo('#mode');



