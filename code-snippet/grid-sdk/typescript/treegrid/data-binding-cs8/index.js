var data = new ej.data.DataManager({
       url: 'http://some.com/invalidUrl'
    });

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: data,
    idMapping: 'TaskID',
    parentIdMapping: 'ParentItem',
    treeColumnIndex: 1,
    actionFailure: (e) => {
      var span = document.createElement('span');
      treeGridObj.element.parentNode.insertBefore(span, treeGridObj.element);
      span.style.color = "#FF0000"
      span.innerHTML = "Server exception: 404 Not found";
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 80, textAlign: 'Right' },
        { field: 'TaskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
        { field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'Duration', headerText: 'Duration', width: 90, textAlign: 'Right' },
    ]
});
    
treeGridObj.appendTo('#TreeGrid');

