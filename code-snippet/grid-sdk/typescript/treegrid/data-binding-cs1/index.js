ej.treegrid.TreeGrid.Inject(ej.treegrid.Page);

var treeGridObj = new ej.treegrid.TreeGrid({
    idMapping: 'TaskID',
    parentIdMapping: 'ParentItem',
    pageSettings: {pageSize: 7},
    allowPaging: true,
    treeColumnIndex: 1,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 80, textAlign: 'Right' },
        { field: 'TaskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
        { field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'Duration', headerText: 'Duration', width: 90, textAlign: 'Right' },
    ]
});
    
treeGridObj.appendTo('#TreeGrid');

let button = document.createElement('button');
button.textContent = 'Bind Data';
treeGridObj.element.parentNode.insertBefore(button, treeGridObj.element);
button.addEventListener("click", function(e){
    let fetch = new ej.base.Fetch("https://services.syncfusion.com/js/production/api/SelfReferenceData","GET");
    treeGridObj.showSpinner();
    fetch.send();
    fetch.onSuccess = function (data) {
        treeGridObj.hideSpinner();
        treeGridObj.dataSource = data;
    };
});

