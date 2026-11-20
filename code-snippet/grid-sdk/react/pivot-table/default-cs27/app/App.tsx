import { IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    url: 'https://bi.syncfusion.com/productservice/api/sales',
    type: 'CSV',
    delimiter: ';',
    enableQuotedLineBreaks: true,
    expandAll: false,
    enableSorting: true,
    formatSettings: [{ name: 'Total Revenue', format: 'C0' }, { name: 'Total Profit', format: 'C0' }],
    rows: [
        { name: 'Region' },
        { name: 'Country' }
    ],
    columns: [
        { name: 'Item Type' },
        { name: 'Sales Channel' }
    ],
    values: [
        { name: 'Total Revenue' },
        { name: 'Total Profit' }
    ]
  };
  let pivotObj: PivotViewComponent;
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
};

export default App;
