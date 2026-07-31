ej.treegrid.TreeGrid.Inject(ej.treegrid.Aggregate);

var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: summaryRowData,
        childMapping: 'children',
        treeColumnIndex: 0,
        height: 260,
        columns: [
            { field: 'FreightID', headerText: 'Freight ID', width: 130 },
            { field: 'FreightName', width: 195, headerText: 'Freight Name' },
            { field: 'UnitWeight', headerText: 'Weight Per Unit', type: 'number', width: 130, textAlign: 'Right' },
            { field: 'TotalUnits', headerText: 'Total Units', type: 'number', width: 125, textAlign: 'Right' }
        ],
        aggregates: [{
            showChildSummary: true,
            columns: [
                {
                    type: 'Max',
                    field: 'UnitWeight',
                    columnName: 'UnitWeight',
                    footerTemplate: 'Maximum: ${Max}'
                },
                {
                type: 'Min',
                field: 'TotalUnits',
                columnName: 'TotalUnits',
                footerTemplate: 'Minimum: ${Min}'
            }]
        }]
    });
    treeGridObj.appendTo('#TreeGrid');

