import { Grid, ColumnChooser, SideBar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(ColumnChooser, SideBar);

let grid: Grid = new Grid({
    dataSource: data,
    height: 320,
    enableToolPanel: true,
    toolPanelSettings: {
        position: 'Left',
        isOpen: true,
        defaultToolPanel: 'columns',
        toolPanels: [
            {
                id: 'columns',
                type: 'Columns',
                headerText: 'Columns'
            },
            {
                id: 'summary',
                type: 'Custom',
                headerText: 'Summary',
                iconCss: 'e-icons e-description',
                template: '#customPanelTemplate'
            }
        ]
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 140, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
        { field: 'ShipCity', headerText: 'Ship City', width: 140 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140 },
        { field: 'Freight', headerText: 'Freight', width: 140, textAlign: 'Right', format: 'C2' }
    ]
});
grid.appendTo('#Grid');
