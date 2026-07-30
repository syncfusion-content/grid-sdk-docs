ej.treegrid.TreeGrid.Inject(ej.treegrid.Resize);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: stackedData,
        childMapping: 'subtasks',
        allowResizing: true,
        treeColumnIndex: 1,
        height: 260,
        columns: [
            {
                headerText: 'Order Details', textAlign: 'Center', columns: [
                    { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
                    { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 170 },
                ]
            },
            {
                headerText: 'Shipment Details', textAlign: 'Center', columns: [
                    { field: 'shipMentCategory', headerText: 'Shipment Category', textAlign: 'Left', width: 90 },
                    { field: 'shippedDate', headerText: 'Shipped Date', textAlign: 'Right', width: 90, format: 'yMd' }
                ]
            }
        ]
});

treeGridObj.appendTo('#TreeGrid');

