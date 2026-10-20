var pivotData = [
    { Country: 'France', Product: 'Mountain Bikes', Sold: 31, Amount: 52824 },
    { Country: 'France', Product: 'Road Bikes', Sold: 25, Amount: 42600 },
    { Country: 'Germany', Product: 'Mountain Bikes', Sold: 51, Amount: 86904 },
    { Country: 'Germany', Product: 'Road Bikes', Sold: 90, Amount: 153360 }
];

var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Product' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }]
    },
    height: 350,
    showGroupingBar: true,
    showFieldList: true,
    allowCalculatedField: true
});
pivotTableObj.appendTo('#PivotTable');
