var treegrid = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    created:setHeaderHeight,
    height: 105,
    treeColumnIndex: 1,
    columns: [
     { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
     { field: 'taskName', headerText: 'Task Name', customAttributes: {class: 'orientationcss'}, width: 80, textAlign: 'Center' },
     { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'},
     { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
});
treegrid.appendTo('#TreeGrid');

function setHeaderHeight(args) {
    var textWidth = document.querySelector(".orientationcss > div").scrollWidth; // obtain the width of the headerText content.
    var headerCell = document.querySelectorAll(".e-headercell");
    for (var i = 0; i < headerCell.length; i++) {
        (headerCell.item(i)).style.height = textWidth + 'px'; // assign the obtained textWidth as the height of the headerCell.
    }
}

