import { Grid, Edit, Selection, ColumnChooser, SideBar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Selection, ColumnChooser, SideBar);

let grid: Grid = new Grid({
    dataSource: data,
    height: 320,
    enableToolPanel: true,
    toolPanelSettings: {
        position: 'Right',
        isOpen: true,
        toolPanels: [
            'Edit',
            'Columns'
        ]
    },
    editSettings: { allowEditing: true, mode: 'Normal' },
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', width: 140, textAlign: 'Right', isPrimaryKey: true },
        { field: 'Name', headerText: 'Name', width: 140 },
        { field: 'Title', headerText: 'Title', width: 140 },
        { field: 'Country', headerText: 'Country', width: 140 },
        { field: 'Salary', headerText: 'Salary', width: 140, textAlign: 'Right', format: 'C0' }
    ]
});
grid.appendTo('#Grid');
