
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    rowTemplate: '#rowtemplate',
    columns: [
        { field: 'Name', headerText: "Employee Name", width: 150 },
        { field: 'Designation', headerText: "Designation", width: 150 },
        { field: 'Team', headerText: "Team", width: 150 },
        { headerText: 'Employee Performance', width: 300, textAlign: "Center" }
    ],
    dataBound: dataBound,
    height: 315
});
grid.appendTo('#Grid');

function dataBound() {
    let gridInstance = document.getElementById('Grid').ej2_instances[0];
    let chartList = gridInstance.getContentTable().querySelectorAll('.chart-container');
    for (let i = 0; i < chartList.length; i++) {
         let chartData=getChartData(employeeData[i].EmployeeID);
        let chartComponent = new ej.charts.Chart({
            height:"150",
            primaryXAxis: { valueType: 'Category' },
            series: [{
                dataSource: chartData,
                type: "Column",
                xName: "month",
                yName: "performance",
                name: "Performance"
            }],
        });
        chartComponent.appendTo(chartList[i]);
    }
}

function getChartData(employeeID) {
    const employeePerformance = employeePerformanceData.find(emp => emp.EmployeeID === employeeID);
    return employeePerformance ? employeePerformance.chartData : [];
}