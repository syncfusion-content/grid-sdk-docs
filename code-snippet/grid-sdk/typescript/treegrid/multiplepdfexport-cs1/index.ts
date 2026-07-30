


import { TreeGrid, Page, Toolbar, PdfExport } from '@syncfusion/ej2-treegrid';
import { sampleData, projectData } from './datasource.ts';

TreeGrid.Inject(Page, Toolbar, PdfExport);

let firstTreeGrid: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowPaging: true,
    height: 220,
    pageSettings: {pageSize: 7},
    allowPdfExport: true,
    toolbar: ['PdfExport'],
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

firstTreeGrid.appendTo('#TreeGrid');
let secondTreeGrid: TreeGrid = new TreeGrid({
    dataSource: projectData,
    idMapping: 'TaskID',
    parentIdMapping: 'parentID',
    allowPdfExport: true,
    allowPaging: true,
    height: 220,
    treeColumnIndex: 1,
    pageSettings: {pageSize: 7},
    columns: [
            { field: 'TaskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
            { field: 'TaskName', headerText: 'Task Name', width: 180 },
            {
                field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
            },
            { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});
secondTreeGrid.appendTo('#TreeGrid2');
firstTreeGrid.toolbarClick = (args: Object) => {
if (args['item'].text === 'PDF Export') {
    let firstGridPdfExport: Promise<Object> = firstTreeGrid.pdfExport({}, true);
        firstGridPdfExport.then((pdfData: Object) => {
            secondTreeGrid.pdfExport({}, false, pdfData);
            });
        });
    }
}



