
import { Grid, Edit, Toolbar, EditEventArgs, Column } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid(
  {
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    allowPaging: true,
    load: load,
    actionComplete: onActionComplete,
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
      { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
      { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 273
  });
grid.appendTo('#Grid');

let isDropdown = false;

function load() {
  grid.element.addEventListener('mouseup', (e) => {
    if ((e.target as HTMLElement).classList.contains('e-rowcell')) {
      if (grid.isEdit) {
        grid.endEdit();
      }
      let rowInfo = grid.getRowInfo(e.target);
      if (rowInfo && rowInfo.column && (rowInfo.column as Column).field === 'ShipCountry') {
        isDropdown = true;
        grid.selectRow(rowInfo.rowIndex as number);
        grid.startEdit();
      }
    }
  });
}

function onActionComplete(args: EditEventArgs) {
  if (args.requestType === 'beginEdit' && isDropdown) {
    isDropdown = false;
    let dropdownObj = ((args.form as HTMLFormElement).querySelector('.e-dropdownlist') as HTMLFormElement)['ej2_instances'][0];
    dropdownObj.element.focus();
    dropdownObj.showPopup();
  }
}