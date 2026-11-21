import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {
  let dataSourceSettings = {
    dataSource: pivotData,
    rows: [{ name: 'Country' }],
    columns: [{ name: 'Products' }],
    values: [
      { name: 'OrderDate', caption: 'Earliest Order', type: 'Min' },
      { name: 'OrderDate', caption: 'Order Count', type: 'Count' },
      { name: 'Amount', caption: 'Total Amount', type: 'Sum' }
    ],
    formatSettings: [
      { name: 'OrderDate', type: 'date', format: 'dd/MM/yyyy' },
      { name: 'Amount', format: 'C0' }
    ]
  };

  let pivotObj;
  return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
}

export default App;
