

import { TreeGrid, Edit, Toolbar, Column } from '@syncfusion/ej2-treegrid';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Edit, Toolbar);

let elem: HTMLElement;
let autoCompleteObj: AutoComplete;
let treeGridObj: TreeGrid = new TreeGrid(
    {
        dataSource: sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        height: 400,
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            mode: 'Cell',
            newRowPosition: 'Below'

        },
        toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
        columns: [
            {
                field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right', width: 90
            },
            { field: 'taskName', headerText: 'Task Name', editType: 'stringedit', edit: {
                create: () => {
                    elem = document.createElement('input');
                    return elem;
                },
                read: () => {
                    return autoCompleteObj.value;
                },
                destroy: () => {
                    autoCompleteObj.destroy();
                },
                write: (args: { rowData: Object, column: Column }) => {
                    autoCompleteObj = new AutoComplete({
                        dataSource: <{key: string, value: any}[]>treeGridObj.grid.dataSource,
                        fields: { value: 'taskName' },
                        value: args.rowData[args.column.field]
                    });
                    autoCompleteObj.appendTo(elem);
                }
            },
            width: 180  },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 130, editType: 'datepickeredit', type: 'date', format: 'yMd' },
            {
                field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 80, editType: 'numericedit', edit: { params: {  format: 'n'}}
            }
        ]
    });
treeGridObj.appendTo('#TreeGrid');



