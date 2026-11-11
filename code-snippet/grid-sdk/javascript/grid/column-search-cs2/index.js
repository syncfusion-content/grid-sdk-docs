ej.grids.Grid.Inject(ej.grids.Toolbar);
var searchSettings = {
  mode: 'Default'
};

function searchModeChange(args) {
  searchSettings = {
    mode: args.value,
    immediateModeDelay: args.value === 'Immediate' ? 1500 : 0
  };
  grid.searchSettings = searchSettings;
}

var grid = new ej.grids.Grid({
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
        document.getElementById(grid.element.id + "_searchbar").addEventListener('keyup', () => {
                grid.search(event.target.value)
        });
    }
});
grid.appendTo('#Grid');

var ddl = new ej.dropdowns.DropDownList({
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


