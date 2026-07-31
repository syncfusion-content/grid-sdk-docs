

import {TreeGrid, Sort, Page, Filter, Resize, ColumnMenu} from '@syncfusion/ej2-treegrid';
import { sampleData  } from './datasource.ts';

TreeGrid.Inject(Page, Filter, Sort, Resize, ColumnMenu );

let treegrid: TreeGrid = new TreeGrid(
    {
        dataSource: sampleData,
        childMapping: 'subtasks',
        height: 315,
        allowFiltering: true,
        allowResizing: true,
        filterSettings: { type: 'Menu' },
        allowSorting: true,
        showColumnMenu: true,
        treeColumnIndex: 1,
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180 },
            {
                field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', showColumnMenu: false, type: 'date',format: 'yMd'
            },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
        ]
    });
treegrid.appendTo('#TreeGrid');




