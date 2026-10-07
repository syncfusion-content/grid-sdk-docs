ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Formula);
var grid = new ej.grids.Grid({
    dataSource: productData,
    editSettings: { allowEditing: true, mode: 'Cell' },
    enableAutoFill: true,
    selectionSettings: { mode: 'Cell', cellSelectionMode: 'Box', type: 'Multiple' },
    columns: [
        { field: 'Id', isPrimaryKey: true, headerText: 'ID', width: 100, validationRules: { required: true } },
        { field: 'Product', headerText: 'Product Name', width: 180, validationRules: { required: true } },
        { field: 'Quantity', headerText: 'Quantity', width: 120, textAlign: 'Right' },
        { field: 'Price', headerText: 'Price Per Unit', width: 140, textAlign: 'Right', editType: 'numericedit', format: 'C2' },
        { field: 'GrossAmount', headerText: 'Gross Amount', width: 150, allowFormula: true, format: 'C2' },
        { field: 'TaxAmount', headerText: 'Tax Amount', width: 130, textAlign: 'Right', allowFormula: true, format: 'C2' },
        { field: 'TotalAmount', headerText: 'Total Amount', width: 150, textAlign: 'Right', allowFormula: true, format: 'C2' }
    ],
    height: 272
});
grid.appendTo('#Grid');