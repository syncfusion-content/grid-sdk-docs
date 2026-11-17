import { ColumnDirective, ColumnsDirective, GridComponent, Edit, Filter, Page, Sort, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { productSalesDetails } from './datasource';

function App() {
    let grid: GridComponent | null;
    const filterSettings: Object = { type: 'Excel' };
    const pageSettings: Object = { pageSize: 8, pageCount: 4 };
    const editSettings: Object = { allowEditing: true, allowAdding: true, allowDeleting: true };

    const randomId = (): string => `S-${Math.floor(1000 * Math.random())}`;

    const addRecord = (): void => {
        grid!.addRecord({
            SaleID: randomId(), ProductName: 'Smart Lamp', UnitsSold: Math.floor(20 * Math.random()) + 1,
            UnitPrice: 120.5, TotalRevenue: 2410, IsDiscounted: false, Category: 'Home Tech', Region: 'Central', SalesPerson: 'Bob'
        });
    };

    const deleteRecord = (): void => {
        grid!.deleteRecord();
    };

    const addRecordAsync = async (): Promise<void> => {
        const records = [
            { SaleID: randomId(), ProductName: 'Smart Watch', UnitsSold: 12, UnitPrice: 250, TotalRevenue: 3000, IsDiscounted: false, Category: 'Wearables', Region: 'East', SalesPerson: 'Julia' },
            { SaleID: randomId(), ProductName: 'Gaming Laptop', UnitsSold: 6, UnitPrice: 1200, TotalRevenue: 7200, IsDiscounted: true, Category: 'Electronics', Region: 'West', SalesPerson: 'Charlie' }
        ];
        await Promise.all(records.map((record) => grid!.addRecordAsync(record)));
    };

    const updateRecordAsync = async (): Promise<void> => {
        const row: any = grid!.getCurrentViewRecords()[1];
        await grid!.updateRowAsync(1, {
            SaleID: row.SaleID,
            ProductName: 'Phone Pro',
            UnitsSold: Math.floor(5 * Math.random()) + 1,
            UnitPrice: Math.floor(1000 * Math.random()) + 500
        });
    };

    const deleteRecordAsync = async (): Promise<void> => {
        await grid!.deleteRecordAsync();
    };

    return (<div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '5px' }}>
            <ButtonComponent cssClass='e-outline' onClick={addRecord}>Add Record</ButtonComponent>
            <ButtonComponent cssClass='e-outline' onClick={deleteRecord}>Delete Selected Record</ButtonComponent>
            <ButtonComponent cssClass='e-outline' onClick={addRecordAsync}>Add Record (Async)</ButtonComponent>
            <ButtonComponent cssClass='e-outline' onClick={updateRecordAsync}>Update Record (Async)</ButtonComponent>
            <ButtonComponent cssClass='e-outline' onClick={deleteRecordAsync}>Delete Selected Record (Async)</ButtonComponent>
        </div>
        <GridComponent ref={g => grid = g} dataSource={productSalesDetails} allowSorting={true} allowFiltering={true}
            filterSettings={filterSettings} allowPaging={true} pageSettings={pageSettings} editSettings={editSettings}>
            <ColumnsDirective>
                <ColumnDirective field='SaleID' headerText='Sale ID' width={100} isPrimaryKey={true} textAlign='Right' />
                <ColumnDirective field='ProductName' headerText='Product Name' width={120} />
                <ColumnDirective field='Category' headerText='Category' clipMode='EllipsisWithTooltip' width={100} />
                <ColumnDirective field='SalesPerson' headerText='Sales Person' width={110} />
                <ColumnDirective field='UnitsSold' headerText='Units Sold' width={100} textAlign='Right' />
                <ColumnDirective field='UnitPrice' headerText='Unit Price' format='C2' width={110} textAlign='Right' />
                <ColumnDirective field='TotalRevenue' headerText='Revenue' format='C2' width={110} textAlign='Right' />
            </ColumnsDirective>
            <Inject services={[Sort, Filter, Page, Edit]} />
        </GridComponent>
    </div>);
}
export default App;
