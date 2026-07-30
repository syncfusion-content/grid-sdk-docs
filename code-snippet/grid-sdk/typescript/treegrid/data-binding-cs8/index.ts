

import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { DataManager } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'http://some.com/invalidUrl'
});

let treegrid: TreeGrid = new TreeGrid({
    dataSource: data,
    idMapping: 'TaskID',
    parentIdMapping: 'ParentItem',
    actionFailure: (e) => {
       let span: HTMLElement = document.createElement('span');
       treegrid.element.parentNode.insertBefore(span, treegrid.element);
       span.style.color = '#FF0000'
       span.innerHTML = 'Server exception: 404 Not found';
    },
    treeColumnIndex: 1,
        columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 90, format: { skeleton: 'yMd', type: 'date' } },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});
treegrid.appendTo('#TreeGrid');



