ej.treegrid.TreeGrid.Inject(ej.treegrid.ContextMenu, ej.treegrid.Page);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowPaging: true,
    pageSettings: {pageSize: 7},
    contextMenuClick: function (args) {
        treeGridObj.getColumnByField('taskID');
        if (args.item.id === 'collapserow') {
            treeGridObj.collapseRow((treeGridObj.getSelectedRows()[0]), treeGridObj.getSelectedRecords()[0]);
        } else {
            treeGridObj.expandRow((treeGridObj.getSelectedRows()[0]), treeGridObj.getSelectedRecords()[0]);
        }
    },
    contextMenuOpen: function (args) {
        var elem = args.event.target;
        var uid = elem.closest('.e-row').getAttribute('data-uid');
        if (ej.base.isNullOrUndefined(ej.base.getValue('hasChildRecords', treeGridObj.grid.getRowObjectFromUID(uid).data))) {
            args.cancel = true;
        }
        else {
            var flag = ej.base.getValue('expanded', treeGridObj.grid.getRowObjectFromUID(uid).data);
            var val = flag ? 'none' : 'block';
            document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + val + ';');
            val = !flag ? 'none' : 'block';
            document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + val + ';');
        }
    },
    contextMenuItems: [
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' }
    ],
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID',  width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

