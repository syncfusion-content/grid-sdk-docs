

import { TreeGrid, Filter } from '@syncfusion/ej2-treegrid';
import { diacritics } from './datasource.ts';

TreeGrid.Inject(Filter);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: diacritics,
    childMapping: 'Children',
    height: 275,
    allowFiltering: true,
    filterSettings: { ignoreAccent: true },
    treeColumnIndex: 0,
    columns: [
        { field: 'EmpID', headerText: 'Employee ID', width: 95 },
        { field: 'Name', headerText: 'Name', width: 110 },
        { field: 'DOB', headerText: 'DOB', width: 90, textAlign: 'Right', format: 'yMd' },
        { field: 'Country', width: 65 }
    ]
});

treeGridObj.appendTo('#TreeGrid');



