import { Grid, Page, ClipMode } from '@syncfusion/ej2-grids';
import { inventoryData } from './datasource.ts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Page);

let grid: Grid = new Grid({
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
let dropDownData: object[] = [
    { text: 'Ellipsis', value: 'Ellipsis' },
    { text: 'Clip', value: 'Clip' },
    { text: 'Ellipsis with Tooltip', value: 'EllipsisWithTooltip' }
];

let dropDown: DropDownList= new DropDownList({
   index: 0,
   width: 150,
   dataSource: dropDownData,
   fields: { text: 'text', value: 'value' },
   change: valueChange
});
dropDown.appendTo('#dropdown');

function valueChange(args: ChangeEventArgs): void
{
    grid.getColumnByField('Mainfieldsofinvention').clipMode = args.value as ClipMode;
    grid.refresh();
}