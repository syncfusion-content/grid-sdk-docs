import { Grid, Page, Filter, Sort, Edit, Toolbar, ColumnModel} from '@syncfusion/ej2-grids';
import { ordersTrackData, OrderTrackModel } from './datasource.ts';

Grid.Inject(Page, Filter, Sort, Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: ordersTrackData,
    allowPaging: true,
    height: 255,
    allowSorting: true,
    allowFiltering: true,
    toolbar: ['Edit', 'Update', 'Cancel'],
    filterSettings: { type: 'Excel' },
    editSettings: { allowEditing: true, allowAdding: false, allowDeleting: false },
    selectionSettings: { persistSelection: true },
    isRowSelectable: function (data: OrderTrackModel, columns: ColumnModel[]) {
        return data.Status !== 'Cancelled';
    },
    columns: [
        { type: 'checkbox', width: 40 },
        { field: 'OrderID', width: 110, headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', validationRules: { required: true } },
        { field: 'CustomerName', width: 120, headerText: 'Customer Name', validationRules: { required: true }},
        { field: 'Product', width: 110, editType: 'dropdownedit'},
        { field: 'Amount', width: 110, format: 'C2', textAlign: 'Right', validationRules: { required: true }},
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', editType: 'datepickeredit', width: 110, format: 'yMd' },
        { field: 'Status', editType: 'dropdownedit', width: 110 }
    ],
});
grid.appendTo('#Grid');