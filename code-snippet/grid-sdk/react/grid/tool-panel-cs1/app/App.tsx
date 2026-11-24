import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Filter, Reorder, ColumnChooser, Group, Aggregate, SideBar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const toolPanelSettings: object = {
        position: 'Right',
        isOpen: true,
        toolPanels: [
            'Columns',
            'Filters'
        ]
    };
    return <GridComponent dataSource={data} height={320} enableToolPanel={true} toolPanelSettings={toolPanelSettings} allowFiltering={true} allowGrouping={true} allowReordering={true} columnChooserSettings={{ allowReordering: true }}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='140' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
            <ColumnDirective field='Freight' headerText='Freight' width='140' textAlign='Right' format='C2' />
        </ColumnsDirective>
        <Inject services={[Filter, Reorder, ColumnChooser, Group, Aggregate, SideBar]} />
    </GridComponent>
};
export default App;
