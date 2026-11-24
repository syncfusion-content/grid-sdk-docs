import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Filter, Reorder, ColumnChooser, SideBar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const toolPanelSettings = {
        position: 'Right',
        isOpen: true,
        defaultToolPanel: 'columns',
        toolPanels: [
            {
                id: 'columns',
                type: 'Columns',
                headerText: 'Columns'
            },
            {
                id: 'filters',
                type: 'Filters',
                headerText: 'Filters'
            }
        ]
    };
    return <GridComponent dataSource={data} height={320} enableToolPanel={true} toolPanelSettings={toolPanelSettings} allowFiltering={true} allowReordering={true} columnChooserSettings={{ allowReordering: true }}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='140' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
            <ColumnDirective field='Freight' headerText='Freight' width='140' textAlign='Right' format='C2' />
        </ColumnsDirective>
        <Inject services={[Filter, Reorder, ColumnChooser, SideBar]} />
    </GridComponent>
};
export default App;
