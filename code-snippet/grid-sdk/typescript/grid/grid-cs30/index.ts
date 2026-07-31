
import { Grid, Edit, Toolbar, SaveEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { AutoComplete, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Edit, Toolbar);

let autoCompleteElement;
let autoCompleteIns;
let orderData;

let grid: Grid = new Grid({
  dataSource: data,
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  actionBegin: actionBegin,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true } },
    {
      field: 'CustomerID', headerText: 'Customer Name', width: 120
      , edit: {
        create: createCustomerIDFn,
        destroy: destroyCustomerIDFn,
        read: readCustomerIDFn,
        write: writeCustomerIDFn
      }
    },
    { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 1, max: 1000 } },
    { field: 'OrderDate', headerText: 'Order Date', width: 130, editType: 'datepickeredit', format: 'yMd', textAlign: 'Right' },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
  ],
  height: 273
});
grid.appendTo('#Grid');

let autoCompleteData = [
  { value: 'VINET', text: 'VINET' },
  { value: 'TOMSP', text: 'TOMSP' },
  { value: 'HANAR', text: 'HANAR' },
  { value: 'VICTE', text: 'VICTE' },
  { value: 'SUPRD', text: 'SUPRD' },
];

function createCustomerIDFn() {
  autoCompleteElement = document.createElement('input');
  return autoCompleteElement;
}
function destroyCustomerIDFn() {
  autoCompleteIns.destroy();
}
function readCustomerIDFn() {
  return autoCompleteIns.value;
}
function writeCustomerIDFn() {
  autoCompleteIns = new AutoComplete({
    dataSource: autoCompleteData,
    value: orderData.CustomerID,
    change: function (args: ChangeEventArgs) {
      orderData.CustomerID = args.value;
    }
  });
  autoCompleteIns.appendTo(autoCompleteElement);
}

function actionBegin(args: SaveEventArgs) {
  if (args.requestType === 'beginEdit' || args.requestType === 'add') {
    orderData = Object.assign({}, args.rowData);
  }
  if (args.requestType === 'save') {
    (args.data)['CustomerID'] = orderData['CustomerID'];
  }
}