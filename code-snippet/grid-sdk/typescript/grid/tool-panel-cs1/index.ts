import { Grid, Filter, Reorder, ColumnChooser, SideBar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Reorder, ColumnChooser, SideBar);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    allowReordering: true,
    enableToolPanel: true,
    toolPanelSettings: {
        position: 'Left',
        isOpen: true,
        defaultToolPanel: 'columns',
        toolPanels: [
            { id: 'columns', type: 'Columns', headerText: 'Columns' },
            { id: 'filters', type: 'Filters', headerText: 'Filters' }
        ]
    },
    columnChooserSettings: { allowReordering: true },
    columns: [
        { field: 'StudentID', headerText: 'Student ID', width: 110, textAlign: 'Right' },
        { field: 'StudentName', headerText: 'Student Name', width: 140 },
        { field: 'Department', headerText: 'Department', width: 140 },
        { field: 'Grade', headerText: 'Grade', width: 140 },
        { field: 'Score', headerText: 'Score', width: 140, textAlign: 'Right' }
    ],
    height: 320
});
grid.appendTo('#Grid');
