

import { Grid, Page, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, Edit);

let grid: Grid = new Grid({
  dataSource: data,
    allowPaging: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Normal"},
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    load: load,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true},
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2'},
        { field: "ShipCountry", headerText: "Ship Country",  width: 150}
    ],
    height: 220
});
grid.appendTo('#Grid');

function load() {
  grid.element.addEventListener('mouseup', (e) => {
    if ((e.target as HTMLElement).classList.contains('e-rowcell')) {
      if (grid.isEdit) {
        grid.endEdit();
      }
      let index = parseInt((e.target as HTMLElement).getAttribute('Index') as string);
      grid.selectRow(index);
      grid.startEdit(index);
    }
  });
}