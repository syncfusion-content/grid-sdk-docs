import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Find, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const toolbarOptions: ToolbarItems[] = ['Find'];
  const findSettings = { enabled: true };
  return (
    <GridComponent dataSource={data} findSettings={findSettings} height={272} toolbar={toolbarOptions}>
          <ColumnsDirective>
              <ColumnDirective field='TicketID' headerText='Ticket ID' width='90' textAlign="Right"/>
              <ColumnDirective field='Customer' headerText='Customer' width='120' textAlign="Left"/>
              <ColumnDirective field='Subject' headerText='Subject' width='200' textAlign="Left"/>
              <ColumnDirective field='Status' headerText='Status' width='100' textAlign="Left"/>
              <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign="Left"/>
          </ColumnsDirective>
          <Inject services={[Find, Toolbar]} />
        </GridComponent>
  );
}
export default App;
