import { ColumnDirective, ColumnsDirective, GridComponent, Highlight, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { useRef } from 'react';
import { data } from './datasource';

function App() {
  const gridRef = useRef(null);
  const flashRows = () => {
    const grid = gridRef.current;
    const rows = grid.getSelectedRowIndexes();
    if (rows.length) {
        grid.flashCells({ rowNodes: rows });
    }
  };
  const flashColumn = () => {
    const grid = gridRef.current;
    grid.flashCells({ columns: ['Exposure'] });
  };
  const flashCells = () => {
    const grid = gridRef.current;
    grid.flashCells({ rowNodes: [0, 2], columns: ['Rating', 'Exposure'] });
  };
  return (
    <div>
      <div className="controls">
        <button className="e-btn" onClick={flashRows}>Flash selected row</button>
        <button className="e-btn" onClick={flashColumn}>Flash Exposure column</button>
        <button className="e-btn" onClick={flashCells}>Flash cells</button>
      </div>
      <GridComponent id="Grid" ref={gridRef} dataSource={data} height={300} enableHighlightOnDataChange={true}>
        <ColumnsDirective>
          <ColumnDirective field='Account' headerText='Account' width='110' isPrimaryKey={true} />
          <ColumnDirective field='Desk' headerText='Desk' width='150' />
          <ColumnDirective field='Rating' headerText='Rating' width='100' />
          <ColumnDirective field='Exposure' headerText='Exposure' width='140' format='C0' textAlign='Right' />
          <ColumnDirective field='Risk' headerText='Risk level' width='110' />
        </ColumnsDirective>
        <Inject services={[Highlight]} />
      </GridComponent>
    </div>
  );
}
export default App;
