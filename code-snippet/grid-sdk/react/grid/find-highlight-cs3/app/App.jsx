import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Find } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';
 
function App() {
  let gridInstance = null;
  const [findText, setFindText] = React.useState('');
  const [hasSearched, setHasSearched] = React.useState(false);
 
  function find() {
    if (gridInstance && findText.trim()) {
      gridInstance.find(findText);
      setHasSearched(true);
    }
  }
 
  function findNext() {
    if (gridInstance && hasSearched) {
      gridInstance.findNext();
    }
  }
 
  function findPrevious() {
    if (gridInstance && hasSearched) {
      gridInstance.findPrevious();
    }
  }
 
  function clearFind() {
    if (gridInstance) {
      gridInstance.clearFind();
    }
    setFindText('');
    setHasSearched(false);
  }
 
  function handleFindTextChange(event) {
    setFindText(event.target.value);
    if (gridInstance) {
      gridInstance.clearFind();
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
        <ButtonComponent content="Find" style={{ marginLeft: '10px' }} disabled={!findText.trim()} onClick={find} />
        <ButtonComponent content="Next" style={{ marginLeft: '10px' }} disabled={!hasSearched} onClick={findNext} />
        <ButtonComponent content="Previous" style={{ marginLeft: '10px' }} disabled={!hasSearched} onClick={findPrevious} />
        <ButtonComponent content="Clear" style={{ marginLeft: '10px' }} disabled={!findText.trim() && !hasSearched} onClick={clearFind} />
      </div>
      <GridComponent
        ref={(grid) => {
          gridInstance = grid;
        }}
        dataSource={data}
        height={272}
      >
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
