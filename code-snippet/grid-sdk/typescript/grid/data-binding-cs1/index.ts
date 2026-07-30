import { Grid, Page, Sort, Filter } from '@syncfusion/ej2-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Page,Sort,Filter);

let data: DataManager = new DataManager({
  url: 'https://services.syncfusion.com/js/production/api/Orders',
  adaptor: new UrlAdaptor
});

let grid: Grid = new Grid({
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

let dropdownData: object[] = [
  { id: 'Spinner', value: 'Spinner' },
  { id: 'Shimmer', value: 'Shimmer' }
];

let dropdownList: DropDownList = new DropDownList({
  index: 0,
  width: 120,
  fields: { text: 'value', value: 'id' },
  dataSource: dropdownData,
  change: valueChange,
});
dropdownList.appendTo('#dropdown');

function valueChange(args: ChangeEventArgs ) {
  if (dropdownList.value === 'Shimmer') {
    grid.loadingIndicator.indicatorType = 'Shimmer';
    grid.refreshColumns();
} else {
    grid.loadingIndicator.indicatorType = 'Spinner';
    grid.refreshColumns();
}
}