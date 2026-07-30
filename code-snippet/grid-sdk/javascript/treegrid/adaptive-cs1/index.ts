

import { TreeGrid, Filter, Sort, Edit, Toolbar, Page } from '@syncfusion/ej2-treegrid';
import { Browser } from '@syncfusion/ej2-base';
import { sampleData } from './datasource.ts';
TreeGrid.Inject(Filter, Sort, Edit, Toolbar, Page);
let treegrid: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    enableAdaptiveUI: true,
    allowPaging: true,
    allowSorting: true,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    allowFiltering: true,
    filterSettings: { type: 'Excel' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
    height: '100%',
    load: () => {
        treegrid.grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0] as HTMLElement;
    },
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 135, validationRules: { required: true, number: true } },
        { field: 'taskName', headerText: 'Task Name', width: 280, editType: "dropdownedit", validationRules: { required: true } },
        { field: 'duration', headerText: 'Duration', filter: { type : 'Menu' }, width: 140, validationRules: { required: true } },
        { field: 'progress', headerText: 'Progress', width: 145 , validationRules: { required: true } },
    ]
});
treegrid.appendTo('#adaptivebrowser');


