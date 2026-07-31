var grid = new ej.grids.Grid({
    dataSource: ordersTrackData,
    height: 255,
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true,
    toolbar: ['Edit', 'Update', 'Cancel'],
    filterSettings: { type: 'Excel' },
    editSettings: { allowEditing: true, allowAdding: false, allowDeleting: false },
    selectionSettings: { persistSelection: true },
    isRowSelectable: function (data, columns) {
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