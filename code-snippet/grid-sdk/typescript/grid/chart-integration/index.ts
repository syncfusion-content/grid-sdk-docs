
import { Grid, ContextMenu, ContextMenuClickEventArgs } from '@syncfusion/ej2-grids';
import { salesDatas } from './datasource.ts';
import { CategorySeries, ChartChanges, ChartPopupArgs, GridChart } from '@syncfusion/ej2-grid-chart';
import { ChartModel} from '@syncfusion/ej2-charts';

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
    gridChart = new GridChart({
      enableRtl: grid.enableRtl,
      locale: grid.locale,
    });
  },
  contextMenuClick: (args: ContextMenuClickEventArgs) => {
    if (args.chartType) {
      const chartArgs: ChartPopupArgs = {
        gridInstance: (args.gridInstance as Grid),
        chartType: args.chartType,
        records: (args.records as SalesRecord[])
      };
      const chartModel: ChartModel = {
        primaryXAxis: {
          valueType: 'Category',
          labelRotation: 315
        }
      };
      const model: ChartChanges = {
        chart: chartModel,
        accumulationChart: { }
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
