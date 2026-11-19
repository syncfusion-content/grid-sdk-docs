import { ColumnDirective, ColumnsDirective, GridComponent, Inject, InfiniteScroll } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import * as React from 'react';

function App() {
  const data = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new UrlAdaptor()
  });
  const pageSettings = { pageSize: 50 };
  const infiniteScrollSettings = { enableCountLessMode: true };
  return (<GridComponent dataSource={data} height={300} enableInfiniteScrolling={true} pageSettings={pageSettings} infiniteScrollSettings={infiniteScrollSettings}>
    <Inject services={[InfiniteScroll]} />
    <ColumnsDirective>
      <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign='Right' />
      <ColumnDirective field='Employees' headerText='Employee Name' width='120' />
      <ColumnDirective field='Designation' headerText='Designation' width='100' />
      <ColumnDirective field='Location' headerText='Location' width='100' />
      <ColumnDirective field='CurrentSalary' headerText='Salary' format='C2' width='100' textAlign='Right' />
    </ColumnsDirective>
  </GridComponent>)
}
export default App;
