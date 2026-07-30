ej.grids.Grid.Inject(ej.grids.DetailRow, ej.grids.Toolbar, ej.grids.Page);

var persistedExpandedRows = {};
var grid = new ej.grids.Grid({
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
    toolbarClick: (args) => {
        if (args.item.id === 'Grid_print') {
            const page = grid.pageSettings.currentPage;
            persistedExpandedRows = ej.base.extend(
              {},
              persistedExpandedRows,
              getExpandedState(grid, 'Expanded', page)
            );
        }
    },
    load: function() {
        grid.on('printGrid-Init', printInit, grid);
    }
});
grid.appendTo('#Grid');

function printInit(args) {
    var printGridInstance = args.printgrid;
    printGridInstance.expandedRows = ej.base.extend(
        {},
        persistedExpandedRows,
        printGridInstance.expandedRows
    );
}

function getExpandedState(gridObject, mode, currentPage) {
    var expandedRowState = {};
    var gridRows = gridObject.getRowsObject();
    for (var rowIndex = 0; rowIndex < gridRows.length; rowIndex++) {
        var gridRow = gridRows[rowIndex];        
        if (gridRow.isExpand && !gridRow.isDetailRow) {
            var expandedIndex = gridObject.allowPaging
            ? gridRow.index +
            currentPage * gridObject.pageSettings.pageSize -
            gridObject.pageSettings.pageSize
            : gridRow.index;            
            expandedRowState[expandedIndex] = {
                isExpand: true,
                gridModel: ej.grids.getPrintGridModel(gridRow.childGrid, mode)
            };
        }
    }
    return expandedRowState;
}