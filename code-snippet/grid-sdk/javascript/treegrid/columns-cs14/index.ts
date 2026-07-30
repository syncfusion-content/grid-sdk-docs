

import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { formatData } from './datasource.ts';

let treegrid: TreeGrid = new TreeGrid(
    {
        dataSource: formatData,
        height: 315,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        columns: [
            { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 110 },
            { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 210 },
            { field: 'units', headerText: 'Units', textAlign: 'Right', width: 120 },
            { field: 'unitPrice', headerText: 'Unit Price', textAlign: 'Right', width: 120, format: 'c2', type: 'number' },
            { field: 'price', headerText: 'Total Price', valueAccessor: totalPrice, textAlign: 'Right', width: 120, format: 'c2', type: 'number' },
        ]
    });
treegrid.appendTo('#TreeGrid');

function totalPrice(field: string, data: { units: number, Fat: number, unitPrice: number }, column: Object): number {
    return data.units * data.unitPrice;
};



