

import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { textdata } from './datasource.ts';

    let treegrid: TreeGrid = new TreeGrid(
        {
            dataSource: textdata,
            childMapping: 'Children',
            treeColumnIndex: 0,
            rowTemplate: '#rowtemplate',
            height: 250,
            width: 'auto',
            rowHeight: 83,
            columns: [
                { field: 'EmpID', headerText: 'Employee ID', width: '150' },
                { field: 'Name', headerText: 'Employee Name', width: '150' },
                { field: 'Address', headerText: 'Employee Details', width: '350' }
            ]
        });
    treegrid.appendTo('#TreeGrid');



