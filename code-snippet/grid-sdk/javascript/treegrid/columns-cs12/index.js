var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: formatData,
    childMapping: 'subtasks',
    height: 315,
    treeColumnIndex: 1,
    columns: [
            { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            { 
                field: 'orderName', headerText: 'Order Name', textAlign: 'Left',  valueAccessor: orderFormatter, width: 215
            },
            { 
                field: 'orderDate', headerText: 'Order Date', textAlign: 'Right', width: 110,
                format: { format: 'dd/MM/yyyy', type: 'date' } 
            },
            { 
                field: 'price', headerText: 'Price', textAlign: 'Right', width: 100,  valueAccessor: currencyFormatter, type: 'number' 
            },
    ],
    height: 315
});

treeGridObj.appendTo('#TreeGrid');

function currencyFormatter(field, data, column) {
    return '€' + data['price'];
}

function orderFormatter(field, data, column) {
    return data[field] + '-' + data['Category'];
}

