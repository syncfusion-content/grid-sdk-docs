import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { Switch, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { sampleData } from './datasource.ts';

let treeGridObj: TreeGrid = new TreeGrid({
  dataSource: sampleData,
  childMapping: 'SubTasks',
  treeColumnIndex: 1,
  enableStickyHeader: true,
  columns: [
    { field: 'TaskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
    { field: 'TaskName', headerText: 'Task Name', width: 180 },
    { field: 'StartDate', headerText: 'Start Date', width: 120, textAlign: 'Right', type: 'date', format: 'yMd' },
    { field: 'Duration', headerText: 'Duration', width: 110, textAlign: 'Right' }
  ]
});

treeGridObj.appendTo('#TreeGrid');

let toggle: Switch = new Switch({
    checked: true,
    change: toggleStickyHeader
});
toggle.appendTo('#switch');

function toggleStickyHeader(args: ChangeEventArgs) {
  treeGridObj.enableStickyHeader = args.checked ? true : false;
}
