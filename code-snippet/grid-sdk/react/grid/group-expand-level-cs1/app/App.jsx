import { ColumnDirective, ColumnsDirective, GridComponent, Group, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const groupOptions = { columns: ['ShipCountry', 'ShipCity'], defaultExpanded: 1 };
  return (<GridComponent dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={400}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" width='120' />
        <ColumnDirective field='CustomerName' headerText='Customer Name' width='160' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='140' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' textAlign="Right" width='120' />
      </ColumnsDirective>
      <Inject services={[Group]} />
    </GridComponent>
  );
}
export default App;
