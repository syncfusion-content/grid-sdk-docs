import { Grid, Page, Edit, Toolbar, EditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, Edit);

let grid: Grid = new Grid({
  dataSource: data,
    editSettings: { allowEditing: true, mode: "Normal"},
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    actionBegin: actionBegin,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', validationRules: { required: true }, textAlign: 'Right', isPrimaryKey: true, width: 100},
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', validationRules: { min:1,max:1000 }, width: 120, format: 'C2'},
        { field: "ShipCountry", headerText: "Ship Country", editType: 'dropdownedit',  width: 150}
    ],
    height: 273
});
grid.appendTo('#Grid');

function actionBegin(args: EditEventArgs) {
  if (args.requestType === 'beginEdit' && (args.rowData as ColumnDataType).ShipCountry === 'France') {
      args.cancel = true;
  }
}

interface ColumnDataType {
  ShipCountry: string;
 
}