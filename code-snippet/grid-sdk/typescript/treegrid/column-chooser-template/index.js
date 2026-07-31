ej.treegrid.TreeGrid.Inject(ej.treegrid.Selection, ej.treegrid.Toolbar, ej.treegrid.ColumnChooser);

   var treeObj;
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
    function renderCustomColumnChooser(targetLHTMLElement, columns) {
        var treeData;
    var parentNodes = [
        { id: 1, name: 'Task Info', hasChild: true, expanded: true },
        { id: 2, name: 'Schedule', hasChild: true, expanded: true },
        { id: 3, name: 'Progress', hasChild: true, expanded: true }
    ];
    if(columns && columns.length) {
    treeData = columns.map(function (column) {
        var parentId;
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
            enableRtl: treegrid.enableRtl ? true : false,
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
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: sampleData,
        childMapping: 'subtasks',
        height: 350,
        treeColumnIndex: 1,
        clipMode: 'EllipsisWithTooltip',
        showColumnChooser: true,
        allowPaging: true,
        toolbar: ['ColumnChooser'],
        columnChooserSettings: {
            headerTemplate: '#columnchooser-headertemplate', footerTemplate: '#columnchooser-footertemplate', enableSearching: true,
            template: '#column-chooser-template',
            renderCustomColumnChooser: renderCustomColumnChooser, ignoreAccent: true, operator: 'startsWith'
        },
        pageSettings: { pageCount: 5 },
    columns: [
        { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'taskName', headerText: 'Task Name', width: 240, showInColumnChooser: false },
        { field: 'startDate', headerText: 'Start Date', width: 110, format: 'yMd' },
        { field: 'endDate', headerText: 'End Date', width: 110, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'duration', headerText: 'Duration', width: 100, textAlign: 'Right' },
        { field: 'progress', headerText: 'Progress', width: 100, textAlign: 'Right' },
        { field: 'priority', headerText: 'Priority', width: 90 }
    ],
        created: onCreated
    });
    treegrid.appendTo('#TreeGrid');

    function onCreated() {
        var submitButton = new ej.buttons.Button();
        submitButton.appendTo('#submitButton');
        if (document.getElementById('submitButton')) {
            (document.getElementById('submitButton')).onclick = function (e) {
                columnChooserSubmit();
            };
        }
        var abortButton = new ej.buttons.Button();
        abortButton.appendTo('#abortButton');
        if (document.getElementById('abortButton')) {
            (document.getElementById('abortButton')).onclick = function (e) {
                (treegrid.grid.columnChooserModule).hideDialog();
            };
        }
    }

    function columnChooserSubmit() {
        var checkedElements = [];
        var uncheckedElements = [];
        var showColumns = treegrid.getVisibleColumns().filter(function (column) { return (column.showInColumnChooser === true); });
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
            return uncheckedElements.indexOf(col) === -1;
        });
        checkedElements.forEach(function (item) {
            if (!showColumns.includes(item)) {
                showColumns.push(item);
            }
        });
        var columnsToUpdate = { visibleColumns: showColumns, hiddenColumns: uncheckedElements };
        treegrid.grid.columnChooserModule.changeColumnVisibility(columnsToUpdate);
    }