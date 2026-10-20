import { Grid, Aggregate } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Aggregate);

let grid: Grid = new Grid({
    dataSource: data,
    headerRowHeight: 50,
    footerRowHeight: 50,
    rowHeight: 100,
    columns: [
        { headerText: 'Image', textAlign: 'Center', width: 120, template: '#employeeImageTemplate' },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2' },
        { field: 'ShipCity', headerText: 'Ship City', width: 130 }
    ],
    aggregates: [{
        columns: [{ field: 'Freight', type: 'Sum', footerTemplate: 'Total Freight: ${Sum}' }]
    }]
});

grid.appendTo('#Grid');
