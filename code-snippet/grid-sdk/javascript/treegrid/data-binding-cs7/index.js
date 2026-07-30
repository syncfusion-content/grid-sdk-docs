ej.treegrid.TreeGrid.Inject(ej.treegrid.Page);

var data = new ej.data.DataManager({
        url: 'https://services.syncfusion.com/js/production/api/SelfReferenceData',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
});
   
var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: data,
    hasChildMapping: 'isParent',
    idMapping: 'TaskID',
    parentIdMapping: 'ParentItem',
    height: 260,
    query: new ej.data.Query().addParams('ej2treegrid', 'true'),
    treeColumnIndex: 1,
    allowPaging: true,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 80, textAlign: 'Right' },
        { field: 'TaskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
        { field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'Duration', headerText: 'Duration', width: 90, textAlign: 'Right' },
    ]
});

    treeGridObj.appendTo('#TreeGrid');

