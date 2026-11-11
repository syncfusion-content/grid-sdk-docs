import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import { SwitchComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const groupSettings: GroupSettingsModel = { columns: ['ShipCountry'] };
  const onSwitchChange = (args: ChangeEventArgs): void => {
    if (!args.checked as boolean) {
        (grid as GridComponent).allowTextSelection = false;
    } else {
        (grid as GridComponent).allowTextSelection = true;
    }
  };
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 10px' }}>
        <label>Enable or disable text selection property</label>
        <SwitchComponent id="switch" change={onSwitchChange} checked={true}></SwitchComponent>
      </div>
      <GridComponent dataSource={data} ref={g => grid = g} allowGrouping={true} groupSettings={groupSettings} height='315'>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' textAlign='Right' width='120'></ColumnDirective>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='130'></ColumnDirective>
          <ColumnDirective field='Freight' headerText='Freight' format='C2' width='100'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent>
    </div>
  );
}
export default App;