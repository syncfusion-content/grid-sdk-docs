import { TreeGrid, Page, Filter, Sort, Toolbar, Edit } from '@syncfusion/ej2-treegrid';
import { data } from './datasource.ts';

TreeGrid.Inject(Page, Filter, Sort, Toolbar, Edit);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: data,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    allowPaging: true,
    pageSettings: {pageSize: 7},
    allowFiltering: true,
    filterSettings: { type: 'Checkbox' },
    allowSorting: true,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings:{ allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 90, textAlign: 'Right', isPrimaryKey: true },
        { field: 'TaskName', headerText: 'Task Name', width: 160 },
        { field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd' },
        { field: 'EndDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd' },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});
treeGridObj.appendTo('#TreeGrid');