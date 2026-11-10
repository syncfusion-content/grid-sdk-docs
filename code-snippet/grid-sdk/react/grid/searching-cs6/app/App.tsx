import { ColumnDirective, ColumnsDirective, GridComponent, SearchSettingsModel } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const [searchSettings, setSearchSettings] = React.useState<SearchSettingsModel>({ mode: 'Default' });
  const searchModes = [
    { text: 'Default', value: 'Default' },
    { text: 'Immediate', value: 'Immediate' }
  ];

  const created = () => {
        (document.getElementById((grid as GridComponent).element.id + "_searchbar") as HTMLElement).addEventListener('keyup', (event) => {
          (grid as GridComponent).search((event.target as HTMLInputElement).value)
        });
    }

  const handleSearchModeChange = (args: ChangeEventArgs) => {
    setSearchSettings({
      mode: args.value as string,
      immediateModeDelay: args.value === 'Immediate' ? 1500 : 0
    });
  };

  return (<div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
      <label htmlFor="searchMode">Search Mode</label>
      <DropDownListComponent
        id="searchMode"
        dataSource={searchModes}
        fields={{ text: 'text', value: 'value' }}
        value="Default"
        change={handleSearchModeChange}
        width="140px"
      />
    </div>
    <GridComponent dataSource={data} height={280} searchSettings={searchSettings} toolbar={['Search']}
        ref={g => grid = g} created={created}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
            <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign="Right"/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'/>
        </ColumnsDirective>
        <Inject services={[Toolbar]} />
    </GridComponent>
    </div>)
};
export default App;