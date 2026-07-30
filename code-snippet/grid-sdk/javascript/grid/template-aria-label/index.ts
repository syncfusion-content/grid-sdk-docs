import { Grid } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';
import { ChipList } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        {
            headerText: 'Employee Image', textAlign: 'Center',
            template: '#template', templateOptions: {enableAriaLabel: true}, width: 150
        },
        { field: 'FirstName', headerText: 'First Name', template: '#columnTemplate', templateOptions: {enableAriaLabel: false}, width: 100 },
        { field: 'LastName', headerText: 'Last Name', width: 100 },
        { field: 'City', headerText: 'City', width: 100 }
    ],
    height: 315,
    queryCellInfo: queryCellInfo,
});
grid.appendTo('#Grid');

function queryCellInfo(args) {
    if (args.column.field === 'FirstName') {
      var chip = new ChipList({
        text: args.data[args.column.field],
      });
      chip.appendTo(args.cell.querySelector('#chipElement'));
    }
}