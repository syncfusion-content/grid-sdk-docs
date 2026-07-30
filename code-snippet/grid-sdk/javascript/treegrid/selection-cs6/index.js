
var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    selectionSettings: { type: 'Multiple' },
    dataBound: ()=>{   
        var rowIndexes =[];          
        treeGridObj.grid.dataSource.forEach((data,index)=>{
		if (data.taskID === 3 || data.taskID === 5){
               rowIndexes.push(index);
           }
		});
        treeGridObj.selectRows(rowIndexes);
    },
    height: 270,
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
        { field: 'progress', headerText: 'progress', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');



