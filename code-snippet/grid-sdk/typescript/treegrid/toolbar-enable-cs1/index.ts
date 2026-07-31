

import { TreeGrid, Toolbar, Filter } from '@syncfusion/ej2-treegrid';
import { Button } from '@syncfusion/ej2-buttons';
import { sampleData } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

TreeGrid.Inject(Toolbar, Filter);
let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowFiltering: true,
    toolbar: ['QuickFilter', 'ClearFilter'],
    toolbarClick: clickHandler,
    height: 200,
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

let enable: Button = new Button({}, '#enable');
let disable: Button = new Button({}, '#disable');

enable.element.onclick = () => {
    treeGridObj.toolbarModule.enableItems([treeGridObj.element.id + '_gridcontrol_QuickFilter', treeGridObj.element.id + '_gridcontrol_ClearFilter'], true);// enable toolbar items.
};

disable.element.onclick = () => {
    treeGridObj.toolbarModule.enableItems([treeGridObj.element.id + '_gridcontrol_QuickFilter', treeGridObj.element.id + '_gridcontrol_ClearFilter'], false);// disable toolbar items.
};

function clickHandler(args: ClickEventArgs): void {
    if (args.item.text === 'QuickFilter') {
        treeGridObj.filterByColumn('taskName', 'startswith', 'Testing');
    }
    if (args.item.text === 'ClearFilter') {
        treeGridObj.clearFiltering();
    }
}



