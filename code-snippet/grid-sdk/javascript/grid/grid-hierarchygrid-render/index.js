ej.grids.Grid.Inject(ej.grids.DetailRow,ej.grids.Aggregate);
var grid= new ej.grids.Grid({
    dataSource: employeeData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
        { field: 'FirstName', headerText: 'First Name', width: 100 },
        { field: 'LastName', headerText: 'LastName', width: 100 },
        { field: 'City', headerText: 'City', width: 120 }
    ],
    childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'Freight', headerText: 'Freight', format:'C2', width: 120 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 100 }
        ],
        aggregates: [
            {
                columns: [
                    {
                        type: 'Sum',
                        field: 'Freight',
                        format:'C2',
                        footerTemplate: 'Sum: ${Sum}',
                    },
                ],
            },
            {
                columns: [
                    {
                        type: 'Max',
                        field: 'Freight',
                        format:'C2',
                        footerTemplate: 'Max: ${Max}',
                    },
                ],
            },
        ]
    },
    height: 315
});
grid.appendTo('#Grid');