ej.grids.Grid.Inject(ej.grids.ContextMenu);
let gridChart;
let grid = new ej.grids.Grid(
  {
    dataSource: salesDatas,
    height: 416,
    allowSelection: true,
    selectionSettings: { type: 'Multiple' },
    contextMenuItems: [
      'Bar', 'StackingBar', 'StackingBar100',
      'Pie', 'Column', 'StackingColumn', 'StackingColumn100',
      'Line', 'StackingLine', 'StackingLine100',
      'Area', 'StackingArea', 'StackingArea100', 'Scatter'
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
        enablePropertyPanel: true,
        allowExport: true,
        enableRtl: grid.enableRtl,
        locale: grid.locale,
        updateChartSettings: updateChartSettings
      });
    },
    contextMenuClick: (args) => {
      if (args.chartType) {
        const chartArgs= {
          gridInstance: (args.gridInstance),
          chartType: args.chartType,
          records: (args.records),
        };
        const chartModel = {
          primaryXAxis: {
            valueType: 'Category',
            labelRotation: 315,
          },
          margin: {
            top: 20,
            bottom: 20,
            right: 20,
            left: 20
          },
          tooltip: {
            enable: true,
            textStyle: {
              size: '16px',
              fontFamily: 'Arial, Helvetica, sans-serif'
            }
          },
          title: 'Sales Data',
          titleStyle
            : {
            size: '24px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'Bold'
          },

          subTitle: 'Sales data for various products over the months',
          load: (args) => {
            if (args.chart.titleStyle) {
              args.chart.titleStyle.color = '#1976d2';
            }
          }
        };
        const accumulationChartModel= {
          title :'Sales Distribution'
        };
        const model = {
          chart: chartModel,
          accumulationChart: accumulationChartModel
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

function updateChartSettings(args) {
  const chart = args.changes?.chart;
  if (!chart) return;

  // Restrict margin values to minimum 20.
  const margin = chart.margin;
  if (margin) {
    if ( margin.top < 20) margin.top = 20;
    if (margin.bottom < 20) margin.bottom = 20;
    if (margin.left < 20) margin.left = 20;
    if (margin.right < 20) margin.right = 20;
  }
}
