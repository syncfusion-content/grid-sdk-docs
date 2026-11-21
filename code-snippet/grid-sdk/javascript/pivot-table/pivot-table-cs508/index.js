var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        rows: [{ name: 'Country' }],
        columns: [{ name: 'Products' }],
        values: [
            { name: 'OrderDate', caption: 'Earliest Order', type: 'Min' },
            { name: 'OrderDate', caption: 'Order Count', type: 'Count' },
            { name: 'Amount', caption: 'Total Amount', type: 'Sum' }
        ],
        formatSettings: [
            { name: 'OrderDate', type: 'date', format: 'dd/MM/yyyy' },
            { name: 'Amount', format: 'C0' }
        ]
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');
