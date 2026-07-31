

import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { formatData } from './datasource.ts';

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: formatData,
    childMapping: 'subtasks',
    height: 315,
    treeColumnIndex: 1,
    columns: [
                { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
                { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 180 },
                { field: 'price', headerText: 'Price', textAlign: 'Right', width: 90, format: 'c2', type: 'number' },
            ]
});

treeGridObj.appendTo('#TreeGrid');



