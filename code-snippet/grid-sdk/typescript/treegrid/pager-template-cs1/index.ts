import { TreeGrid, Page } from '@syncfusion/ej2-treegrid';
import { PageEventArgs } from '@syncfusion/ej2-grids';
import { sampleData } from './datasource.ts';
import {  ChangeEventArgs, NumericTextBox } from '@syncfusion/ej2-inputs';

TreeGrid.Inject(Page);

let flag: boolean = true;
let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowPaging: true,
    pageSettings: {pageSize: 6,  template: '#template'},
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 160 },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    expanding: () => {
        flag = true;
    },
    collapsing: () => {
        flag = true;
    },
    dataBound: () => {
        if (flag) {
            flag = false;
            updateTemplate();
        }
    },
    actionComplete: (args: PageEventArgs) => {
        if (args.requestType === 'paging') {
            updateTemplate();
        }
    }
});

treeGridObj.appendTo('#TreeGrid');

let updateTemplate: Function = () => {
    let numeric: NumericTextBox;
    numeric = new NumericTextBox({
        min: 1,
        max: 3,
        step: 1,
        width: 200,
        format: '###.##',
        change: (args: ChangeEventArgs) => {
            let value: number = args.value;
            treeGridObj.goToPage(value);
        }
    });
    numeric.appendTo('#currentPage');
};




