

import { TreeGrid, Sort, Page } from '@syncfusion/ej2-treegrid';
import { sortData } from './datasource.ts';

TreeGrid.Inject(Sort, Page);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sortData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    allowSorting: true,
    sortSettings: { columns: [{ field: 'Category', direction: 'Ascending' }, { field: 'orderName', direction: 'Ascending' }] },
    allowPaging: true,
    columns: [
                { field: 'Category', headerText: 'Category', width: 150 },
                { field: 'orderName', headerText: 'Order Name', width: 170 },
                { field: 'orderDate', headerText: 'Order Date', width: 130, textAlign: 'Right', format: 'yMd',    type: 'date' },
                { field: 'price', headerText: 'Price', width: 100, format: 'C0', textAlign: 'Right' }
    ],
    height: 260
});

treeGridObj.appendTo('#TreeGrid');



