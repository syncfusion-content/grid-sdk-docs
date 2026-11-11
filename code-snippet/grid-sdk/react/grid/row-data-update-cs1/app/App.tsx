import { ColumnDirective, ColumnsDirective, GridComponent, Filter, Page, Sort, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { restaurantMenu } from './datasource';

function App() {
    let grid: GridComponent | null;
    const filterSettings: Object = { type: 'Excel' };
    const pageSettings: Object = { pageSize: 8, pageCount: 4 };

    const randomPrice = (price: number): number =>
        Number(Math.min(Math.max(price + (12 * Math.random() - 6), 4), 32).toFixed(2));

    const findItem = (id: string): any => restaurantMenu.find((item: any) => item.ItemID === id);

    const updateSingleRow = (): void => {
        const item = findItem('ITEM-1002');
        grid!.setRowData('ITEM-1002', { ...item, Price: randomPrice(item.Price), Description: item.Description });
    };

    const updateMultipleRows = async (): Promise<void> => {
        const updates = [
            { ...findItem('ITEM-1001'), Price: randomPrice(findItem('ITEM-1001').Price), Description: 'Spicy Paneer Tikka Masala' },
            { ...findItem('ITEM-1002'), Price: randomPrice(findItem('ITEM-1002').Price), Description: 'Caesar Salad' },
            { ...findItem('ITEM-1003'), Price: randomPrice(findItem('ITEM-1003').Price), Description: 'Cheesecake with honey' }
        ];
        for (const row of updates) {
            await grid!.setRowDataAsync(row.ItemID, row, 0);
        }
    };

    const priceTemplate = (props: any): JSX.Element => {
        const price = props.Price == null ? 0 : props.Price;
        let cls = 'price-low';
        if (price > 25) cls = 'price-premium';
        else if (price > 20) cls = 'price-high';
        else if (price > 15) cls = 'price-mid-high';
        else if (price > 10) cls = 'price-mid';
        return <div className={`price-cell ${cls}`}>${price.toFixed(2)}</div>;
    };

    return (<div>
        <div style={{ margin: '10px' }}>
            <ButtonComponent cssClass='e-outline' style={{ marginRight: '10px' }} onClick={updateSingleRow}>Update Single Data</ButtonComponent>
            <ButtonComponent cssClass='e-outline' onClick={updateMultipleRows}>Update Multiple Data</ButtonComponent>
        </div>
        <GridComponent ref={g => grid = g} dataSource={restaurantMenu} allowSorting={true} allowFiltering={true}
            filterSettings={filterSettings} allowPaging={true} pageSettings={pageSettings}>
            <ColumnsDirective>
                <ColumnDirective field='ItemID' headerText='Item ID' width={100} isPrimaryKey={true} />
                <ColumnDirective field='ItemName' headerText='Dish Name' width={130} clipMode='EllipsisWithTooltip' />
                <ColumnDirective field='Category' headerText='Category' width={120} />
                <ColumnDirective field='Price' headerText='Cost' width={100} format='C2' textAlign='Right' template={priceTemplate} />
                <ColumnDirective field='SpiceLevel' headerText='Spiciness' width={110} />
                <ColumnDirective field='Description' headerText='Description' width={260} clipMode='EllipsisWithTooltip' />
            </ColumnsDirective>
            <Inject services={[Sort, Filter, Page]} />
        </GridComponent>
    </div>);
}
export default App;
