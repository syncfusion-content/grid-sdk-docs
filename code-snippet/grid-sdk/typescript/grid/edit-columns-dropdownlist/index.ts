import { Grid, Edit, Toolbar, ForeignKey } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar, ForeignKey);

let dropdownlistElem;
let dropdownlistObj;

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true},
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer Name', width: 120},
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 1, max: 1000 }},
        { field: 'OrderDate', headerText: 'Order Date', width: 130, editType: 'datepickeredit', format: 'yMd', textAlign: 'Right'},
        { field: 'ShipCountry', headerText: 'Ship Country', width: 300,
         edit: {
            create: function(){
                dropdownlistElem = document.createElement('input');
                return dropdownlistElem;
            },
            read: function() {
                return dropdownlistObj.value;
            },
            destroy: function() {
                dropdownlistObj.destroy();
            },
            write: function(args){
                let rowData = args.rowData;
                dropdownlistObj = new DropDownList({
                    dataSource: data,
                    query: new Query().from('data').select(['EmployeeID', 'ShipCountry', 'OrderID']).take(6),
                    fields:  { text: 'ShipCountry' },
                    value: rowData.ShipCountry,
                    change: function(args) {
                        // Update the EmployeeID value in the rowData 
                        rowData.ShipCountry = args.value;
                    },
                    headerTemplate: '<table><tr><th>EmployeeID</th><th>ShipCountry</th></tr></table>',
                    itemTemplate: '<div class="e-grid"><table class="e-table"><tbody><tr><td class="e-rowcell">${EmployeeID}</td><td class="e-rowcell">${ShipCountry}</td></tr></tbody></table></div>'
                });
                dropdownlistObj.appendTo(args.element);
            }
        } }
    ],
    height: 273
});

grid.appendTo('#Grid');