import { Grid, Filter, Reorder, ColumnChooser, Group, Aggregate, SideBar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Reorder, ColumnChooser, Group, Aggregate, SideBar);

let grid: Grid = new Grid({
    dataSource: data,
    height: 320,
    enableToolPanel: true,
    toolPanelSettings: {
        position: 'Right',
        width: 300,
        toolPanels: [
            'Columns',
            'Filters'
        ]
    },
    allowFiltering: true,
    allowGrouping: true,
    allowReordering: true,
    columnChooserSettings: { allowReordering: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 140, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
        { field: 'ShipCity', headerText: 'Ship City', width: 140 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140 },
        { field: 'Freight', headerText: 'Freight', width: 140, textAlign: 'Right', format: 'C2' }
    ]
});
grid.appendTo('#Grid');
