import { Grid, Page, Sort, Filter, Toolbar, Edit } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Sort, Filter, Toolbar, Edit);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'Checkbox' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings:{ allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', type: 'number', isPrimaryKey: true },
        { field: 'CustomerName', headerText: 'Customer Name', width: 140, type: 'string' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140, type: 'string' },
        { field: 'Freight', headerText: 'Freight', width: 120, textAlign: 'Right', format: 'C' },
    ]
});

grid.appendTo('#Grid');