

import { TreeGrid, Edit, Toolbar } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Edit, Toolbar);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' },
    treeColumnIndex: 1,
    columns: [
        {
            field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right', width: 100
        },
        {
            field: 'taskName', headerText: 'Task Name', editType: 'stringedit', width: 170
        },
        {
            field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 180,
            editType: 'datetimepickeredit', edit: { params: { format: 'M/d/y hh:mm a' } },
            format: { format: 'M/d/y hh:mm a', type: 'dateTime' }
        },
        {
            field: 'approved', headerText: 'Approved', width: 110, editType: 'booleanedit',
            type: 'boolean', displayAsCheckBox: true
        },
        {
            field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 120,
            editType: 'numericedit', edit: { params: { format: 'n' } }
        },
        { field: 'priority', headerText: 'Priority', width: 110, editType: 'dropdownedit' }
    ]
    height: 270
});
treeGridObj.appendTo('#TreeGrid');



