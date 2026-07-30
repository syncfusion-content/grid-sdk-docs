


import { TreeGrid, Page, Toolbar, PdfExport, PdfExportProperties } from '@syncfusion/ej2-treegrid';
import { Column }  from '@syncfusion/ej2-grids';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Page, Toolbar, PdfExport);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowPdfExport: true,
    allowPaging: true,
    height: 220,
    pageSettings: {pageSize: 7},
    toolbar: ['PdfExport'],
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
treeGridObj.toolbarClick = (args: Object) => {
if (args['item'].text === 'PDF Export') {
        let cols: Column[] = treeGridObj.grid.columns;
        cols[2].visible = false;
        cols[3].visible = true;
        treeGridObj.pdfExport();
    }
}
treeGridObj.pdfExportComplete = () => {
        let cols: Column[] = treeGridObj.grid.columns;
        cols[3].visible = false;
        cols[2].visible = true;
    }



