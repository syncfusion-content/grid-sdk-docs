
import { Grid, ContextMenu, ContextMenuClickEventArgs } from '@syncfusion/ej2-grids';
import { salesDatas } from './datasource.ts';
import { CategorySeries, ChartChanges, ChartPopupArgs, GridChart, UpdateChartArgs } from '@syncfusion/ej2-grid-chart';
import { ChartModel, ILoadedEventArgs,AccumulationChartModel } from '@syncfusion/ej2-charts';

Grid.Inject(ContextMenu);

let gridChart: GridChart;
let grid: Grid = new Grid(
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
      gridChart = new GridChart({
        enablePropertyPanel: true,
        enableRtl: grid.enableRtl,
        allowExport: true,
        locale: grid.locale,
        updateChartSettings: updateChartSettings
      });
    },
    contextMenuClick: (args: ContextMenuClickEventArgs) => {
      if (args.chartType) {
        const chartArgs: ChartPopupArgs = {
          gridInstance: (args.gridInstance as Grid),
          chartType: args.chartType,
          records: (args.records as SalesRecord[]),
        };
        const chartModel: ChartModel = {
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
          titleStyle: {
            size: '24px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'Bold'
          },

          subTitle: 'Sales data for various products over the months',
          load: (args: ILoadedEventArgs) => {
            if (args.chart.titleStyle) {
              args.chart.titleStyle.color = '#1976d2';
            }
          }
        };
        const accumulationChartModel: AccumulationChartModel= {
          title :'Sales Distribution'
        };
        const model: ChartChanges = {
          chart: chartModel,
          accumulationChart: accumulationChartModel
        };
        const categorySeries: CategorySeries = {
          category: ['Product', 'Month'],
          series: ['Online', 'Retail']
        };
        gridChart.render(chartArgs, model, categorySeries);
      }
    }
  });
grid.appendTo('#GridChart');

function updateChartSettings(args: UpdateChartArgs): void {
  const chart = args.changes.chart;
  if (!chart) return;

  // Restrict margin values to minimum 20.
  const margin = chart.margin;
  if (margin) {
    if (margin.top < 20) margin.top = 20;
    if (margin.bottom < 20) margin.bottom = 20;
    if (margin.left < 20) margin.left = 20;
    if (margin.right < 20) margin.right = 20;
  }
}

interface SalesRecord {
  Product: string;
  Category: string;
  Year: number;
  Online: number;
  Retail: number;
  ProfitLoss: number;
  UnitsSold: number;
  Revenue: number;
  Image: string;
  CategoryIcon: string;
}
