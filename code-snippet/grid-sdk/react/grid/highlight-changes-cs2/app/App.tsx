import { ColumnDirective, ColumnsDirective, GridComponent, Highlight, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { useRef, useState } from 'react';
import { data } from './datasource';

function App() {
  const gridRef = useRef<GridComponent>(null);
  const [color, setColor] = useState('#ffb347');
  const [flash, setFlash] = useState(500);
  const [fade, setFade] = useState(1000);
  const applySettings = () => {
    const grid = gridRef.current as GridComponent;
    grid.highlightSettings.color = color;
    grid.highlightSettings.flashDuration = Number(flash);
    grid.highlightSettings.fadeDuration = Number(fade);
  };
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
        <label>Color <input type="color" value={color} onChange={(e) => setColor(e.target.value)} /></label>
        <label>Flash duration (ms) <input type="number" value={flash} min={0} step={100} onChange={(e) => setFlash(Number(e.target.value))} /></label>
        <label>Fade duration (ms) <input type="number" value={fade} min={0} step={100} onChange={(e) => setFade(Number(e.target.value))} /></label>
        <button className="e-btn" onClick={applySettings}>Apply settings</button>
        <button className="e-btn" onClick={updatePrices}>Update prices</button>
      </div>
      <GridComponent id="Grid" ref={gridRef} dataSource={data} height={300} enableHighlightOnDataChange={true} highlightSettings={{ color: '#ffb347', flashDuration: 500, fadeDuration: 1000 }}>
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
