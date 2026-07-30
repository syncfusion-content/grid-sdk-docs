


import { TreeGrid ,extendArray} from '@syncfusion/ej2-treegrid';
import { Button } from '@syncfusion/ej2-buttons';
import { projectData } from './datasource.ts';

let treegrid: TreeGrid = new TreeGrid({
    dataSource: projectData,
    idMapping: 'TaskID',
    parentIdMapping: 'parentID',
    treeColumnIndex: 1,
     columns: [
     { field: 'TaskID', headerText: 'Task ID', width: 70, textAlign: 'Right' },
     { field: 'TaskName', headerText: 'Task Name', width: 100, textAlign: 'Left' },
     { field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'},
     { field: 'EndDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'},
     { field: 'Duration', headerText: 'Duration', width: 90, textAlign: 'Right' },
     { field: 'Priority', headerText: 'Priority', width: 90, textAlign: 'Right' }
    ],
});
treegrid.appendTo('#TreeGrid');

let add: Button = new Button({}, '#add');
let dele: Button = new Button({}, '#delete');

document.getElementById('add').onclick = () => {
 let treegrid = document.getElementsByClassName("e-treegrid")[0].ej2_instances[0];   //take treegrid instance here
     let dataSource = extendArray(treegrid.dataSource);
     dataSource.unshift({ TaskID: 99, TaskName: "New Data", StartDate: new Date('09/07/2020'), Duration: 10, Priority: "High" }); // Add record
        treegrid.dataSource = dataSource;  // Refresh the TreeGrid.
};

document.getElementById('delete').onclick = () => {
    let treegrid = document.getElementsByClassName("e-treegrid")[0].ej2_instances[0]; //take treegrid instance here
    let selectedRow = treegrid.getSelectedRowIndexes().length;
     let selectedRowIndex = treegrid.getSelectedRowIndexes()[0];
        let dataSource = extendArray(treegrid.dataSource);
        if (selectedRow > 0) {
            dataSource.splice(selectedRowIndex, 1); // Delete record.
        }
        else {
            alert("No records selected for delete operation");
            }
        treegrid.dataSource = dataSource; // Refresh the TreeGrid.
};



