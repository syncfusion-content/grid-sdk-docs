import { Grid, DetailRow, DetailExpandCollapseArgs } from '@syncfusion/ej2-grids';
import { employeeData, data } from './datasource.ts';

Grid.Inject(DetailRow);

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { field: 'City', headerText: 'City', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
    },
    detailCollapse: detailCollapse,
    detailExpand: detailExpand,
    detailCollapsed: detailCollapsed,
    detailExpanded: detailExpanded,
    height: 345
});
grid.appendTo('#Grid');


function detailExpand(args: DetailExpandCollapseArgs) {
    // Prevent expanding detail row.
    if (args.rowData.FirstName === 'Nancy') {
        args.cancel = true;
    }
}

function detailExpanded(args: DetailExpandCollapseArgs) {
    console.log(args);
}

function detailCollapse(args: DetailExpandCollapseArgs) {
    // Prevent collapsing detail row.
    if (args.rowData.FirstName === 'Andrew') {
        args.cancel = true;
    }
}

function detailCollapsed(args: DetailExpandCollapseArgs) {
    console.log(args);
}