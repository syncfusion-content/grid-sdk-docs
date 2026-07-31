import { Grid, Edit, Toolbar, ForeignKey } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data, employeeData } from './datasource.ts';

Grid.Inject(Edit, Toolbar, ForeignKey);

let dropdownlistElem;
let dropdownlistObj;

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', validationRules: { required: true }, isPrimaryKey: true },
        {
            field: 'EmployeeID', foreignKeyValue: 'FirstName', foreignKeyField: 'EmployeeID', dataSource: employeeData, headerText: 'Employee Name', width: 220, edit: {
                create: function () {
                    dropdownlistElem = document.createElement('input');
                    return dropdownlistElem;
                },
                read: function () {
                    return dropdownlistObj.value;
                },
                destroy: function () {
                    dropdownlistObj.destroy();
                },
                write: function (args) {
                    let rowData = args.rowData;
                    dropdownlistObj = new DropDownList({
                        dataSource: employeeData,
                        fields: { text: 'FirstName', value: 'EmployeeID' },
                        value: rowData.EmployeeID,
                        change: function (args: { value: any }) {
                            // Update the EmployeeID value in the orderData object
                            rowData.EmployeeID = args.value;
                        },
                        itemTemplate: function (props: EmployeeProps) {
                            return '<div><img class="empImage" width="50px" src="https://ej2.syncfusion.com/demos/src/grid/images/' + props.EmployeeID + '.png" alt="employee"/><div class="ename">' + props.FirstName + '</div></div>';
                        }
                    });
                    dropdownlistObj.appendTo(args.element);
                }
            }
        },
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2', textAlign: 'Right', editType: 'numericedit' },
        { field: 'ShipName', headerText: 'Ship Name', width: 170 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit' }
    ],
    height: 273
});

grid.appendTo('#Grid');

export interface EmployeeProps {
    EmployeeID: string | number;
    FirstName: string;
}