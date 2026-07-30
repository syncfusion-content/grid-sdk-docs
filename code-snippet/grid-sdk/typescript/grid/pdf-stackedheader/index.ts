import { Grid, Toolbar, PdfExport, PdfExportCompleteArgs, ColumnModel } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    height: 272,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', visible: false, width: 100 },
        { headerText: 'Order Details', textAlign: 'Center', columns: [
            { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 130, textAlign: 'Right', minWidth: 10 },
            { field: 'Freight', headerText: 'Freight ($)', format: 'C1', width: 120, textAlign: 'Right', minWidth: 10 }
        ]},
        { headerText: 'Ship Details', textAlign: 'Center', columns: [
            { field: 'ShippedDate', headerText: 'Shipped Date', format: 'yMd', width: 150, textAlign: 'Right', minWidth: 10 },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150, minWidth: 10 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150, minWidth: 10, visible: false }
        ]}
    ]
});
grid.appendTo('#Grid');

grid.toolbarClick = (args: ClickEventArgs): void => {
    if (args.item.id === 'Grid_pdfexport') {
        ((grid.columns[2] as ColumnModel).columns![0] as ColumnModel).visible = false;
        ((grid.columns[3] as ColumnModel).columns![2] as ColumnModel).visible = true;
        grid.pdfExport();
    }
};

grid.pdfExportComplete = (args: PdfExportCompleteArgs): void => {
    ((grid.columns[2] as ColumnModel).columns![0] as ColumnModel).visible = true;
    ((grid.columns[3] as ColumnModel).columns![2] as ColumnModel).visible = false;
};