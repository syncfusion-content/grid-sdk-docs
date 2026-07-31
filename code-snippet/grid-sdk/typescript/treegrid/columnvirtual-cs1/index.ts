

import { VirtualScroll, TreeGrid } from '@syncfusion/ej2-treegrid';
import { virtualData, dataSource } from './datasource.ts';

TreeGrid.Inject(VirtualScroll);

dataSource();

let treegrid: TreeGrid = new TreeGrid({
  dataSource: virtualData,
  enableVirtualization: true,
  enableColumnVirtualization: true,
  treeColumnIndex: 1,
  childMapping: 'Crew',
  height: 317,
  columns: [
    {
      field: 'TaskID',
      headerText: 'Player Jersey',
      width: 140,
      textAlign: 'Right'
    },
    { field: 'FIELD1', headerText: 'Player Name', width: 140 },
    { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
    { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'Right' },
    { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'Right' },
    { field: 'FIELD5', headerText: 'LGID', width: 120, textAlign: 'Right' },
    { field: 'FIELD6', headerText: 'GP', width: 120, textAlign: 'Right' },
    { field: 'FIELD7', headerText: 'GS', width: 120, textAlign: 'Right' },
    { field: 'FIELD8', headerText: 'Minutes', width: 120, textAlign: 'Right' },
    { field: 'FIELD9', headerText: 'Points', width: 120, textAlign: 'Right' },
    { field: 'FIELD10', headerText: 'oRebounds', width: 120, textAlign: 'Right' },
    { field: 'FIELD11', headerText: 'dRebounds', width: 120, textAlign: 'Right' },
    { field: 'FIELD12', headerText: 'Rebounds', width: 120, textAlign: 'Right' },
    { field: 'FIELD13', headerText: 'Assists', width: 120, textAlign: 'Right' },
    { field: 'FIELD14', headerText: 'Steals', width: 120, textAlign: 'Right' },
    { field: 'FIELD15', headerText: 'Blocks', width: 120, textAlign: 'Right' },
    { field: 'FIELD16', headerText: 'Turnovers', width: 120, textAlign: 'Right' },
    { field: 'FIELD17', headerText: 'PF', width: 120, textAlign: 'Right' },
    { field: 'FIELD18', headerText: 'fgAttempted', width: 120, textAlign: 'Right' },
    { field: 'FIELD19', headerText: 'ftAttempted', width: 120, textAlign: 'Right' },
    { field: 'FIELD20', headerText: 'ThreeAttempted', width: 120, textAlign: 'Right' },
    { field: 'FIELD21', headerText: 'ThreeMade', width: 120, textAlign: 'Right' },
    { field: 'FIELD22', headerText: 'PostGP', width: 120, textAlign: 'Right' },
    { field: 'FIELD23', headerText: 'ftMade', width: 120, textAlign: 'Right' },
    { field: 'FIELD24', headerText: 'fgMade', width: 120, textAlign: 'Right' },
    { field: 'FIELD25', headerText: 'ffmade', width: 120, textAlign: 'Right' },
    { field: 'FIELD26', headerText: 'PostGS', width: 120, textAlign: 'Right' },
    { field: 'FIELD27', headerText: 'PostMinutes', width: 120, textAlign: 'Right' },
    { field: 'FIELD28', headerText: 'PostPoints', width: 120, textAlign: 'Right' },
    { field: 'FIELD29', headerText: 'PostoRebounds', width: 120, textAlign: 'Right' },
    { field: 'FIELD30', headerText: 'PostdRebounds', width: 120, textAlign: 'Right' }
  ]
});
treegrid.appendTo('#TreeGrid');




