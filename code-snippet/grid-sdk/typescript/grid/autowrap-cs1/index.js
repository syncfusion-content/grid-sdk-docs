var grid = new ej.grids.Grid({
    dataSource: inventoryData,
    allowPaging: true,
    allowTextWrap: true,
    textWrapSettings: { wrapMode: 'Content' },
    columns: [
        { field: 'Inventor', headerText: 'Inventor Name', width: 180, textAlign: 'Right' },
        { field: 'NumberofPatentFamilies', headerText: 'Number of Patent Familiesr', width: 180, textAlign: 'Right' },
        { field: 'Country', headerText: 'country', width: 140 },
        { field: 'Active', width: 120 },
        { field: 'Mainfieldsofinvention', headerText: 'Main fields of Invention', width: 200 },
    ],
    height: 400
});
grid.appendTo('#Grid');

var dropdownData=[
    { text: 'Content', value: 'Content' },
    { text: 'Both', value: 'Both' }
];
var dropdownList = new ej.dropdowns.DropDownList({
    index: 0,
    width: 100,
    dataSource: dropdownData,
    change: valueChange,
   });
dropdownList.appendTo('#dropdown');

function valueChange(args) {
    grid.textWrapSettings.wrapMode = args.value;
  }