ej.treegrid.TreeGrid.Inject(ej.treegrid.Aggregate);

var customAggregateFn = function(data){
    var sampleData = ej.grids.getObject('result', data);
    var countLength = 0;
    sampleData.filter((item) => {
        var data = ej.grids.getObject('category', item);
        if (data === 'Frozen seafood') {
            countLength++;
        }
    });
    return countLength;
};

var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: summaryData,
        childMapping: 'subtasks',
        width: 'auto',
        height: 245,
        treeColumnIndex: 1,
        columns: [
            { field: 'category', headerText: 'Category', width: 200 },
            { field: 'units', headerText: 'Total Units', width: 130, type: 'number', textAlign: 'Right' },
            { field: 'unitPrice', headerText: 'Unit Price($)', width: 110, type: 'number', format: 'C2', textAlign: 'Right' },
            { field: 'price', headerText: 'Price($)', width: 110, textAlign: 'Right', type: 'number', format: 'C' },
        ],
        aggregates: [{
            showChildSummary: false,
            columns: [{
                type: 'Custom',
                customAggregate: customAggregateFn,
                columnName: 'category',
                footerTemplate: 'Count of Frozen seafood : ${Custom}'
            }]
        }]
    });
    treeGridObj.appendTo('#TreeGrid');

