ej.grids.Grid.Inject(ej.grids.InfiniteScroll);

var data = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new ej.data.UrlAdaptor()
});

var grid = new ej.grids.Grid({
    dataSource: data,
    height: 300,
    enableInfiniteScrolling: true,
    pageSettings: { pageSize: 50 },
    infiniteScrollSettings: { enableCountLessMode: true },
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
        { field: 'Employees', headerText: 'Employee Name', width: 120 },
        { field: 'Designation', headerText: 'Designation', width: 100 },
        { field: 'Location', headerText: 'Location', width: 100 },
        { field: 'CurrentSalary', headerText: 'Salary', format: 'C2', textAlign: 'Right', width: 100 }
    ]
});
grid.appendTo('#Grid');
