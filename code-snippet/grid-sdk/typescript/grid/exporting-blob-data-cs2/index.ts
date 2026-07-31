import { EmitType } from '@syncfusion/ej2-base'
import { Grid, Page, Toolbar, ExcelExport, ExcelExportCompleteArgs, PdfExport, PdfExportCompleteArgs, ClickEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, ExcelExport, PdfExport);

let excelExpComplete: EmitType<ExcelExportCompleteArgs> = (args: ExcelExportCompleteArgs) => {
        // This event will be triggered when excel exporting.
        (args as any).promise.then((e: { blobData: Blob }) => {
        // In this `then` function, you can get blob data through the arguments after promise resolved.
        exportBlob(e.blobData);
    });
};
let pdfExpComplete: EmitType<PdfExportCompleteArgs> = (args: PdfExportCompleteArgs) => {
    // This event will be triggered when pdf exporting.
    (args as any).promise.then((e: { blobData: Blob }) => {
        // In this `then` function, you can get blob data through the arguments after promise resolved.
        exportBlob(e.blobData);
    });
};


let exportBlob: Function = (blob: Blob) => {
    let a: HTMLAnchorElement = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    let url: string = window.URL.createObjectURL(blob); // Fix typo here
    a.href = url;
    a.download = 'Export';
    a.click();
    window.URL.revokeObjectURL(url); // Fix typo here
    document.body.removeChild(a);
}

let grid: Grid = new Grid({
        dataSource: data,
        allowExcelExport: true,
        allowPdfExport: true,
        excelExportComplete: excelExpComplete,
        pdfExportComplete: pdfExpComplete,
        toolbar: ['PdfExport','ExcelExport'],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', width: 150, headerText: 'Customer ID' },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 }
        ]
    });
grid.appendTo('#Grid');
grid.toolbarClick = (args: ClickEventArgs) => {
    if (args['item'].id === 'Grid_pdfexport') {
        grid.pdfExport(undefined, undefined, undefined, true);
    }
    if (args['item'].id === 'Grid_excelexport') {
        grid.excelExport(undefined, undefined, undefined, true);
    }
}