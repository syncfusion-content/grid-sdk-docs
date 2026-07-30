

import { InfiniteScroll, TreeGrid } from '@syncfusion/ej2-treegrid';
import { virtualData, dataSource } from './datasource.ts';

TreeGrid.Inject(InfiniteScroll);

dataSource();

let treegrid: TreeGrid = new TreeGrid(
        {
            dataSource: virtualData,
            enableInfiniteScrolling: true,
            infiniteScrollSettings: { enableCache: true },
            treeColumnIndex: 1,
            childMapping: 'Crew',
            pageSettings: { pageSize: 30 },
            height: 317,
            columns: [
                { field: 'TaskID', headerText: 'Player Jersey', width: 140, textAlign: 'Right' },
                { field: 'FIELD1', headerText: 'Player Name', width: 140 },
                { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
                { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'Right' },
                { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'Right' }
               ]
        });
    treegrid.appendTo('#TreeGrid');



