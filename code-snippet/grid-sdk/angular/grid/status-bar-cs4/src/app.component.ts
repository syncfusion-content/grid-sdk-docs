import { Grid, StatusBar } from '@syncfusion/ej2-grids';

Grid.Inject(StatusBar);

const grid = new Grid({
  dataSource: data,
  enableStatusBar: true,
  statusBarSettings: {
    items: [
      {
        key: 'custom',
        type: 'Custom',
        position: 'Right',
        statusPanelParams: {
          template: (context: any) => {
            const panel = document.createElement('div');
            panel.textContent = 'Total Revenue: ' + context.totalCount;
            return panel;
          }
        }
      }
    ]
  }
});

grid.appendTo('#Grid');