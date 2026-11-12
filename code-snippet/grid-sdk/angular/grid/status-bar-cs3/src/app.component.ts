import { Grid, StatusBar } from '@syncfusion/ej2-grids';

Grid.Inject(StatusBar);

const statusBarValueFormatter = (params: any): string => {
  const value = params.value;
  if (value >= 1000000) {
    return (value / 1000000) + 'M';
  }
  if (value >= 1000) {
    return (value / 1000) + 'K';
  }
  return value.toString();
};

const grid = new Grid({
  dataSource: data,
  enableStatusBar: true,
  statusBarSettings: {
    items: [
      {
        key: 'totalRows',
        type: 'TotalRowCount',
        position: 'Left',
        statusPanelParams: { valueFormatter: statusBarValueFormatter }
      },
      { key: 'selectedCount', type: 'SelectedRowCount', position: 'Center' }
    ]
  }
});

grid.appendTo('#Grid');