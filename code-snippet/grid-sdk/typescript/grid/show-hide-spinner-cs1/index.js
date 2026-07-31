var grid = new ej.grids.Grid({
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

var loadButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#LoadButton');
var showButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#ShowButton');
var hideButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#HideButton');

document.getElementById('LoadButton').addEventListener('click', function () {  
    grid.showSpinner();
    setTimeout(() => {
      grid.dataSource = data;
      grid.hideSpinner();
    }, 1000);
});

document.getElementById('ShowButton').addEventListener('click', function () {
    grid.showSpinner();
});

document.getElementById('HideButton').addEventListener('click', function () {
    grid.hideSpinner();
});

