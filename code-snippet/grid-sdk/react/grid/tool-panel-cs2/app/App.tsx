import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Selection, ColumnChooser, SideBar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const toolPanelSettings: object = {
        position: 'Right',
        isOpen: true,
        defaultToolPanel: 'editing',
        toolPanels: [
            {
                id: 'editing',
                type: 'Edit',
                headerText: 'Editing'
            },
            {
                id: 'columns',
                type: 'Columns',
                headerText: 'Columns'
            }
        ]
    };
    return <GridComponent dataSource={data} height={320} enableToolPanel={true} toolPanelSettings={toolPanelSettings} editSettings={{ allowEditing: true, mode: 'Normal' }} selectionSettings={{ type: 'Multiple' }}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey={true} />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='140' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
            <ColumnDirective field='Freight' headerText='Freight' width='140' textAlign='Right' format='C2' />
        </ColumnsDirective>
        <Inject services={[Edit, Selection, ColumnChooser, SideBar]} />
    </GridComponent>
};
export default App;
