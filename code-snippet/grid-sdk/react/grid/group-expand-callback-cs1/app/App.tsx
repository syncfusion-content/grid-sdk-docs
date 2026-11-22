import { ColumnDirective, ColumnsDirective, GridComponent, Group, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const groupOptions: object = { columns: ['Category', 'Region'], isGroupOpenByDefault: (args: any) => args.level === 1 && args.key === 'Beverages' };
  return (<GridComponent dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={400}>
      <ColumnsDirective>
        <ColumnDirective field='ProductID' headerText='Product ID' textAlign="Right" width='120' />
        <ColumnDirective field='ProductName' headerText='Product Name' width='150' />
        <ColumnDirective field='Category' headerText='Category' width='140' />
        <ColumnDirective field='Region' headerText='Region' width='130' />
        <ColumnDirective field='UnitPrice' headerText='Unit Price' textAlign="Right" width='120' />
        <ColumnDirective field='UnitsInStock' headerText='Units In Stock' textAlign="Right" width='140' />
      </ColumnsDirective>
      <Inject services={[Group]} />
    </GridComponent>
  );
}
export default App;
