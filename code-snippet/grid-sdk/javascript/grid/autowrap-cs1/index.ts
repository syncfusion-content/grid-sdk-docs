import { Grid, Page } from '@syncfusion/ej2-grids';
import { inventoryData } from './datasource.ts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Page);

let grid: Grid = new Grid({
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
 
let dropDownList: DropDownList = new DropDownList({
 index: 0,
 width: 100,
 dataSource: dropdownData,
 change: valueChange,
});
dropDownList.appendTo('#dropdown');

function valueChange(args: ChangeEventArgs): void {
    grid.textWrapSettings.wrapMode = args.value ;
  }