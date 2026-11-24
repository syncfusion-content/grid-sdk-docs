import { Grid, ColumnChooser, SideBar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(ColumnChooser, SideBar);

let grid: Grid = new Grid({
    dataSource: data,
    height: 320,
    enableToolPanel: true,
    toolPanelSettings: {
        position: 'Left',
        width: 300,
        toolPanels: [
            'Columns',
            {
                type: 'Custom',
                template: '#customPanelTemplate'
            }
        ]
    },
    columns: [
        { field: 'ProductID', headerText: 'Product ID', width: 140, textAlign: 'Right' },
        { field: 'ProductName', headerText: 'Product Name', width: 140 },
        { field: 'Category', headerText: 'Category', width: 140 },
        { field: 'UnitPrice', headerText: 'Unit Price', width: 140, textAlign: 'Right', format: 'C2' },
        { field: 'UnitsInStock', headerText: 'Units In Stock', width: 140, textAlign: 'Right' }
    ]
});
grid.appendTo('#Grid');
