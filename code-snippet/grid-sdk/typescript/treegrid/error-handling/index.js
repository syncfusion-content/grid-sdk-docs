ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true},
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right'},
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', editType: 'datepickeredit', type: 'date', format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    height: 270,
    actionFailure: (e) => {
        var span = document.createElement('span');
        treeGridObj.element.parentNode.insertBefore(span, treeGridObj.element);
        span.style.color = "#FF0000"
        span.innerHTML = e.error[0];
      },
});

treeGridObj.appendTo('#TreeGrid');

