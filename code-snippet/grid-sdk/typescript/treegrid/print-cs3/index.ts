

import { TreeGrid, Toolbar } from '@syncfusion/ej2-treegrid';
import { Column } from '@syncfusion/ej2-grids';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Toolbar);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    toolbar: ['Print'],
    toolbarClick: function(args) {
        if (args.item.text === 'Print') {
            let cols: Column[] = this.grid.columns;
            for (var i = 0; i < cols.length; i++) {
                if (cols[i].field == "duration") {
                    cols[i].visible = true;
                }
                else if (cols[i].field == "startDate") {
                    cols[i].visible = false;
                }
            }
        }
    },
    printComplete: function(args) {
        let cols: Column[] = this.grid.columns;
        for (var i = 0; i < cols.length; i++) {
            if (cols[i].field == "duration") {
                cols[i].visible = false;
            }
            else if (cols[i].field == "StartDate") {
                    cols[i].visible = true;
            }
        }
    }
    height: 265,
    treeColumnIndex: 1,
    columns: [
            { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
            {
                field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'
            },
            { field: 'duration', headerText: 'Duration', visible: false, width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');



