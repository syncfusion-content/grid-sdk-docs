import { Grid, Edit, Toolbar, EditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { CheckBox } from '@syncfusion/ej2-buttons';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: '100', textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: '120' },
        { field: 'Freight', headerText: 'Freight', width: '120', format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { min: 1, max: 1000 } },
        { field: 'ShipCountry', headerText: 'Ship Country', width: '150', editType: 'dropdownedit' }
    ],
    actionComplete: actionComplete,
    height: 273
});
grid.appendTo('#Grid');

let checkbox: CheckBox = new CheckBox({ 
    label: 'Enable/Disable validation rule for customerID coulumn',
    checked: true 
});
checkbox.appendTo('#checkbox');

function actionComplete(args: EditEventArgs) {
    let formObj = grid.editModule.formObj;
    let customerIDRules = {
        required: true,
        minLength: [5, 'Customer ID should have a minimum length of 5 characters'],
    };

    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        if (checkbox.checked) {
            // Add the custom validation rule
            formObj.addRules('CustomerID', customerIDRules);
        }
    }
}