


import { TreeGrid, Page, Toolbar, ExcelExport, ExcelExportProperties, RowDataBoundEventArgs, ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Page, Toolbar, ExcelExport);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowExcelExport: true,
    allowPaging: true,
    height: 220,
    pageSettings: {pageSize: 7},
    toolbar: ['ExcelExport'],
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
treeGridObj.toolbarClick = (args: Object) => {
if (args['item'].text === 'Excel Export') {
        treeGridObj.excelExport();
    }
}
treeGridObj.excelQueryCellInfo = (args: ExcelQueryCellInfoEventArgs) => {
    if(args.column.field == 'duration'){
        if(args.value === 0 || args.value === "") {
            args.style = {backColor: '#336c12'};
        }
        else if(args.value < 3) {
            args.style = {backColor: '#7b2b1d'};
        }
    }
}
treeGridObj.queryCellInfo = (args: RowDataBoundEventArgs) => {
    if (args.data['duration'] == 0 && args.column.field === 'duration' ) {
        args.cell.style.background= '#336c12';
    } else if (args.data['duration'] < 3 && args.column.field === 'duration') {
        args.cell.style.background= '#7b2b1d';
    }
}
treeGridObj.appendTo('#TreeGrid');



