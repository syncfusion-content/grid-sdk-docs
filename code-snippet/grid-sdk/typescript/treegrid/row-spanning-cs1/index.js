var treeGridObj = new ej.treegrid.TreeGrid({
   dataSource: rowSpanData,
    queryCellInfo: QueryCellEvent,
    gridLines: 'Both',
    treeColumnIndex: 1,
    childMapping: 'subtasks',
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'EmployeeName', headerText: 'Employee Name', width: 150 },
        { field: '9:00', headerText: '9.00 AM', width: 120 },
        { field: '10:00', headerText: '10.00 AM', width: 120 },
        { field: '11:00', headerText: '11.00 AM', width: 120 },
        { field: '12:00', headerText: '12.00 PM', width: 120 },
        { field: '1:00', headerText: '1.00 PM', width: 120 },
        { field: '3:00', headerText: '3.00 PM', width: 120 },
        { field: '4:00', headerText: '4.00 PM', width: 120 },
        { field: '5:00', headerText: '5.00 PM', width: 120 }
    ],
    width: 'auto',
    height: 'auto',
    allowTextWrap: false
});
treeGridObj.appendTo('#TreeGrid');

function QueryCellEvent(args) {
    let data = args.data;
    switch (data.EmployeeID) {
        case 10001:
            if (args.column.field === '1:00') {
                args.rowSpan = 10;
            }
            break;
    }
}
