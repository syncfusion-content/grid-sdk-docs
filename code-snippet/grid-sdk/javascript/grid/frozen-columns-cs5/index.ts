import { Grid, Edit, Toolbar, Freeze, Page} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DatePicker } from '@syncfusion/ej2-calendars';
Grid.Inject( Edit, Toolbar, Freeze, Page );
let datepickerElem;
let datepickerObj;
let grid: Grid = new Grid({
  dataSource: data,
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
  frozenColumns: 2,
  allowPaging: true,
  pageSettings: { pageCount: 5 },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90,  isPrimaryKey: true },
    { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd', textAlign: 'Right',  edit: {
      create: function () {
        datepickerElem = document.createElement('input');
        return datepickerElem;
      },
      read: function () {
        return datepickerObj.value;
      },
      destroy: function () {
        datepickerObj.destroy();
      },
      write: function (args) {
        var rowData = args.rowData;
        datepickerObj = new DatePicker({
          value: rowData.OrderDate,
          change: function (e) {
            rowData.OrderDate = e.value;
          },
        });
        datepickerObj.appendTo(args.element);
      },}
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100, freeze: 'Left' },
    { field: 'ShipCity', headerText: 'Ship City', width: 100 },
  ]
});
grid.appendTo('#Grid');