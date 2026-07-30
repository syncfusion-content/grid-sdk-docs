import { Grid,Page, Sort, Filter, Group, DataStateChangeEventArgs, getStateEventArgument } from '@syncfusion/ej2-grids';
import { getData } from './order-service.ts';
Grid.Inject(Page, Sort, Filter, Group);
let grid: Grid = new Grid({
    height: '100%',
    enablePersistence: true,
    allowPaging: true,
    pageSettings: { pageSize: 12, currentPage: 2 },
    allowSorting: true,
    sortSettings: {
      columns: [{ field: 'OrderID', direction: 'Descending' }],
    },
    allowFiltering: true,
    filterSettings: {
      columns: [
        { field: 'CustomerID', matchCase: false, operator: 'startswith', predicate: 'and', value: 'A' },
      ],
    },
    allowGrouping: true,
    groupSettings: { columns: ['ShipCity'] },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 130 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 200 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ],
    created: created,
    dataStateChange: dataStateChange,
});
grid.appendTo('#Grid');
function created() {
  const query = grid.getDataModule().generateQuery(); // Generate the initial query state from the Grid's data module.
  const state = getStateEventArgument(query); // Retrieve the Grid's current state based on the generated query.
  dataStateChange(state); // Send the retrieved state to the service to fetch data accordingly.
}
function dataStateChange(state: DataStateChangeEventArgs) {
  getData(state).then((data) => (grid.dataSource = data));
}