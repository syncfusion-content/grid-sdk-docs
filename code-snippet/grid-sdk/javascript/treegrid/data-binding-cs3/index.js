ej.treegrid.TreeGrid.Inject(ej.treegrid.Page);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: projectData,
    idMapping: 'TaskID',
    parentIdMapping: 'parentID',
    allowPaging: true,
    pageSettings: {pageSize: 7},
    treeColumnIndex: 1,
    columns: [
                { field: 'TaskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
                { field: 'TaskName', headerText: 'Task Name', width: 180 },
                {
                    field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
                },
                { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

