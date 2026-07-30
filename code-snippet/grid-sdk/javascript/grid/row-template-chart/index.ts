import { Grid } from '@syncfusion/ej2-grids';
import { employeeData, employeePerformanceData } from './datasource.ts';
import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';

Chart.Inject(ColumnSeries, Category);

let grid: Grid = new Grid({
    dataSource: employeeData,
    rowTemplate: '#rowtemplate',
    columns: [
        { field: 'Name', headerText: "Employee Name", width: 150 },
        { field: 'Designation', headerText: "Designation", width: 150 },
        { field: 'Team', headerText: "Team", width: 150 },
        { headerText: 'Employee Performance', width: 300, textAlign: "Center" }
    ],
    dataBound: dataBound,
    height: 400
});
grid.appendTo('#Grid');

function dataBound() {
    let gridInstance = (document.getElementById('Grid') as any).ej2_instances[0];
    let chartList = gridInstance.getContentTable().querySelectorAll('.chart-container');
    for (let i = 0; i < chartList.length; i++) {
         let chartData=getChartData((employeeData[i] as any).EmployeeID);
        let chartComponent: Chart = new Chart({
            height:"150",
            primaryXAxis: { valueType: 'Category' },
            series: [{
                dataSource:chartData
                type: "Column",
                xName: "month",
                yName: "performance",
                name: "Performance"
            }],
        });
        chartComponent.appendTo(chartList[i]);
    }
}
function getChartData(employeeID: number) {
    const employeePerformance = employeePerformanceData.find(emp => (emp as any).EmployeeID === employeeID);
    return employeePerformance ? (employeePerformance as any).chartData : [];
}
