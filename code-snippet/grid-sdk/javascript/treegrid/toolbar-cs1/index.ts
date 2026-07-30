

import { TreeGrid, Toolbar, Filter } from '@syncfusion/ej2-treegrid';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Toolbar, Filter);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    toolbar: [{text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'toolbarfilter', align:'Right'}],
    toolbarClick: (args: ClickEventArgs) => {
        if (args.item.id === 'toolbarfilter') {
            treeGridObj.filterByColumn('taskName', 'startswith', 'Testing');
        }
    },
    allowFiltering: true,
    height: 220,
    treeColumnIndex: 1,
    columns: [
            { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
            {
                field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'
            },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');



