
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { TextBox } from '@syncfusion/ej2-inputs';
import { FocusInEventArgs } from '@syncfusion/ej2-inputs';

Grid.Inject(Edit, Toolbar);

let textboxElem;
let textboxObject;

let grid: Grid = new Grid({
  dataSource: data,
  allowTextWrap: true,
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true } },
    { field: 'CustomerID', headerText: 'Customer Name', width: 120, validationRules: { required: true, minLength: 5 } },
    { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true } },
    { field: 'OrderDate', headerText: 'Order Date', width: 130, editType: 'datepickeredit', format: 'yMd', textAlign: 'Right' },
    {
      field: 'ShipAddress', headerText: 'Ship Country', disableHtmlEncode: false,
      valueAccessor: function(field, data) {
        var value = data.ShipAddress;
        return (value !== undefined) ? value.split('\n').join('<br>') : '';
    }, width: 150,
      edit: {
        create: createShipAddressFn,
        destroy: destroyShipAddressFn,
        read: readShipAddressFn,
        write: writeShipAddressFn
      }
    }
  ],
  height: 273
});
grid.appendTo('#Grid');

function createShipAddressFn() {
  textboxElem = document.createElement('input');
  return textboxElem;
}
function destroyShipAddressFn() {
  textboxObject.destroy();
}
function readShipAddressFn() {
  return textboxObject.value;
}

function writeShipAddressFn(args) {
  var rowData = args.rowData;
  textboxObject = new TextBox({
    multiline: true,
    value: rowData.ShipAddress,
    focus:
      function onFocus(args: FocusInEventArgs) {
        ((args.event as Event).target as EventTarget).addEventListener('keydown', (e) => {
          if ((e as KeyboardEvent).key === 'Enter') {
            e.stopPropagation();
          }
        });
      }
  });
  textboxObject.appendTo(textboxElem);
}