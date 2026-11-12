import { Grid, Selection, StatusBar } from '@syncfusion/ej2-grids';

Grid.Inject(Selection, StatusBar);

const grid = new Grid({
  dataSource: data,
  allowSelection: true,
  selectionSettings: { mode: 'Cell', type: 'Multiple' },
  enableStatusBar: true,
  statusBarSettings: {
    items: [
      {
        key: 'selectedAgg',
        type: 'SelectedCellAggregates',
        position: 'Center',
        statusPanelParams: {
          aggFuncs: ['Sum', 'Average', 'Min', 'Max', 'Count']
        }
      }
    ]
  },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 150 }
  ]
});

grid.appendTo('#Grid');
