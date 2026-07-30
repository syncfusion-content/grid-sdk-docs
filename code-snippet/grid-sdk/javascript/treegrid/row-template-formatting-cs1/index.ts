

import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { textdata } from './datasource.ts';
import { Internationalization } from '@syncfusion/ej2-base';

let instance: Internationalization = new Internationalization();

(window as DateFormat).format = (value: Date) => {
    return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
};

interface DateFormat extends Window {
    format?: Function;
}

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
                { field: 'Address', headerText: 'Employee Details', width: '350' },
                { field: 'DOB', headerText: 'DOB', width: '150' }
            ]
        });
    treegrid.appendTo('#TreeGrid');



