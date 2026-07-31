import { TreeGrid, Selection, Toolbar, ColumnChooser, Column } from '@syncfusion/ej2-treegrid';
import { TreeView } from '@syncfusion/ej2-navigations';
import { Button } from '@syncfusion/ej2-buttons';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(Selection, Toolbar, ColumnChooser);

let treeObj: TreeView;
let treeData: any[] = [];

const renderCustomColumnChooser = (targetElement: HTMLElement, columns: Column[]) => {
    const parentNodes = [
        { id: 1, name: 'Task Info', hasChild: true, expanded: true },
        { id: 2, name: 'Schedule', hasChild: true, expanded: true },
        { id: 3, name: 'Progress', hasChild: true, expanded: true },
    ];

    treeData = columns.map((column) => {
        let parentId;
        switch (column.field) {
            case 'taskID':
            case 'taskName':
                parentId = 1;
                break;
            case 'startDate':
            case 'endDate':
                parentId = 2;
                break;
            case 'duration':
            case 'progress':
            case 'priority':
                parentId = 3;
                break;
        }
        return {
            id: column.uid,
            name: column.headerText,
            pid: parentId,
            isChecked: column.visible
        };
    });

    var uniquePids: any = [];
    treeData.forEach(function (item: any) {
        if (uniquePids.indexOf(item.pid) === -1) {
            uniquePids.push(item.pid);
        }
    });
    const filteredParents = parentNodes.filter(function (parent) { return uniquePids.indexOf(parent.id) !== -1 });
    treeData = treeData.concat(filteredParents);

    treeObj = new TreeView({
        fields: { dataSource: treeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
        showCheckBox: true,
        nodeClicked: nodeCheck,
        keyPress: nodeCheck,
        cssClass: "no-border"
    });

    treeObj.appendTo(targetElement);
};

function nodeCheck(args: any) {
    const node = args.node;
    const getNodeDetails = treeObj.getNode(node);
    const checkedNode = [node];

    if (args.event.target.classList.contains('e-fullrow') || args.event.key === "Enter") {
        if (getNodeDetails.isChecked === 'true') {
            treeObj.uncheckAll(checkedNode);
        } else {
            treeObj.checkAll(checkedNode);
        }
    }
}

function columnChooserSubmit() {
    const checkedElements: string[] = [];
    const uncheckedElements: string[] = [];

    const treeItems = document.querySelectorAll('.e-list-item');
    treeItems.forEach(item => {
        const itemDetails: any = treeObj.getNode(item);
        if (!itemDetails.hasChildren) {
            if (item.getAttribute('aria-checked') === 'true') {
                checkedElements.push(itemDetails.text);
            } else {
                uncheckedElements.push(itemDetails.text);
            }
        }
    });

    const visibleColumns = checkedElements;
    const hiddenColumns = uncheckedElements;

    treeGridObj.grid.columnChooserModule.changeColumnVisibility({ visibleColumns, hiddenColumns });
}

function onCreated() {
    new Button().appendTo('#submitButton');
    new Button().appendTo('#abortButton');

      if (document.getElementById('submitButton')) {
        (document.getElementById('submitButton'))!.onclick = () => {
            columnChooserSubmit();
        }
    };
        if (document.getElementById('abortButton')) {
            (document.getElementById('abortButton'))!.onclick = function () {
                (treeGridObj.grid.columnChooserModule as any).hideDialog();
            };
        }    
}

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    showColumnChooser: true,
    treeColumnIndex: 1,
    toolbar: ['ColumnChooser'],
    columnChooserSettings: {
        headerTemplate: '#ccHeaderTemplate',
        template: '#ccContentTemplate',
        footerTemplate: '#ccFooterTemplate',
        renderCustomColumnChooser: renderCustomColumnChooser,
        enableSearching: true
    },
    columns: [
        { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'taskName', headerText: 'Task Name', width: 240, showInColumnChooser: false },
        { field: 'startDate', headerText: 'Start Date', width: 110,  format: 'yMd' },
        { field: 'endDate', headerText: 'End Date', width: 110, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'duration', headerText: 'Duration', width: 100, textAlign: 'Right' },
        { field: 'progress', headerText: 'Progress', width: 100, textAlign: 'Right' },
        { field: 'priority', headerText: 'Priority', width: 90 }
    ],
    height: 315,
    created: onCreated
});

treeGridObj.appendTo('#TreeGrid');