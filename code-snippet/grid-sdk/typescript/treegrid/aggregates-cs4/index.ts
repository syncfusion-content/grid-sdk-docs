

import { TreeGrid, Aggregate } from '@syncfusion/ej2-treegrid';
import { summaryData } from './datasource.ts';

TreeGrid.Inject(Aggregate);

let treeGridObj: TreeGrid = new TreeGrid(
    {
        dataSource: summaryData,
        childMapping: 'subtasks',
        treeColumnIndex: 0,
        height: 260,
        columns: [
            { field: 'category', headerText: 'Category', width: 160 },
            { field: 'units', headerText: 'Total Units', width: 130, type: 'number', textAlign: 'Right' },
            { field: 'unitPrice', headerText: 'Unit Price($)', width: 110, type: 'number', format: 'C2', textAlign: 'Right' },
            { field: 'price', headerText: 'Price($)', width: 160, textAlign: 'Right', type: 'number', format: 'C2' },
        ],
        aggregates: [{
            columns: [
                {
                    type: 'Sum',
                    field: 'price',
                    columnName: 'price',
                    format: 'C2',
                    footerTemplate: 'Total: ${Sum}'
                }]
        }]
    });
treeGridObj.appendTo('#TreeGrid');



