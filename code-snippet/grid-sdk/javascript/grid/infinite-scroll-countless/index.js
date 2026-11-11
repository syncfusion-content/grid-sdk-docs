ej.grids.Grid.Inject(ej.grids.InfiniteScroll);

var data = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new ej.data.UrlAdaptor()
});

var grid = new ej.grids.Grid({
    dataSource: data,
    height: 300,
    enableInfiniteScrolling: true,
    pageSettings: { pageSize: 50 },
    infiniteScrollSettings: { enableCountLessMode: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 }
    ]
});
grid.appendTo('#Grid');
