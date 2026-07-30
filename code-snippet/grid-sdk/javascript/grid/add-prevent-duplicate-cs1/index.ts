import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

function orderIdCustomValidation(args: any):void {
    return (grid.dataSource).every((data: any) => {
        return data['OrderID'] + '' !== args['value'] || data['OrderID'] === grid.editModule.editModule.args.rowData['OrderID']
    });
};
let orderIDRules: object = {
    required: true,
    min: [orderIdCustomValidation, 'The entered value already exists in the column OrderID. Please enter a unique value.']
};
function actionBegin(args: any):void {
    if (args.requestType === 'save') {
        grid.editModule.formObj.addRules('OrderID', orderIDRules); // Add form validation rules dynamically.
        if (!grid.editModule.formObj.validate()) { // Check dynamically added validation rules.
            args.cancel = true; // Prevent adding duplicate data action.
        }
        grid.editModule.formObj.removeRules('OrderID'); // Remove form validation rules dynamically.
    }
}
let grid: Grid = new Grid({
    dataSource: data,
    actionBegin: actionBegin,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true } },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min:1, max:1000 }, width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');