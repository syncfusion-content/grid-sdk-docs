import { Grid, Find } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Find);

var grid: Grid = new Grid({
    dataSource: data,
    findSettings: { enabled: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Left', width: 110 },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Left', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Left', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 90, format: 'C2' }
    ],
    height: 272
});
grid.appendTo('#Grid');

var highlightButton = new Button();
highlightButton.appendTo('#highlight');
document.getElementById('highlight')!.addEventListener('click', function () {
    var text = (document.getElementById('findText') as HTMLInputElement).value;
    grid.find(text);
});
