

import { TreeGrid, Aggregate } from '@syncfusion/ej2-treegrid';
import { summaryData } from './datasource.ts';
import { getObject, CustomSummaryType } from '@syncfusion/ej2-grids';

let customAggregateFn: CustomSummaryType = (data: Object): number => {
    let sampleData: Object[] = getObject('result', data);
    let countLength: number; countLength = 0;
    sampleData.filter((item: Object) => {
        let data: string = getObject('category', item);
        if (data === 'Frozen seafood') {
            countLength++;
        }
    });
    return countLength;
};

TreeGrid.Inject(Aggregate);

let treeGridObj: TreeGrid = new TreeGrid(
    {
        dataSource: summaryData,
        childMapping: 'subtasks',
        width: 'auto',
        height: 245,
        treeColumnIndex: 1,
        columns: [
            { field: 'category', headerText: 'Category', width: 200 },
            { field: 'units', headerText: 'Total Units', width: 130, type: 'number', textAlign: 'Right' },
            { field: 'unitPrice', headerText: 'Unit Price($)', width: 110, type: 'number', format: 'C2', textAlign: 'Right' },
            { field: 'price', headerText: 'Price($)', width: 110, textAlign: 'Right', type: 'number', format: 'C' },
        ],
        aggregates: [{
            showChildSummary: false,
            columns: [{
                type: 'Custom',
                customAggregate: customAggregateFn,
                columnName: 'category',
                footerTemplate: 'Count of Frozen seafood : ${Custom}'
            }]
        }]
    });
treeGridObj.appendTo('#TreeGrid');



