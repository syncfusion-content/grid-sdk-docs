import { Grid, Find } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Find);

var grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Left', width: 110 },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Left', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Left', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 90, format: 'C2' }
    ],
    height: 272
});
grid.appendTo('#Grid');

var findButton = new Button({ disabled: true });
var findNextButton = new Button({ disabled: true });
var findPreviousButton = new Button({ disabled: true });
var clearFindButton = new Button({ disabled: true });
findButton.appendTo('#find');
findNextButton.appendTo('#findNext');
findPreviousButton.appendTo('#findPrevious');
clearFindButton.appendTo('#clearFind');

var findTextInput = document.getElementById('findText') as HTMLInputElement;
var findButtons = [findButton, findNextButton, findPreviousButton, clearFindButton];
findTextInput.addEventListener('input', function () {
    var disabled = !findTextInput.value.trim();
    findButtons.forEach(function (button) {
        button.disabled = disabled;
    });
});
document.getElementById('find')!.addEventListener('click', function () {
    grid.find(findTextInput.value);
});
document.getElementById('findNext')!.addEventListener('click', function () {
    grid.findNext();
});
document.getElementById('findPrevious')!.addEventListener('click', function () {
    grid.findPrevious();
});
document.getElementById('clearFind')!.addEventListener('click', function () {
    grid.clearFind();
    findTextInput.value = '';
    findButtons.forEach(function (button) {
        button.disabled = true;
    });
});
