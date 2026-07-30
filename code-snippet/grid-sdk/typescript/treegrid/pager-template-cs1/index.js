ej.treegrid.TreeGrid.Inject(ej.treegrid.Page);

var flag = true;

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowPaging: true,
    pageSettings: {pageSize: 6,  template: '#template'},
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 160 },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    expanding: function(){
        flag = true;
    },
    collapsing: function(){
        flag = true;
    },
    dataBound: function(){
        if (flag) {
            flag = false;
            updateTemplate();
        }
    },
    actionComplete: (args) => {
        if (args.requestType === 'paging') {
            updateTemplate();
        }
    }
});

treeGridObj.appendTo('#TreeGrid');

var updateTemplate = function(){
    this.numeric = new ej.inputs.NumericTextBox({
        min: 1,
        max: 6,
        step: 1,
        format: '###.##',
        width: 200,
        change: (args) => {
            var value = args.value;
            treeGridObj.goToPage(value);
        }
    });
    this.numeric.appendTo('#currentPage');
};

