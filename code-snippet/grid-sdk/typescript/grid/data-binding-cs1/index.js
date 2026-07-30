var data = new ej.data.DataManager({
  url: 'https://services.syncfusion.com/js/production/api/Orders',
  adaptor: new ej.data.UrlAdaptor
});

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true,
    pageSettings: { pageCount: 3 },
    loadingIndicator: { indicatorType: 'Spinner' },
    columns: [
      { field: 'EmployeeID', headerText: 'Employee ID', width: 130, textAlign: 'Right' },
      { field: 'Employees', headerText: 'Employee Name', width: 145 },
      { field: 'Designation', headerText: 'Designation', width: 130 },
      { field: 'CurrentSalary', headerText: 'Current Salary', format:'C2', width: 140, textAlign: 'Right' },
    ],
    height: 315
});
grid.appendTo('#Grid');

var dropdownData = [
  { id: 'Spinner', value: 'Spinner' },
  { id: 'Shimmer', value: 'Shimmer' }
];

var dropdownList = new ej.dropdowns.DropDownList({
  index: 0,
  width: 120,
  fields: { text: 'value', value: 'id' },
  dataSource: dropdownData,
  change: valueChange,
 });
 dropdownList.appendTo('#dropdown');

 function valueChange() {
  if (dropdownList.value === 'Shimmer') {
    grid.loadingIndicator.indicatorType = 'Shimmer';
    grid.refreshColumns();
} else {
    grid.loadingIndicator.indicatorType = 'Spinner';
    grid.refreshColumns();
}
}