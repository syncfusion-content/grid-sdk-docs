import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { ProgressBar } from '@syncfusion/ej2-progressbar';

let grid: Grid = new Grid({
  dataSource: data,
  columns: [
      { field: 'OrderID', headerText: 'Order ID', width: 150 },
      { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
      { field: 'Freight', headerText: 'Freight', template: '#columnTemplate', width: 150 },
  ],
  queryCellInfo: queryCellInfo,
  height: 315,
});
grid.appendTo('#Grid');

function queryCellInfo(args: QueryCellInfoEventArgs ) {
  if (args.column.field === 'Freight') {
    let percentageProgress = new ProgressBar({
      type: 'Linear',
      height: '60',
      value: args.data['Freight'],
      trackThickness:24,
      progressThickness:20
    });
    percentageProgress.appendTo(args.cell.querySelector('#progressBarElement'));
  }
}