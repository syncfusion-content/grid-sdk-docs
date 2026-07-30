ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
  dataSource: data,
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  allowPaging: true,
  load: load,
  actionComplete: onActionComplete,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
    { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
  ],
  height: 273
});
grid.appendTo('#Grid');

var isDropdown = false;

function load() {
  grid.element.addEventListener('mouseup', (e) => {
    if (e.target.classList.contains('e-rowcell')) {
      if (grid.isEdit) {
        grid.endEdit();
      }
      var rowInfo = grid.getRowInfo(e.target);
      if (rowInfo && rowInfo.column && (rowInfo.column).field === 'ShipCountry') {
        isDropdown = true;
        grid.selectRow(rowInfo.rowIndex);
        grid.startEdit();
      }
    }
  });
}

function onActionComplete(args) {
  if (args.requestType === 'beginEdit' && isDropdown) {
    isDropdown = false;
    var dropdownObj = (args.form.querySelector('.e-dropdownlist'))['ej2_instances'][0];
    dropdownObj.element.focus();
    dropdownObj.showPopup();
  }
}