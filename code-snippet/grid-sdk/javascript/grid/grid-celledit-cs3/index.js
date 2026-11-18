ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var grid = new ej.grids.Grid({
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
    grid.getContentTable().addEventListener('click', function (args) {
        if ((args.target).classList.contains('e-rowcell')) {
            grid.editCell(args.target.closest('tr').rowIndex,
                grid.getColumnByIndex(parseInt((args.target).getAttribute('aria-colindex')) - 1).field);
        }
    });
}
