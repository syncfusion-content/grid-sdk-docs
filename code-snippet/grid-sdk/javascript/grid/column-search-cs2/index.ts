import { Grid, Search, Toolbar } from '@syncfusion/ej2-grids';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

Grid.Inject(Search, Toolbar);

let searchSettings = {
  mode: 'Default',
  immediateModeDelay: 1500
};

function searchModeChange(args: ChangeEventArgs) {
  searchSettings = {
    mode: args.value as string,
    immediateModeDelay: args.value === 'Immediate' ? 1500 : 0
  };
  grid.searchSettings = searchSettings;
}

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    searchSettings: searchSettings,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 80 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 400,
    created: () => {
        (document.getElementById(grid.element.id + "_searchbar")as HTMLElement).addEventListener('keyup', () => {
                grid.search(((event as MouseEvent).target as HTMLInputElement).value)
        });
    }
});
grid.appendTo('#Grid');

let ddl: DropDownList = new DropDownList({
    dataSource: [
        { text: 'Default', value: 'Default' },
        { text: 'Immediate', value: 'Immediate' }
    ],
    fields: { text: 'text', value: 'value' },
    value: 'Default',
    change: searchModeChange,
    width: '140px'
});
ddl.appendTo('#searchMode');