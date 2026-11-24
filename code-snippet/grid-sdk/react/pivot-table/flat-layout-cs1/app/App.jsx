import { PivotViewComponent, Inject, FlatLayout } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {
    const dataSourceSettings = { dataSource: pivotData };
    const gridSettings = { layout: 'Flat' };
    const flatSettings = {
    columns: [
    { field: 'Country', headerText: 'Country', width: 140 },
    { field: 'Products', headerText: 'Products', width: 160 },
    { field: 'Year', headerText: 'Year', width: 120 },
    { field: 'Sold', headerText: 'Units Sold', width: 120 },
    { field: 'Amount', headerText: 'Sold Amount', width: 140 }
],
    allowSorting: true,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageSize: 10 }
};
    return (
        <PivotViewComponent id='PivotView' height={450} width='100%' dataSourceSettings={dataSourceSettings} gridSettings={gridSettings} flatSettings={flatSettings}>
            <Inject services={[FlatLayout]} />
        </PivotViewComponent>
    );
}
export default App;
