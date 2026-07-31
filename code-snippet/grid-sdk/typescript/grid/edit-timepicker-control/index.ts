import { Grid, Edit, Toolbar, SaveEventArgs } from '@syncfusion/ej2-grids';
import { TimePicker } from '@syncfusion/ej2-calendars';
import { data } from './datasource.ts';

let timepickerElem;
let timepickerObj;

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer Name', width: 120},
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right'},
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150},
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', editType: 'DatePickerEdit', textAlign: 'Right'},
        { field: 'OrderDate', headerText: 'Order Time', width: 140, format: 'hh :mm a', textAlign: 'Right',
         edit: {
            create: function(){
                timepickerElem = document.createElement('input');
                return timepickerElem;
            },
            read: function() {
                return timepickerObj.value;
            },
            destroy: function() {
                timepickerObj.destroy();
            },
            write: function(args){
                let rowData = args.rowData;
                timepickerObj = new TimePicker({
                    value: rowData.OrderDate,
                    change: function (e) {
                        rowData.OrderDate = e.value;
                    }
                });
                timepickerObj.appendTo(args.element);
            }
        } }
    ],
    height: 273
});

grid.appendTo('#Grid');