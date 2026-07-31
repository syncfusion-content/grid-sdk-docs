

import { TreeGrid,ActionEventArgs } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

    let treegrid: TreeGrid = new TreeGrid(
        {
            dataSource: sampleData,
            childMapping: "subtasks",
            treeColumnIndex: 1,
            height: 100,
            created: setHeaderHeight,
            columns: [
               { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
               { field: 'taskName', headerText: 'Task Name', textAlign: 'Center', customAttributes: {class: 'orientationcss'}, width: 80 }
               { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
               { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
            ]
            });
    treegrid.appendTo('#TreeGrid');

    function setHeaderHeight(args: ActionEventArgs): void {
   let textWidth: number = document.querySelector(".orientationcss > div").scrollWidth; // obtain the width of the headerText content.
    let headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for (let i: number = 0; i < headerCell.length; i++) {
        (<HTMLElement>headerCell.item(i)).style.height = textWidth + 'px'; // assign the obtained textWidth as the height of the headerCell.
    }
}



