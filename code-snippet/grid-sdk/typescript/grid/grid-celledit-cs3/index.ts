import { Grid, Edit, Toolbar, Page , ClickEventArgs} from '@syncfusion/ej2-grids';
import { productDatas } from './datasource.ts';

Grid.Inject(Edit, Toolbar, Page)
let grid: Grid = new Grid({
    dataSource: productDatas,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' },
    allowPaging: true,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    created: created,
    columns: [
        {
            field: 'ProductID', isPrimaryKey: true, headerText: 'Product ID', textAlign: 'Right',
            validationRules: { required: true }, width: 120
        },
        {
            field: 'ProductCategory', headerText: 'Product Category',
            validationRules: { required: true }, width: 140
        },
        {
            field: 'ShippingMethod', headerText: 'Shipping Method', editType: 'dropdownedit', width: 140
        },
        {
            field: 'StockQuantity', headerText: 'StockQuantity', editType: 'numericedit', width: 150,
            format: 'N0'
        },
        { field: 'Discount', headerText: 'Discount (%)', width: 170, editType: 'numericedit', format: 'C2' },
        { field: 'Revenue', headerText: 'Revenue', width: 170, editType: 'numericedit', format: 'C2' },
        { field: 'TransactionDate', headerText: 'TransactionDate', width: 170, editType: 'datetimepickeredit', format: 'yMd' },
    ],
});
grid.appendTo('#Grid');

function created() {
    grid.getContentTable().addEventListener('click', function (args: ClickEventArgs) {
        if ((args.target as HTMLElement).classList.contains('e-rowcell')) {
            grid.editCell((args.target.closest('tr') as HTMLTableRowElement).rowIndex,
                grid.getColumnByIndex(parseInt((args.target as HTMLElement).getAttribute('aria-colindex') as string) - 1).field);
        }
    });
}
