import { ColumnDirective, ColumnsDirective, GridComponent, Inject, ColumnChooser, SideBar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const toolPanelSettings: object = {
        position: 'Left',
        isOpen: true,
        defaultToolPanel: 'columns',
        toolPanels: [
            {
                id: 'columns',
                type: 'Columns',
                headerText: 'Columns'
            },
            {
                id: 'summary',
                type: 'Custom',
                headerText: 'Summary',
                iconCss: 'e-icons e-description',
                template: () => (<div className='custom-panel'><h4>Order Summary</h4><p>Total orders: 8</p><p>Select a row to review the order here.</p></div>)
            }
        ]
    };
    return <GridComponent dataSource={data} height={320} enableToolPanel={true} toolPanelSettings={toolPanelSettings}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='140' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
            <ColumnDirective field='Freight' headerText='Freight' width='140' textAlign='Right' format='C2' />
        </ColumnsDirective>
        <Inject services={[ColumnChooser, SideBar]} />
    </GridComponent>
};
export default App;
