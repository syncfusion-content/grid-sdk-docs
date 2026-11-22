import { ColumnDirective, ColumnsDirective, GridComponent, Group, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const groupOptions: object = { columns: ['state', 'portfolioType'], defaultExpanded: 1, enableSticky: true };
  return (<GridComponent dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={400}>
      <ColumnsDirective>
        <ColumnDirective field='accountId' headerText='Account ID' width='140' />
        <ColumnDirective field='fullName' headerText='Full Name' width='150' />
        <ColumnDirective field='state' headerText='State' width='130' />
        <ColumnDirective field='portfolioType' headerText='Portfolio Type' width='140' />
        <ColumnDirective field='balanceUsd' headerText='Balance (USD)' textAlign="Right" width='140' />
        <ColumnDirective field='ytdReturnPct' headerText='YTD Return %' textAlign="Right" width='130' />
        <ColumnDirective field='riskLevel' headerText='Risk Level' width='120' />
      </ColumnsDirective>
      <Inject services={[Group]} />
    </GridComponent>
  );
}
export default App;
