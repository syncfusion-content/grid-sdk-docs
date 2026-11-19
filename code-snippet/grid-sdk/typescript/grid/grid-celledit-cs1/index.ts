import { Grid, Edit, Toolbar, Page, Sort, Filter, SaveEventArgs, EditEventArgs } from '@syncfusion/ej2-grids';
import { billingData } from './datasource.ts';

Grid.Inject(Edit, Toolbar, Page, Sort, Filter)
let grid: Grid = new Grid({
    dataSource: billingData,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' },
    allowPaging: true,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'CheckBox' },
    actionComplete: function (args: SaveEventArgs) {
        if (args.action === 'edit' && args.requestType === 'save' && (args.columnName === 'Quantity' || args.columnName === 'Price')) {
            var total = args.data.Quantity * args.data.Price;
            grid.updateCell(args.index, "Total", total);
        }
    },
    actionBegin: function (args: EditEventArgs) {
        if (args.requestType === 'beginEdit' && args.columnName === 'Total') {
            args.cancel = true;
        }
    },
    columns: [
        { field: 'BillID', headerText: 'Bill ID', width: 120, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'BillDate', headerText: 'Bill Date', width: 140, format: 'yMd', editType: 'datepickeredit' },
        { field: 'Customer', headerText: 'Customer Name', width: 150, validationRules: { required: true } },
        { field: 'Product', headerText: 'Product Name', width: 150, editType: 'dropdownedit' },
        { field: 'Category', headerText: 'Category', width: 130, editType: 'dropdownedit' },
        { field: 'Quantity', headerText: 'Quantity', width: 100, textAlign: 'Right', format: 'N0' },
        { field: 'Price', headerText: 'Price', width: 100, textAlign: 'Right', editType: 'numericedit', format: 'C2' },
        { field: 'Total', headerText: 'Total', width: 120, textAlign: 'Right', format: 'C2' },
        { field: 'PaymentStatus', headerText: 'Payment Status', width: 130, editType: 'dropdownedit' }
    ]
});
grid.appendTo('#Grid');
