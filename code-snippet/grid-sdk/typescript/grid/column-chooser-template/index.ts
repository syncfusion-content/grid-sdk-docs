
import { Grid, Page, Toolbar, Column, ColumnChooser } from '@syncfusion/ej2-grids';
import { stackedHeaderData } from './datasource.ts';
import { TreeView } from '@syncfusion/ej2-navigations';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Page, Toolbar, ColumnChooser);

let treeObj: TreeView;
let treeData: any = [];

const renderCustomColumnChooser = (targetLHTMLElement: HTMLElement, columns: Column[]) => {
    const parentNodes = [
        { id: 1, name: 'Order Details', hasChild: true, expanded: true },
        { id: 2, name: 'Shipping Details', hasChild: true, expanded: true },
        { id: 3, name: 'Delivery Status', hasChild: true, expanded: true },
    ];
    if (columns && columns.length) {
        treeData = columns.map((column) => {
            let parentId;
            switch (column.field) {
                case 'OrderID':
                case 'OrderDate':
                    parentId = 1;
                    break;
                case 'ShipCountry':
                case 'Freight':
                    parentId = 2;
                    break;
                case 'Status':
                    parentId = 3;
                    break;
                default:
                    break;
            }
            return {
                id: column.uid,
                name: column.headerText,
                pid: parentId,
                isChecked: column.visible
            };
        });
        const uniquePids: string[] = [];
        treeData.forEach((item: any) => {
            if (uniquePids.indexOf(item.pid) === -1) {
                uniquePids.push(item.pid);
            }
        });
        const filteredParents = parentNodes.filter((parent: any) => uniquePids.indexOf(parent.id) !== -1);
        treeData.push(...filteredParents);
    } else {
        treeData = [];
    }
    treeObj = new TreeView({
        fields: { dataSource: treeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
        showCheckBox: true,
        nodeClicked: nodeCheck,
        keyPress: nodeCheck,
        enableRtl: grid.enableRtl ? true : false,
        cssClass: "no-border"
    });
    if (columns && columns.length) {
        treeObj.appendTo(targetLHTMLElement);
    } else {
        const noRecordDiv: HTMLElement = document.createElement('div');
        noRecordDiv.innerHTML = 'No Matches Found';
        noRecordDiv.className = 'no-record-text';
        targetLHTMLElement.appendChild(noRecordDiv);
    }
};

let grid: Grid = new Grid(
    {
        dataSource: stackedHeaderData,
        showColumnChooser: true,
        allowPaging: true,
        toolbar: ['ColumnChooser'],
        columnChooserSettings: {
            headerTemplate: '#ccHeadertemplate',
            template: '#column-chooser-template',
            footerTemplate: '#ccFootertemplate',
            renderCustomColumnChooser: renderCustomColumnChooser,
            enableSearching: true,
        },
        columns: [
            {
                field: 'CustomerID',
                headerText: 'Customer ID',
                textAlign: 'Right',
                width: 160,
                isPrimaryKey: true,
                showInColumnChooser: false,
            },
            {
                field: 'CustomerName',
                headerText: 'Name',
                width: 100,
            },
            {
                headerText: 'Order Details',
                textAlign: 'Center',
                columns: [
                    {
                        field: 'OrderID',
                        headerText: 'ID',
                        textAlign: 'Right',
                        width: 90
                    },
                    {
                        field: 'OrderDate',
                        headerText: 'Date',
                        width: 110,
                        textAlign: 'Right',
                        format: 'yMd',
                    },
                ],
            },
            {
                headerText: 'Shipping Details',
                textAlign: 'Center',
                columns: [
                    {
                        field: 'ShipCountry',
                        headerText: 'Country',
                        textAlign: 'Left',
                        width: 115
                    },
                    {
                        field: 'Freight',
                        headerText: 'Charges',
                        textAlign: 'Right',
                        width: 130,
                        format: 'C2'
                    },
                ],
            },
            {
                headerText: 'Delivery Status',
                textAlign: 'Center',
                columns: [
                    {
                        field: 'Status',
                        headerText: 'Status',
                        textAlign: 'Center',
                        width: 110
                    }
                ],
            },
        ],
        created: onCreated
    });
grid.appendTo('#Grid');

function nodeCheck(args: any) {
    let checkedNode = [args.node];
    if (args.event.target.classList.contains('e-fullrow') || args.event.key == "Enter") {
        let getNodeDetails = treeObj.getNode(args.node);
        if (getNodeDetails.isChecked == 'true') {
            treeObj.uncheckAll(checkedNode);
        } else {
            treeObj.checkAll(checkedNode);
        }
    }
}

function onCreated() {
    let submitButton = new Button();
    submitButton.appendTo('#submitButton');
    if (document.getElementById('submitButton')) {
        (document.getElementById('submitButton') as any).onclick = () => {
            columnChooserSubmit();
        };
    }
    let abortButton = new Button();
    abortButton.appendTo('#abortButton');
    if (document.getElementById('abortButton')) {
        (document.getElementById('abortButton') as any).onclick = () => {
            (grid.columnChooserModule as any).hideDialog();
        };
    }
}

function columnChooserSubmit() {
    const checkedElements: string[] = [];
    const uncheckedElements: string[] = [];
    let showColumns: any = grid.getVisibleColumns().filter(function (column) { return (column.showInColumnChooser === true); });
    showColumns = showColumns.map(function (col: any) { return col.headerText; });
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
    showColumns = showColumns.filter((col: any) => uncheckedElements.indexOf(col) === -1);
    checkedElements.forEach(item => {
        if (!showColumns.includes(item)) {
            showColumns.push(item);
        }
    });
    var columnsToUpdate = { visibleColumns: showColumns, hiddenColumns: uncheckedElements };
    grid.columnChooserModule.changeColumnVisibility(columnsToUpdate);
}

