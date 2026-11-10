import { Grid, Search, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Search, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    searchSettings: { mode: 'Default' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    toolbar: ['Search'],
    height: 260
});
grid.appendTo('#Grid');

let searchMode = new DropDownList({
    dataSource: [
        { text: 'Default', value: 'Default' },
        { text: 'Immediate', value: 'Immediate' }
    ],
    fields: { text: 'text', value: 'value' },
    value: 'Default',
    change: () => {
        const mode = searchMode.value as 'Default' | 'Immediate';
        grid.searchSettings = mode === 'Immediate' ? { mode, immediateModeDelay: 1500 } : { mode };
    }
});
searchMode.appendTo('#searchMode');