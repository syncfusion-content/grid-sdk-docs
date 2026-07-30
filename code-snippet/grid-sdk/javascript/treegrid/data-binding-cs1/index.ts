

import { TreeGrid, Page }from '@syncfusion/ej2-treegrid';
import { Fetch } from '@syncfusion/ej2-base';

TreeGrid.Inject(Page);
let treegrid: TreeGrid = new TreeGrid({
    idMapping: 'TaskID',
    parentIdMapping: 'ParentItem',
    pageSettings: {pageSize: 7},
    allowPaging: true,
    treeColumnIndex: 1,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
        { field: 'Progress', headerText: 'Progress', width: 80, textAlign: 'Right' }
    ]
});
treegrid.appendTo('#TreeGrid');

let button: HTMLElement = document.createElement('button');
button.textContent = 'Bind Data';
treegrid.element.parentNode.insertBefore(button, treegrid.element);
button.addEventListener("click", function(e){
    let fetch = new Fetch("https://services.syncfusion.com/js/production/api/SelfReferenceData","GET");
    treegrid.showSpinner();
    fetch.send();
    fetch.onSuccess = function (data: object) {
        treegrid.hideSpinner();
        treegrid.dataSource = data;
    };
});



