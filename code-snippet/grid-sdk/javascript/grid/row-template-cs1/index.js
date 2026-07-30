var grid = new ej.grids.Grid({
    dataSource: inventoryData,
    gridLines: 'Default',
    columns: [
        { field: 'Inventor', headerText: 'Inventor Name', textAlign: 'Right', width: 180 },
        { field: 'NumberofPatentFamilies', headerText: 'Number of Patent Families', width: 180, textAlign: 'Right' },
        { field: 'Country', headerText: 'Country', width: 140 },
        { field: 'Active', width: 120 },
        { field: 'Mainfieldsofinvention', headerText: 'Main fields of invention', width: 200 }
    ],
    height: 315
});
grid.appendTo('#Grid');

var dropDownData = [
    { text: 'Default', value: 'Default' },
    { text: 'Both', value: 'Both' },
    { text: 'Horizontal', value: 'Horizontal' },
    { text: 'Vertical', value: 'Vertical' },
    { text: 'None', value: 'None' },
];

var dropdownList = new ej.dropdowns.DropDownList({
    index: 0,
    width: 100,
    dataSource: dropDownData,
    change: valueChange,
   });
dropdownList.appendTo('#dropdown');

function valueChange(args) {
    grid.gridLines = args.value;
}