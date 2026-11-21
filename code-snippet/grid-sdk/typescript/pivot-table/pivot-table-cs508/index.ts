import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource';

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        rows: [{ name: 'Country' }],
        columns: [{ name: 'Products' }],
        values: [
            { name: 'OrderDate', caption: 'Earliest Order', type: 'Min' },
            { name: 'OrderDate', caption: 'Order Count', type: 'Count' },
            { name: 'Amount', caption: 'Total Amount', type: 'Sum' }
        ],
        formatSettings: [
            { name: 'OrderDate', type: 'date', format: 'dd/MM/yyyy' },
            { name: 'Amount', format: 'C0' }
        ]
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');
