import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, Find } from '@syncfusion/ej2-react-grids';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const groupSettings = { columns: ['ShipCountry'] };
  const onSwitchChange = (args) => {
    grid.allowTextSelection = args.checked;
  };
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 10px' }}>
        <label>Enable or disable text selection property</label>
        <SwitchComponent id="switch" change={onSwitchChange} checked={true}></SwitchComponent>
      </div>
      <GridComponent dataSource={data} ref={g => grid = g} allowGrouping={false} groupSettings={groupSettings} height='315'>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' textAlign='Right' width='120'></ColumnDirective>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='130'></ColumnDirective>
          <ColumnDirective field='Freight' headerText='Freight' format='C2' width='100'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Group, Find]} />
      </GridComponent>
    </div>
  );
}
export default App;