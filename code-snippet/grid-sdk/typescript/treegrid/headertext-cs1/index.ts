


import { TreeGrid, Page,Column } from '@syncfusion/ej2-treegrid';
import { Button } from '@syncfusion/ej2-buttons';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Page);

let button: Button = new Button();
button.appendTo("#change-text");

let treegrid: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
     columns: [
     { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
     { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
     { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'},
     { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
});
treegrid.appendTo('#TreeGrid');

document.getElementById("change-text").addEventListener("click", () => {
  let column = treegrid.getColumnByField("taskName"); // get the JSON object of the column corresponding to the field name.
  column.headerText = "Changed Text"; // assign a new header text to the column.
  treegrid.refreshColumns();
});



