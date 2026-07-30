

import { TreeGrid, ContextMenu, Page, Edit } from '@syncfusion/ej2-treegrid';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { sampleData  } from './datasource.ts';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

TreeGrid.Inject(ContextMenu, Page, Edit);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowPaging: true,
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Row',
    },
    pageSettings: {pageSize: 7},
    contextMenuItems: [
        { text: 'Edit Record', target: '.e-content', id: 'Edit_record' },
        { text: 'Delete Record', target: '.e-content', id: 'Delete_record' },
    ],
    contextMenuClick: (args?: MenuEventArgs) => {
        if(args.element.innerHTML == "Edit Record"){
            treeGridObj.startEdit(args.rowInfo.row);
        }
        else if(args.element.innerHTML == "Delete Record"){
            treeGridObj.deleteRecord(args.rowInfo.row);
        }
    },
    contextMenuOpen: (args?: BeforeOpenCloseEventArgs) => {
        if (args.rowInfo.rowData.hasChildRecords == true){
            treeGridObj.grid.contextMenuModule.contextMenu.enableItems(['Edit Record'],true);//Enable edit
            treeGridObj.grid.contextMenuModule.contextMenu.enableItems(['Delete Record'],false);//Disable delete
        } else {
            treeGridObj.grid.contextMenuModule.contextMenu.enableItems(['Edit Record'],false);//Disable edit
            treeGridObj.grid.contextMenuModule.contextMenu.enableItems(['Delete Record'],true);//Enable edit
        }
    },
    treeColumnIndex: 1,
    columns: [
                { field: 'taskID', headerText: 'Task ID',  width: 90, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 180, textAlign:'Left'},
                { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'
                },
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');



