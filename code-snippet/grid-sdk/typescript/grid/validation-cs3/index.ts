import { Grid, Edit, Toolbar, Page, EditEventArgs, getObject } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageCount: 5},
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: '120', textAlign: 'Right', isPrimaryKey: true, validationRules: {  required: true, number: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: '120', validationRules: { required: true } },
        { field: 'Freight', headerText: 'Freight', width: '120', format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true } },
        { field: 'ShipCountry', headerText: 'Ship Country', width: '150', editType: 'dropdownedit', validationRules:{ required: true }, edit: { params: { popupHeight: '200px' }} }
    ],
    actionComplete: onActionComplete,
    height: 273
});
grid.appendTo('#Grid');


function onActionComplete(args: EditEventArgs) {
    if (args.requestType == "beginEdit" || args.requestType == "add") { 
        let valueError = getObject('valErrorPlacement', grid.editModule).bind(grid.editModule);  
        grid.editModule.formObj.customPlacement = (input, error) => { 
          valueError(input, error);
          let element = document.getElementById(input.name + '_Error');
          let tooltipWidth = (element as HTMLElement).offsetWidth;
          let  inputElement = null;
          if (document.querySelector('#' + grid.element.id + input.name)) {
            inputElement = document.querySelector('#' +grid.element.id + input.name);
          } else if (document.querySelector('#' + input.name)) {
            inputElement = document.querySelector('#' + input.name);
          }
          let inputPosition = ( inputElement as Element).getBoundingClientRect();
          let leftPosition =  (inputPosition.left - tooltipWidth - 16).toString() + 'px'; //for right side
          let topPosition = (inputPosition.top).toString() + 'px';
          (element as HTMLElement).style.left = leftPosition; 
          (element as HTMLElement).style.top =  topPosition;
          (element as HTMLElement).style.position = 'fixed';
        } 
      } 
    }

