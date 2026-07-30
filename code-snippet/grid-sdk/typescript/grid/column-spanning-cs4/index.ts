import { Grid, Freeze, Sort } from '@syncfusion/ej2-grids';
import { shiftPlanData } from './datasource.ts';

Grid.Inject(Freeze, Sort);

let grid: Grid = new Grid({
    dataSource: shiftPlanData,
    gridLines: 'Both',
    allowSorting: true,
    enableColumnSpan: true,
    columns: [
        { field: 'Name', headerText: 'Doctor Name', width: 170, textAlign: 'Center', freeze: 'Left', template: '#template' },
        { field: 'Time9AM', headerText: '9:00 AM', width: 120, textAlign: 'Center', allowSorting: false },
        { field: 'Time10AM', headerText: '10:00 AM', width: 120, textAlign: 'Center', allowSorting: false },
        { field: 'Time11AM', headerText: '11:00 AM', width: 120, textAlign: 'Center', allowSorting: false },
        { field: 'Time12PM', headerText: '12:00 PM', width: 120, textAlign: 'Center', allowSorting: false },
        { field: 'Time1PM', headerText: '1:00 PM', width: 120, textAlign: 'Center', allowSorting: false },
        { field: 'Time2PM', headerText: '2:00 PM', width: 120, textAlign: 'Center', allowSorting: false },
        { field: 'Time3PM', headerText: '3:00 PM', width: 120, textAlign: 'Center', allowSorting: false },
        { field: 'Time4PM', headerText: '4:00 PM', width: 120, textAlign: 'Center', allowSorting: false },
        { field: 'Time5PM', headerText: '5:00 PM', width: 120, textAlign: 'Center', allowSorting: false },
        { field: 'Time6PM', headerText: '6:00 PM', width: 120, textAlign: 'Center', allowSorting: false},
        { field: 'Time7PM', headerText: '7:00 PM', width: 120, textAlign: 'Center', allowSorting: false }
    ],
    width: 'auto',
    height: 450,
    allowTextWrap: true,
    textWrapSettings: { wrapMode: 'Content' },
});
grid.appendTo('#Grid');