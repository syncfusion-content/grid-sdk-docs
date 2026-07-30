
import { Grid, Edit,EditEventArgs, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
  dataSource: data,
  editSettings:  { allowEditing: true, allowAdding: true, allowDeleting: true },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  actionComplete: access,
  columns: [
      { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 100 },
      { field: 'CustomerID', headerText: 'Customer ID', type: 'string', validationRules: { required: true }, width: 120},
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', validationRules: { required: true }, format: 'C2', editType: 'numericedit', width: 120},
      { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit'}
  ],
  height: 265
});  
grid.appendTo('#Grid');

function access(args: EditEventArgs)
{
  if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      let tr = args.row;
      let numericTextBox = tr.querySelector('.e-numerictextbox'); // numeric TextBox control element
      if (numericTextBox) {
          let numericTextBoxInstance = (numericTextBox as HTMLFormElement).ej2_instances[0];
          numericTextBoxInstance.element.style.backgroundColor = 'light pink';
          numericTextBoxInstance.element.style.color = 'black';
          numericTextBoxInstance.element.style.border = '2px solid red';
          numericTextBoxInstance.element.style.textAlign = 'center';
          numericTextBoxInstance.max = 1000;
          numericTextBoxInstance.min = 1;
      }
      let dropDownList = tr.querySelector('.e-dropdownlist'); // dropDownList control element
      if (dropDownList) {
          let dropDownListInstance =(dropDownList as HTMLFormElement).ej2_instances[0]
          dropDownListInstance.showPopup(); // Open the dropdown list
      }
  }
}