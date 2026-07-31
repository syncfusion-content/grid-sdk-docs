ej.treegrid.TreeGrid.Inject(ej.treegrid.Filter);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 220,
    treeColumnIndex: 1,
    columns: [
                { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 180 },
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
                { field: 'progress', headerText: 'progress', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

var searchBtn= new ej.buttons.Button();
searchBtn.appendTo('#search');

document.getElementById('search').addEventListener('click', function() {
    var searchText = document.getElementsByClassName('searchtext')[0].value;
    treeGridObj.search(searchText);
});


