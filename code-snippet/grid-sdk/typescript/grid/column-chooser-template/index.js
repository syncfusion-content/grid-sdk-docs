ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.ColumnChooser, ej.grids.Page);

function renderCustomColumnChooser(targetLHTMLElement, columns) {
    var parentNodes = [
        { id: 1, name: 'Order Details', hasChild: true, expanded: true },
        { id: 2, name: 'Shipping Details', hasChild: true, expanded: true },
        { id: 3, name: 'Delivery Status', hasChild: true, expanded: true }
    ];
    if (columns && columns.length) {
        treeData = columns.map(function (column) {
            var parentId;
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
            }
            return {
                id: column.uid,
                name: column.headerText,
                pid: parentId,
                isChecked: column.visible
            };
        });
        var uniquePids = [];
        treeData.forEach(function (item) {
            if (uniquePids.indexOf(item.pid) === -1) {
                uniquePids.push(item.pid);
            }
        });
        var filteredParents = parentNodes.filter(function (parent) {
            return uniquePids.indexOf(parent.id) !== -1;
        });
        treeData = treeData.concat(filteredParents);
    } else {
        treeData = [];
    }
    treeObj = new ej.navigations.TreeView({
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
        var noRecordDiv = document.createElement('div');
        noRecordDiv.innerHTML = 'No Matches Found';
        noRecordDiv.className = 'no-record-text';
        targetLHTMLElement.appendChild(noRecordDiv);
    }
}

var grid = new ej.grids.Grid({
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
                    width: 90,
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
                    width: 115,
                },
                {
                    field: 'Freight',
                    headerText: 'Charges',
                    textAlign: 'Right',
                    width: 130,
                    format: 'C2',
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
                    width: 110,
                }
            ],
        },
    ],
    created: onCreated
});
grid.appendTo('#Grid');

function nodeCheck(args) {
    var checkedNode = [args.node];
    if (args.event.target.classList.contains('e-fullrow') || args.event.key == "Enter") {
        var getNodeDetails = treeObj.getNode(args.node);
        if (getNodeDetails.isChecked == 'true') {
            treeObj.uncheckAll(checkedNode);
        } else {
            treeObj.checkAll(checkedNode);
        }
    }
}

function onCreated() {
    var submitButton = new ej.buttons.Button();
    submitButton.appendTo('#submitButton');
    if (document.getElementById('submitButton')) {
        document.getElementById('submitButton').onclick = function () {
            columnChooserSubmit();
        };
    }
    var abortButton = new ej.buttons.Button();
    abortButton.appendTo('#abortButton');
    if (document.getElementById('abortButton')) {
        document.getElementById('abortButton').onclick = function () {
            grid.columnChooserModule.hideDialog();
        };
    }
}


function columnChooserSubmit() {
    var checkedElements = [];
    var uncheckedElements = [];
    var showColumns = grid.getVisibleColumns().filter(function (column) { return (column.showInColumnChooser === true); });
    showColumns = showColumns.map(function (col) { return col.headerText; });
    var treeItems = document.querySelectorAll('.e-list-item');
    treeItems.forEach(function (item) {
        var itemDetails = treeObj.getNode(item);
        if (!itemDetails.hasChildren) {
            if (item.getAttribute('aria-checked') === 'true') {
                checkedElements.push(itemDetails.text);
            } else {
                uncheckedElements.push(itemDetails.text);
            }
        }
    });
    showColumns = showColumns.filter(function (col) {
        return !uncheckedElements.includes(col);
    });
    checkedElements.forEach(function (item) {
        if (!showColumns.includes(item)) {
            showColumns.push(item);
        }
    });
    var columnsToUpdate = { visibleColumns: showColumns, hiddenColumns: uncheckedElements };
    grid.columnChooserModule.changeColumnVisibility(columnsToUpdate);
}