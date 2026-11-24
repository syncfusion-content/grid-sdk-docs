import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Selection, ColumnChooser, SideBar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const toolPanelSettings: object = {
        position: 'Right',
        width: 300,
        toolPanels: [
            'Edit',
            'Columns'
        ]
    };
    return <GridComponent dataSource={data} height={320} enableToolPanel={true} toolPanelSettings={toolPanelSettings} editSettings={{ allowEditing: true, mode: 'Normal' }} selectionSettings={{ type: 'Multiple' }}>
        <ColumnsDirective>
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='140' textAlign='Right' isPrimaryKey={true} />
            <ColumnDirective field='Name' headerText='Name' width='140' />
            <ColumnDirective field='Title' headerText='Title' width='140' />
            <ColumnDirective field='Country' headerText='Country' width='140' />
            <ColumnDirective field='Salary' headerText='Salary' width='140' textAlign='Right' format='C0' />
        </ColumnsDirective>
        <Inject services={[Edit, Selection, ColumnChooser, SideBar]} />
    </GridComponent>
};
export default App;
