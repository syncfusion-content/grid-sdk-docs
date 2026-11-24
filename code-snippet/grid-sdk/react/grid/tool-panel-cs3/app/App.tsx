import { ColumnDirective, ColumnsDirective, GridComponent, Inject, ColumnChooser, SideBar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const toolPanelSettings: object = {
        position: 'Left',
        type: 'Over',
        width: 300,
        isOpen: true,
        toolPanels: [
            'Columns',
            {
                type: 'Custom',
                template: () => (<div className='custom-panel'><h4>Product Summary</h4><p>Total products: 8</p><p>Select a row to review the product here.</p></div>)
            }
        ]
    };
    return <GridComponent dataSource={data} height={320} enableToolPanel={true} toolPanelSettings={toolPanelSettings}>
        <ColumnsDirective>
            <ColumnDirective field='ProductID' headerText='Product ID' width='140' textAlign='Right' />
            <ColumnDirective field='ProductName' headerText='Product Name' width='140' />
            <ColumnDirective field='Category' headerText='Category' width='140' />
            <ColumnDirective field='UnitPrice' headerText='Unit Price' width='140' textAlign='Right' format='C2' />
            <ColumnDirective field='UnitsInStock' headerText='Units In Stock' width='140' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[ColumnChooser, SideBar]} />
    </GridComponent>
};
export default App;
