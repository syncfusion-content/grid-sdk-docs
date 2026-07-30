import { Grid, Toolbar, Page, PdfExport, ClickEventArgs } from '@syncfusion/ej2-grids';
import { purchaseData } from './datasource.ts';

Grid.Inject(Page, Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: purchaseData,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 80 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 230,
});
grid.appendTo('#Grid');

grid.toolbarClick = (args: ClickEventArgs) => {
    if (args['item'].id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

grid.pdfHeaderQueryCellInfo = (args: PdfHeaderQueryCellInfoEventArgs) => {
    if (args.cell && args.cell.row && args.cell.row.pdfGrid) {
        args.cell.row.pdfGrid.repeatHeader = true;
    }
}

interface PdfHeaderQueryCellInfoEventArgs {
    cell?: {
        row?: {
            pdfGrid?: {
                repeatHeader?: boolean;
            };
        };
    };
}