import { Grid, Toolbar, ExcelExport, ClickEventArgs, ExcelExportCompleteArgs } from '@syncfusion/ej2-grids';
import { Query } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport);

let grid: Grid = new Grid({
    dataSource: data,
    height: 272,
    toolbar: ['ExcelExport'],
    allowExcelExport: true,
    toolbarClick: toolbarClick,
    excelExportComplete: excelExportComplete,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', visible: false, width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid');

let queryClone: Query = null;
let message: HTMLElement = document.getElementById('message');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_excelexport') {
        let queryClone = grid.query;
        grid.query = new Query().addParams('recordcount', '15');
        message.innerText = 'Key: ' + grid.query.params[0].key +' and Value: ' + grid.query.params[0].value + ' on ' + args.item.text;
        grid.excelExport();
    }
}

function excelExportComplete(args: ExcelExportCompleteArgs) {
    if (queryClone) {
        grid.query = queryClone;
    }
}