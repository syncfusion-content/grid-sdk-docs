

import { TreeGrid, DetailRow } from '@syncfusion/ej2-treegrid';
import { textdata } from './datasource.ts';
import { Internationalization } from '@syncfusion/ej2-base';

TreeGrid.Inject(DetailRow);

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
            detailTemplate: '#detailtemplate',
            width: 'auto',
            columns: [
                { field: 'Name', headerText: 'First Name', width: '170' },
                { field: 'Designation', headerText: 'Designation', width: '180' },
                { field: 'EmpID', headerText: 'EmployeeID', width: '110'},
                { field: 'Country', headerText: 'Country' , width: '90'},
            ]
        });
    treegrid.appendTo('#TreeGrid');



