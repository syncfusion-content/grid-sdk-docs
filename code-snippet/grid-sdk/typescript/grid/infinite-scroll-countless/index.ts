import { Grid, InfiniteScroll } from '@syncfusion/ej2-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
Grid.Inject(InfiniteScroll);

const data: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new UrlAdaptor()
});

let grid: Grid = new Grid({
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
