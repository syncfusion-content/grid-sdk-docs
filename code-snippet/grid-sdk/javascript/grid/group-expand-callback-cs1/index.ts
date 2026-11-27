import { Grid, Group } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { columns: ['Category', 'Region'], isGroupOpenByDefault: (args: any) => args.level === 1 && args.key === 'Beverages' },
    columns: [
        { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 120 },
        { field: 'ProductName', headerText: 'Product Name', width: 150 },
        { field: 'Category', headerText: 'Category', width: 140 },
        { field: 'Region', headerText: 'Region', width: 130 },
        { field: 'UnitPrice', headerText: 'Unit Price', textAlign: 'Right', width: 120 },
        { field: 'UnitsInStock', headerText: 'Units In Stock', textAlign: 'Right', width: 140 }
    ],
    height: 400
});
grid.appendTo('#Grid');