import { Grid, Edit, Toolbar, SaveEventArgs } from '@syncfusion/ej2-grids';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

let multiselectElem;
let multiselectObj;
let orderData;

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: {  allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    actionBegin: actionBegin,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer Name', width: 120},
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right', editType: 'numericedit',validationRules: { required: true, min: 1, max: 1000 }},
        { field: 'OrderDate', headerText: 'Order Date', width: 130, editType: 'datepickeredit', format: 'yMd', textAlign: 'Right'},
        { field: 'ShipCity', headerText: 'Ship City', width: 150, format: 'hh :mm a', textAlign: 'Right',
         edit: {
            create: function(){
                multiselectElem = document.createElement('input');
                return multiselectElem;
            },
            read: function() {
                return multiselectObj.value;
            },
            destroy: function() {
                multiselectObj.destroy();
            },
            write: function(args){
                multiselectObj = new MultiSelect({
                    dataSource: multiselectDatasource,
                    value: orderData.ShipCity,
                    fields: { value: 'value', text: 'text' },
                    change: function(e) {
                        orderData.ShipCity = e.value; // Update orderData.ShipCity on change
                    }
                });
                multiselectObj.appendTo(args.element);
            }
        } }
    ],
    height: 273
});
grid.appendTo('#Grid');

let multiselectDatasource = [
    { value: 'Reims', text: 'Reims' },
    { value: 'Münster', text: 'Münster' },
    { value: 'Rio de Janeiro', text: 'Rio de Janeiro' },
    { value: 'Lyon', text: 'Lyon' },
    { value: 'Charleroi', text: 'Charleroi' }
];

function actionBegin(args: SaveEventArgs) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        (orderData as Object) = Object.assign({}, args.rowData);

        (orderData as columnDataType)['ShipCity'] = (orderData  as columnDataType)['ShipCity'] ? ((orderData  as columnDataType)['ShipCity'] as any).split(',') : [];

    }
    if (args.requestType === 'save') {
        (args.data  as columnType)['ShipCity'] = (orderData  as columnDataType)['ShipCity'].join(',');
    }
}

export interface columnDataType{
    ShipCity: string[];
  }

  export interface columnType{
    OrderID:number,
    Freight:number,
    ShipCity:string,
    EmployeeID:number,
    ShipCountry:string,
    ShipAddress:string,
    OrderDate:Date
 }