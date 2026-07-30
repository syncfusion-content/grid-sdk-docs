var grid = new ej.grids.Grid({
    dataSource: employeeData,
    queryCellInfo: queryCellInfo,
    columns: [
        { field: 'EmployeeID',headerText: 'Employee ID',textAlign: 'Right',width: 90},
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { headerText: 'Employee Performance Rating', template: '#columnTemplate', width: 280 }

    ],
    height: 315,
});
grid.appendTo('#Grid');

var lineData = [
  [0, 6, -4, 1, -3, 2, 5],
  [5, -4, 6, 3, -1, 2, 0],
  [6, 4, 0, 3, -2, 5, 1],
  [4, -6, 3, 0, 1, -2, 5],
  [3, 5, -6, -4, 0, 1, 2],
  [1, -3, 4, -2, 5, 0, 6],
  [2, 4, 0, -3, 5, -6, 1],
  [5, 4, -6, 3, 1, -2, 0],
  [0, -6, 4, 1, -3, 2, 5],
  [6, 4, 0, -3, 2, -5, 1],
];

function queryCellInfo(args) {
  if (args.column.headerText === 'Employee Performance Rating') {
    var sparklineContainer = args.cell.querySelector('#spkline' + args.data.EmployeeID);
    var line = new ej.charts.Sparkline({
      height: '50px',
      width: '90%',
      lineWidth: 2,
      valueType: 'Numeric',
      fill: '#3C78EF',
      dataSource: getSparkData('line', args.data.EmployeeID),
    });
    line.appendTo(sparklineContainer);
  }
}

  function getSparkData( type, count ) {
    return lineData[count];
  }