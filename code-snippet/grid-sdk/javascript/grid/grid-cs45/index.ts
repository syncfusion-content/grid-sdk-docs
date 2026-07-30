import { Grid, Edit, Toolbar, Page, NewRowPosition  } from '@syncfusion/ej2-grids';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: {pageCount: 5},
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true} },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true } },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true }},
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', editType: 'datepickeredit', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit', edit:  { params: { popupHeight: '300px' } } }
    ],
    height: 273
});
grid.appendTo('#Grid');

let positionData = [
  { text: 'Top', value: 'Top' },
  { text: 'Bottom', value: 'Bottom' },
];

let dropdownList = new DropDownList({
  value: 'Top',
  popupHeight: '240px',
  width: 100,
  dataSource: positionData,
  change: changePosition,
});
dropdownList.appendTo('#dropdown');

function changePosition(args: ChangeEventArgs) {
  grid.editSettings.newRowPosition = (args.value as NewRowPosition);
}