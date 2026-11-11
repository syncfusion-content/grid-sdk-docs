import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Find } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
  const grid = React.useRef(null);
  const [findText, setFindText] = React.useState('');
  const hasQuery = findText.trim().length > 0;
  const find = () => {
    grid.current.find(findText);
  };
  const findNext = () => {
    grid.current.findNext();
  };
  const findPrevious = () => {
    grid.current.findPrevious();
  };
  const clearFind = () => {
    grid.current.clearFind();
    setFindText('');
  };
  return (
    <div>
        <div style={{ paddingBottom: '20px' }}>
          <input type="text" className="e-input" placeholder="Enter text to find" style={{ width: '220px', display: 'inline-block' }} value={findText} onChange={event => setFindText(event.target.value)} />
          <ButtonComponent style={{ marginLeft: '10px' }} disabled={!hasQuery} onClick={find}>Find</ButtonComponent>
          <ButtonComponent style={{ marginLeft: '10px' }} disabled={!hasQuery} onClick={findNext}>Next</ButtonComponent>
          <ButtonComponent style={{ marginLeft: '10px' }} disabled={!hasQuery} onClick={findPrevious}>Previous</ButtonComponent>
          <ButtonComponent style={{ marginLeft: '10px' }} disabled={!hasQuery} onClick={clearFind}>Clear</ButtonComponent>
        </div>
        <GridComponent ref={g => grid = g} dataSource={data} height={272}>
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
