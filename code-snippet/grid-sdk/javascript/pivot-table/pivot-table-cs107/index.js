var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        url: 'https://bi.syncfusion.com/productservice/api/sales',
        type: 'CSV',
        delimiter: ',',
        enableQuotedLineBreaks: true,
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Total Revenue', format: 'C0' }, { name: 'Total Profit', format: 'C0' }],
        rows: [{ name: 'Region' }, { name: 'Country' }],
        columns: [{ name: 'Item Type' }, { name: 'Sales Channel' }],
        values: [{ name: 'Total Revenue' }, { name: 'Total Profit' }]
    },
    height: 300,
    width: '100%'
});
pivotObj.appendTo('#PivotTable');

