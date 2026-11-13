import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Inject, Selection, Sort, StatusBar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const selectionSettings = { type: 'Multiple', mode: 'Row' };
  const filterSettings = { type: 'Excel' };
  const statusBarValueFormatter = (params) => params.value.toLocaleString();
  const statusBarSettings = {
    items: [
      {
        key: 'totalRows',
        type: 'TotalRowCount',
        position: 'Left',
        statusPanelParams: { valueFormatter: statusBarValueFormatter }
      },
      { key: 'selectedCount', type: 'SelectedRowCount', position: 'Center' }
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
        allowSelection={true}
        selectionSettings={selectionSettings}
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
        <Inject services={[Filter, Selection, Sort, StatusBar]} />
      </GridComponent>
    </div>
  );
}

export default App;
