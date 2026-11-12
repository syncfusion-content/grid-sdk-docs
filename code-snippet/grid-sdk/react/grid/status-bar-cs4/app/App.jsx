import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Inject, Sort, StatusBar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const filterSettings = { type: 'Excel' };
  const statusBarSettings = {
    items: [
      {
        key: 'custom',
        type: 'Custom',
        position: 'Right',
        statusPanelParams: {
          template: (context) => {
            const panel = document.createElement('div');
            panel.textContent = 'Total Revenue: ' + context.totalCount;
            return panel;
          }
        }
      }
    ]
  };

  return (
    <div>
      <GridComponent
        dataSource={data}
        height={320}
        allowFiltering={true}
        filterSettings={filterSettings}
        allowSorting={true}
        enableStatusBar={true}
        statusBarSettings={statusBarSettings}
      >
        <ColumnsDirective>
          <ColumnDirective field='ProductID' headerText='Product ID' width='120' textAlign='Right' />
          <ColumnDirective field='ProductName' headerText='Product Name' width='160' />
          <ColumnDirective field='Category' headerText='Category' width='140' />
          <ColumnDirective field='PurchasePrice' headerText='Purchase Price' width='140' format='C2' textAlign='Right' />
          <ColumnDirective field='SellingPrice' headerText='Selling Price' width='140' format='C2' textAlign='Right' />
          <ColumnDirective field='AvailableStock' headerText='Available Stock' width='150' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Filter, Sort, StatusBar]} />
      </GridComponent>
    </div>
  );
}

export default App;
