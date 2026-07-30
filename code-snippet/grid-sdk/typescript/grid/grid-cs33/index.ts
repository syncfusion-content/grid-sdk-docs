import { Grid, Edit, Page, Toolbar } from '@syncfusion/ej2-grids';
import { RichTextEditor, Link, Toolbar as RTEToolbar, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { data } from './datasource.ts';
import { FocusInEventArgs } from '@syncfusion/ej2-inputs';
RichTextEditor.Inject(Link, RTEToolbar, Image, HtmlEditor, QuickToolbar);
Grid.Inject(Edit, Toolbar, Page);

let richtexteditorElem;
let richtexteditorObj;

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  allowTextWrap: true,
  pageSettings: { pageSize: 7 },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
    { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 100 },
    { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true } },
    { field: 'OrderDate', headerText: 'Order Date', width: 100, editType: 'datepickeredit', format: { type: 'dateTime', format: 'M/d/y hh:mm a' }, textAlign: 'Right' },
    {
      field: 'ShipAddress', headerText: 'Ship Address', width: 150, editType: 'textarea', disableHtmlEncode: false,
       edit: {
        create: function () {
          richtexteditorElem = document.createElement('textarea');
          return richtexteditorElem;
        },
        destroy: function () {
          richtexteditorObj.destroy();
        },
        read: function () {
          return richtexteditorObj.value;
        },
        write: function (args) {
            var rowData = args.rowData
            richtexteditorObj = new RichTextEditor({
            value: rowData.ShipAddress,
            focus: onFocus,
            change: function (e) {
                rowData.ShipAddress = e.value;
            }
            });
            richtexteditorObj.appendTo(richtexteditorElem);
        }
      }
    }
  ],
  height: 255,
});
grid.appendTo('#Grid');

function onFocus(args: FocusInEventArgs)
{
    ((args.event).target).addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.stopPropagation();
        }
    });
}

export interface columnDataType {
  ShipCity: string[];
}