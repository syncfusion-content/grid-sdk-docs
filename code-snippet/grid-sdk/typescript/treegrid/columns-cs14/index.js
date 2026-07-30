var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: formatData,
        height: 315,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        columns: [
            { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 110 },
            { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 210 },
            { field: 'units', headerText: 'Units', textAlign: 'Right', width: 120 },
            { field: 'unitPrice', headerText: 'Unit Price', textAlign: 'Right', width: 120, format: 'c2', type: 'number' },
            { field: 'price', headerText: 'Total Price', valueAccessor: totalPrice, textAlign: 'Right', width: 120, format: 'c2', type: 'number' },
        ]
});

treeGridObj.appendTo('#TreeGrid');

function totalPrice(field, data, column){
    return data.units * data.unitPrice;
};

