

import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { textdata,getSparkData } from './datasource.ts';
import { Sparkline } from '@syncfusion/ej2-charts';
import { RowDataBoundEventArgs, getObject } from '@syncfusion/ej2-grids';

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: textdata,
    childMapping: 'Children',
    treeColumnIndex: 0,
    rowDataBound: (args: RowDataBoundEventArgs) : void => {
        let data: string = getObject('EmployeeID', args.data);
        let spkwl: HTMLElement = args.row.querySelector('#spkwl' + data);
        let winloss: Sparkline = new Sparkline({
            height: '50px',
            width: '150px',
            type: 'WinLoss',
            valueType: 'Numeric',
            fill: '#3C78EF',
            tiePointColor: 'darkgray',
            negativePointColor: '#f7a816',
            dataSource: getSparkData('column', +data)
        });
        winloss.appendTo(spkwl);
    },
    rowHeight: 83,
    columns: [
        { field: 'EmpID', headerText: 'Employee ID', width: 95 },
        { field: 'Name', headerText: 'Name', width: 110 },
        { field: 'DOB', headerText: 'DOB', width: 90, textAlign: 'Right', format: 'yMd' },
        {
            headerText: 'Year GR', textAlign: 'Center',
            template: '#template', width: 120
        }
    ]
    height: 260
});
treeGridObj.appendTo('#TreeGrid');



