import { PivotView, FlatLayout } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource';

PivotView.Inject(FlatLayout);

let pivotObj: PivotView = new PivotView({
    dataSourceSettings: { dataSource: pivotData },
    gridSettings: { layout: 'Flat' } as any,
    flatSettings: {
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
} as any,
    width: '100%',
    height: 450
});
pivotObj.appendTo('#PivotTable');
