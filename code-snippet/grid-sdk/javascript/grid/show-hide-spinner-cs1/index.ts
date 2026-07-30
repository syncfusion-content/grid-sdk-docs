import { Grid, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Page);

let grid: Grid = new Grid({
    height: 272,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: '90', textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: '100' },
        { field: 'ProductName', headerText: 'Product Name', width: '110' },
        { field: 'Quantity', headerText: 'Quantity', width: '100' },
    ],
});
grid.appendTo('#Grid');

let loadButton: Button = new Button({ cssClass: 'e-outline' }, '#LoadButton');
let showButton: Button = new Button({ cssClass: 'e-outline' }, '#ShowButton');
let hideButton: Button = new Button({ cssClass: 'e-outline' }, '#HideButton');

(document.getElementById('LoadButton')as HTMLElement).addEventListener('click', function () {  
    grid.showSpinner();
    setTimeout(() => {
      grid.dataSource = data;
      grid.hideSpinner();
    }, 1000);
});

(document.getElementById('ShowButton')as HTMLElement).addEventListener('click', function () {
    grid.showSpinner();
});

(document.getElementById('HideButton')as HTMLElement).addEventListener('click', function () {
    grid.hideSpinner();
});
