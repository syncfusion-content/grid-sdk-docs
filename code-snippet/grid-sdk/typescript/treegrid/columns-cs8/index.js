var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: formatData,
    childMapping: 'subtasks',
    height: 315,
    treeColumnIndex: 1,
    columns: [
                { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
                { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 220 },
                { 
                    field: 'orderDate', headerText: 'Order Date', textAlign: 'Right', width: 160,
                    format: { format: 'dd/MM/yyyy', type: 'date' } 
                },
                { field: 'price', headerText: 'Price', textAlign: 'Right', width: 90, format: 'c2', type: 'number' },
            ]
});

treeGridObj.appendTo('#TreeGrid');

