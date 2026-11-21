ej.pivotview.PivotView.Inject(ej.pivotview.FlatLayout);

var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: { dataSource: pivotData },
    gridSettings: { layout: 'Flat' },
    flatSettings: {
    columns: [
    { field: 'Country', headerText: 'Country', width: 140 },
    { field: 'Products', headerText: 'Products', width: 160 },
    { field: 'Year', headerText: 'Year', width: 120 },
    { field: 'Sold', headerText: 'Units Sold', width: 120 },
    { field: 'Amount', headerText: 'Sold Amount', width: 140 }
],
    allowSorting: true,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageSize: 10 }
},
    width: '100%',
    height: 450
});
pivotObj.appendTo('#PivotTable');
