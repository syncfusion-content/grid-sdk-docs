import { Grid, Page, Toolbar, PdfExport} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Query } from '@syncfusion/ej2-data';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

Grid.Inject(Page,Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    toolbar: ['PdfExport'],
    height: 272,
    allowPdfExport: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', visible: false, width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'ShipCountry', width: 150 }
    ],
    toolbarClick: toolbarClick,
    pdfExportComplete: pdfExportComplete
});
grid.appendTo('#Grid');

let queryClone: Query;
function toolbarClick(args: ClickEventArgs ) {
    if (args.item.id === 'Grid_pdfexport') {
        queryClone = grid.query;
        grid.query = new Query().addParams('recordcount', '15');
        (document.getElementById('message')as HTMLElement).innerText =
            'Key: ' + grid.query.params[0].key +
            ' and Value: ' + grid.query.params[0].value + ' on ' + args.item.text;
        grid.pdfExport();
    }
}
function pdfExportComplete() {
    grid.query = queryClone as Query;
}