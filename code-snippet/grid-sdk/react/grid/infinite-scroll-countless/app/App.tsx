import { ColumnDirective, ColumnsDirective, GridComponent, Inject, InfiniteScroll } from '@syncfusion/ej2-react-grids';
import { PageSettingsModel, InfiniteScrollSettingsModel } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import * as React from 'react';

function App() {
  const data: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new UrlAdaptor()
  });
  const pageSettings: PageSettingsModel = { pageSize: 50 };
  const infiniteScrollSettings: InfiniteScrollSettingsModel = { enableCountLessMode: true };
  return (<GridComponent dataSource={data} height={300} enableInfiniteScrolling={true} pageSettings={pageSettings} infiniteScrollSettings={infiniteScrollSettings}>
    <Inject services={[InfiniteScroll]} />
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='120' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='130' />
    </ColumnsDirective>
  </GridComponent>)
}
export default App;
