ej.treegrid.TreeGrid.Inject(ej.treegrid.Toolbar);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 265,
    toolbar: ['Print'],
    treeColumnIndex: 1,
    toolbarClick: function() {
        for (var i = 0; i < this.grid.columns.length; i++) {
            debugger;
            if (this.grid.columns[i].field == "duration") {
                this.grid.columns[i].visible = true;
            }
            else if (this.grid.columns[i].field == "startDate") {
                this.grid.columns[i].visible = false;
            }
        }
    },
    printComplete: function() {
        for (var i = 0; i < this.grid.columns.length; i++) {
            if (this.grid.columns[i].field == "duration") {
                this.grid.columns[i].visible = false;
            }
            else if (this.grid.columns[i].field == "startDate") {
                this.grid.columns[i].visible = true;
            }
        }
    },
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', visible: false, width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');

