import { Grid, Resize } from '@syncfusion/ej2-grids';
import { inventoryData } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
    dataSource: inventoryData,
    columns: [
        { field: 'Inventor', headerText: 'Inventor', width: 140, clipMode: 'EllipsisWithTooltip' },
        { field: 'NumberOfPatentFamilies', headerText: 'Number Of Patent Families', width: 130 },
        { field: 'Country', headerText: 'Country', width: 120 },
        { field: 'NumberOfINPADOCPatents', headerText: 'Number Of INPADOC Patents', width: 150 },
        { field: 'Active', headerText: 'Active', width: 150 },
        { field: 'MainFieldsOfInvention', headerText: 'Main Fields Of Invention', width: 150 }
    ],
    dataBound: () => grid.autoFitColumns(['Inventor', 'NumberOfINPADOCPatents', 'MainFieldsOfInvention'], 1, 3),
    height: 315
});
grid.appendTo('#Grid');