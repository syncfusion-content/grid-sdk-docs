import { Grid, Page, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
Grid.Inject(Page, Edit, Toolbar);
let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 120,
      textAlign: 'Right',
      isPrimaryKey: true,
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    {
      field: 'OrderDate',
      headerText: 'Order Date',
      width: 130,
      format: 'yMd',
      textAlign: 'Right',
      editType: 'datepickeredit',
    },
    {
      field: 'Freight',
      width: 120,
      format: 'C2',
      textAlign: 'Right',
      editType: 'numericedit',
    },
    {
      field: 'ShipCountry',
      headerText: 'Ship Country',
      width: 130
    }
  ],
  pageSettings: { pageCount: 5 },
  actionBegin: function (args) {
    if (args.requestType === 'beginEdit') {
      let minDate = args.rowData['OrderDate'];
      this.columns.forEach((column) => {
        if (column.field === 'OrderDate') {
          column.edit.params = { min: minDate };
        }
      });
    }
  },
});
grid.appendTo('#Grid');
