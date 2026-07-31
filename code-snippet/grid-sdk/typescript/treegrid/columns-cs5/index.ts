

import {TreeGrid, ColumnMenu, Sort, Filter} from '@syncfusion/ej2-treegrid';
import { sampleData  } from './datasource.ts';
import { ColumnMenuOpenEventArgs, ColumnMenuItemModel } from '@syncfusion/ej2-grids';

TreeGrid.Inject(ColumnMenu, Sort, Filter);

let treegrid: TreeGrid = new TreeGrid(
    {
        dataSource: sampleData,
        childMapping: 'subtasks',
        height: 315,
        showColumnMenu: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Menu' },
        treeColumnIndex: 1,
        columnMenuOpen: function (args) {
            for (const item of args.items) {
                 if (item.text === 'Filter' && args.column.field === 'taskName') {
                     (item as ColumnMenuItemModel).hide = true;
                 } else {
                      (item as ColumnMenuItemModel).hide = false;
                }
            }
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180 },
            {
                field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
            },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
        ]
    });
treegrid.appendTo('#TreeGrid');



