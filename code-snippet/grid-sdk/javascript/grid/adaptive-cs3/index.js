ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Filter, ej.grids.Sort, ej.grids.Edit, ej.grids.Toolbar, ej.grids.Group, ej.grids.ColumnChooser, ej.grids.ExcelExport, ej.grids.PdfExport);
var grid = new ej.grids.Grid({
    dataSource: data,
    enableAdaptiveUI: true,    
    adaptiveUIMode: 'Mobile',
    height: '100%',
    allowGrouping: true,
    allowSelection: true,
    allowPaging: true,
    allowExcelExport: true,
    allowPdfExport: true,
    selectionSettings: { type: 'Multiple' },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser', 'ExcelExport', 'PdfExport'],
    allowSorting: true,
    showColumnChooser: true,
    allowFiltering: true,
    filterSettings: { type: 'Excel' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, width: 120, validationRules: { required: true, number: true }, },
        { field: 'CustomerID', headerText: 'Customer Name', minWidth: 50, maxWidth: 300, validationRules: { required: true }, width: 160 },
        { field: 'Freight', width: 150, format: 'C2', minWidth: 50, maxWidth: 300, editType: 'numericedit', validationRules: { required: true }},
        { field: 'OrderDate', headerText: 'Order Date', editType: 'datetimepickeredit', format: { type: 'dateTime', format: 'M/d/y hh:mm a' }, width: 160},
        { field: 'ShipCountry', headerText: 'Ship Country', width: '150' },
    ],
    load: function () {
        grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
    },
    toolbarClick: function (args) {
        if (args.item.id === 'Grid_pdfexport') {
            grid.pdfExport();
        }
        if (args.item.id === 'Grid_excelexport') {
            grid.excelExport();
        }
    },
    
});
grid.appendTo('#Grid');

