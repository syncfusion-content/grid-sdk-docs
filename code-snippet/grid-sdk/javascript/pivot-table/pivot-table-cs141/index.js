var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        allowLabelFilter: true,
        allowValueFilter: true,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        rows: [{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
        fieldMapping: [
            { name: 'Quarter' },
            { name: 'Products', groupName: 'Products' },
            { name: 'Amount', groupName: 'Sales/Regional', caption: 'Sold Amount' },
            { name: 'Sold', groupName: 'Sales/Domestic' },
        ]
    },
     height: 350,
    showFieldList: true,
    showGroupingBar: true
});
pivotTableObj.appendTo('#PivotTable');

