import { Grid, DetailRow, Toolbar, Page, ClickEventArgs, HierarchyGridPrintMode, getPrintGridModel } from '@syncfusion/ej2-grids';
import { data, employeeData, customerData } from './datasource.ts';
import { extend } from '@syncfusion/ej2-base';

Grid.Inject(DetailRow, Toolbar, Page);
let persistedExpandedRows: any = {};
let grid: Grid = new Grid({
    dataSource: employeeData,
    hierarchyPrintMode: 'Expanded',
    allowPaging: true,
    pageSettings: { pageSize: 4 },
    toolbar: ['Print'],
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { field: 'LastName', headerText: 'Last Name', width: 150 },
        { field: 'City', headerText: 'City', width: 150 }
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
        childGrid: {
            dataSource: customerData,
            queryString: 'CustomerID',
            columns: [
                { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 75 },
                { field: 'ContactName', headerText: 'Contact Name', width: 100 },
                { field: 'Address', headerText: 'Address', width: 120 },
                { field: 'Country', headerText: 'Country', width: 100 }
            ]
        }
    },
    toolbarClick: (args: ClickEventArgs) => {
        if (args.item.id === 'Grid_print') {
            const page = grid.pageSettings.currentPage;
            persistedExpandedRows = extend(
              {},
              persistedExpandedRows,
              getExpandedState(grid, 'Expanded', page)
            );
        }
    },
    load: () => {
        grid.on('printGrid-Init', printInit, grid);
    },
});
grid.appendTo('#Grid');

function printInit(args: Grid): void {
    const printGridInstance = args.printgrid;
    (printGridInstance as any).expandedRows = extend(
      {},
      persistedExpandedRows,
      (printGridInstance as any).expandedRows
    );
  }
  
function getExpandedState(gridObject: Grid, mode: HierarchyGridPrintMode, currentPage: number ): { [key: number]: any } {
    let expandedRowState: { [key: number]: any } = {};
    let gridRows = gridObject.getRowsObject();  
    for (let rowIndex = 0; rowIndex < gridRows.length; rowIndex++) {
      let gridRow = gridRows[rowIndex];  
      if (gridRow.isExpand && !gridRow.isDetailRow) {
        let expandedIndex = gridObject.allowPaging
        ? gridRow.index +
        currentPage * gridObject.pageSettings.pageSize -
        gridObject.pageSettings.pageSize
        : gridRow.index;
        expandedRowState[expandedIndex] = {
            isExpand: true,
            gridModel: getPrintGridModel(gridRow.childGrid, mode),
        };
      }
    }
    return expandedRowState;
}