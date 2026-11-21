import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const selectionSettings: SelectionSettingsModel = { mode: 'Row', type: 'Multiple' };
  const deselectRows = () => {
    (grid as GridComponent).selectionModule.deselectRows([1, 2, 3]);
  }
  return (<div>
    <div style={{ padding: "20px 0px 0px 0px" }}>
      <ButtonComponent className='btn' onClick={() => deselectRows()}>Deselect Rows at Index 1, 2, 3</ButtonComponent>
    </div>
    <div style={{ padding: "20px 0px 0px 0px" }}>
      <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings} allowPaging={true} pageSettings={{ pageSize: 5 }}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
          <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
        </ColumnsDirective>
      </GridComponent>
    </div></div>)
};
export default App;
