var grid = new ej.grids.Grid({
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

function onActionComplete(args) {
    if (args.requestType == "beginEdit" || args.requestType == "add") { 
        var valueError = ej.grids.getObject('valErrorPlacement', grid.editModule).bind(grid.editModule);  
        grid.editModule.formObj.customPlacement = (input, error) => { 
          valueError(input, error);
          var element = document.getElementById(input.name + '_Error');
          var tooltipWidth = element.offsetWidth;
          var  inputElement = null;
          if (document.querySelector('#' + grid.element.id + input.name)) {
            inputElement = document.querySelector('#' +grid.element.id + input.name);
          } else if (document.querySelector('#' + input.name)) {
            inputElement = document.querySelector('#' + input.name);
          }
          var inputPosition =  inputElement.getBoundingClientRect();
          var leftPosition =  (inputPosition.left - tooltipWidth - 16).toString() + 'px'; //for right side
          var topPosition = inputPosition.top.toString() + 'px';
          element.style.left = leftPosition; 
          element.style.top =  topPosition;
          element.style.position = 'fixed';
        } 
      } 
}