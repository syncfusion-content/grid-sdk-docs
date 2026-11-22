import { ColumnDirective, ColumnsDirective, GridComponent, Highlight, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { useRef } from 'react';
import { data } from './datasource';

function App() {
  const gridRef = useRef<GridComponent>(null);
  const updatePrices = () => {
    const grid = gridRef.current as GridComponent;
    const symbols = ['AAPL', 'NVDA', 'TSLA'];
    symbols.forEach((symbol) => {
        grid.setCellValue(symbol, 'Price', +(100 + Math.random() * 150).toFixed(2));
    });
  };
  return (
    <div>
      <div className="controls">
        <button className="e-btn" onClick={updatePrices}>Update prices</button>
      </div>
      <GridComponent id="Grid" ref={gridRef} dataSource={data} height={300} enableHighlightOnDataChange={true}>
        <ColumnsDirective>
          <ColumnDirective field='Symbol' headerText='Symbol' width='110' isPrimaryKey={true} />
          <ColumnDirective field='Company' headerText='Company' width='180' />
          <ColumnDirective field='Price' headerText='Price' width='120' format='C2' textAlign='Right' />
          <ColumnDirective field='Volume' headerText='Volume' width='140' format='N0' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Highlight]} />
      </GridComponent>
    </div>
  );
}
export default App;
