var grid = new ej.grids.Grid({
    dataSource: inventoryData,
    allowPaging: true,
    columns: [
        { field: 'Mainfieldsofinvention', headerText: 'Invention', width: 130 },
        { field: 'Inventor', headerText: 'Inventor', width: 80 },
        { field: 'NumberofPatentFamilies', headerText: 'Count', width:100 },
        { field: 'Country', headerText: 'Country', width: 80 }
    ],
    height: 315
});
grid.appendTo('#Grid');

var dropDownData = [
    { text: 'Ellipsis', value: 'Ellipsis' },
    { text: 'Clip', value: 'Clip' },
    { text: 'Ellipsis with Tooltip', value: 'EllipsisWithTooltip' }
];

var dropdownList = new ej.dropdowns.DropDownList({
    index: 0,
    width: 150,
    dataSource: dropDownData,
    fields: { text: 'text', value: 'value' },
    change: valueChange,
   });
dropdownList.appendTo('#dropdown');

function valueChange(args) {
    grid.getColumnByField('Mainfieldsofinvention').clipMode = args.value;
    grid.refresh();
}