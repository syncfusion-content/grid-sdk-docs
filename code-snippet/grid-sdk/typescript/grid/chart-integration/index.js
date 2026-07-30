ej.grids.Grid.Inject(ej.grids.ContextMenu);

let gridChart;
let grid = new ej.grids.Grid({
  dataSource: salesDatas,
  height: 416,
  allowSelection: true,
  selectionSettings: { type: 'Multiple' },
  contextMenuItems: [
    'Bar', 'StackingBar', 'StackingBar100',
    'Pie','Column', 'StackingColumn', 'StackingColumn100',
    'Line', 'StackingLine', 'StackingLine100',
    'Area', 'StackingArea', 'StackingArea100','Scatter'
  ],
  columns: [
    { type: 'checkbox', width: 50 },
    { field: 'Product', headerText: 'Products', width: 200 },
    { field: 'Month', headerText: 'Month', width: 160 },
    { field: 'Online', headerText: 'Online', format: 'C2', textAlign: 'Right', width: 160 },
    { field: 'Retail', headerText: 'Retail', format: 'C2', textAlign: 'Right', width: 160 },
    { field: 'Total', headerText: 'Total', format: 'C2', textAlign: 'Right', width: 160 },
  ],
  created: () => {
    gridChart = new ej.gridchart.GridChart({
      enableRtl: grid.enableRtl,
      locale: grid.locale,
    });
  },
  contextMenuClick: (args) => {
    if (args.chartType) {
      const chartArgs = {
        gridInstance: args.gridInstance,
        chartType: args.chartType,
        records: args.records
      };
      const chartModel  = {
        primaryXAxis: {
          valueType: 'Category',
          labelRotation: 315
        }
      };
      const model = {
        chart: chartModel,
        accumulationChart: { }
      };
      const categorySeries = {
        category: ['Product', 'Month'],
        series: ['Online', 'Retail']
      };
      gridChart.render(chartArgs, model, categorySeries);
    }
  }
});
grid.appendTo('#GridChart');

