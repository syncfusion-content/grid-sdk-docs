import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Find } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
 
function App() {
  const gridInstance = React.useRef(null);
  const [findText, setFindText] = React.useState('');
  const [hasSearched, setHasSearched] = React.useState(false);
 
  function find() {
    if (gridInstance.current && findText.trim()) {
      gridInstance.current.find(findText);
      setHasSearched(true);
    }
  }
 
  function findNext() {
    if (gridInstance.current && hasSearched) {
      gridInstance.current.findNext();
    }
  }
 
  function findPrevious() {
    if (gridInstance.current && hasSearched) {
      gridInstance.current.findPrevious();
    }
  }
 
  function clearFind() {
    if (gridInstance.current) {
      gridInstance.current.clearFind();
    }
    setFindText('');
    setHasSearched(false);
  }
 
  function handleFindTextChange(event) {
    setFindText(event.target.value);
    if (gridInstance.current) {
      gridInstance.current.clearFind();
    }
    setHasSearched(false);
  }
 
  return (
    <div>
      <div style={{ paddingBottom: '20px', textAlign: 'left' }}>
        <input
          type="text"
          className="e-input"
          placeholder="Enter text to find"
          style={{ width: '220px', display: 'inline-block' }}
          value={findText}
          onChange={handleFindTextChange}
        />
        <button className="e-control e-btn" style={{ marginLeft: '10px' }} disabled={!findText.trim()} onClick={find}>Find</button>
        <button className="e-control e-btn" style={{ marginLeft: '10px' }} disabled={!hasSearched} onClick={findNext}>Next</button>
        <button className="e-control e-btn" style={{ marginLeft: '10px' }} disabled={!hasSearched} onClick={findPrevious}>Previous</button>
        <button className="e-control e-btn" style={{ marginLeft: '10px' }} disabled={!findText.trim() && !hasSearched} onClick={clearFind}>Clear</button>
      </div>
      <GridComponent ref={gridInstance} dataSource={data} height={272}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='90' textAlign="Right"/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='110' textAlign="Left"/>
          <ColumnDirective field='ShipCity' headerText='Ship City' width='120' textAlign="Left"/>
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='120' textAlign="Left"/>
          <ColumnDirective field='Freight' headerText='Freight' width='90' textAlign="Right" format="C2"/>
        </ColumnsDirective>
        <Inject services={[Find]} />
      </GridComponent>
    </div>
  );
}
export default App;
