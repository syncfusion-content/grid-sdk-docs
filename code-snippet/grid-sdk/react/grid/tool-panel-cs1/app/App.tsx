import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Filter, Reorder, ColumnChooser, SideBar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const toolPanelSettings: object = {
        position: 'Right',
        isOpen: true,
        defaultToolPanel: 'columns',
        toolPanels: [
            { id: 'columns', type: 'Columns', headerText: 'Columns' },
            { id: 'filters', type: 'Filters', headerText: 'Filters' }
        ]
    };
    const columnChooserSettings: object = { allowReordering: true };
    return <GridComponent dataSource={data} height={320} allowFiltering={true} allowReordering={true}
        enableToolPanel={true} toolPanelSettings={toolPanelSettings} columnChooserSettings={columnChooserSettings}>
        <ColumnsDirective>
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='110' textAlign="Right" />
            <ColumnDirective field='Name' headerText='Name' width='140' />
            <ColumnDirective field='Title' headerText='Title' width='140' />
            <ColumnDirective field='Country' headerText='Country' width='140' />
            <ColumnDirective field='Salary' headerText='Salary' width='140' textAlign="Right" format="C0" />
        </ColumnsDirective>
        <Inject services={[Filter, Reorder, ColumnChooser, SideBar]} />
    </GridComponent>
};
export default App;
