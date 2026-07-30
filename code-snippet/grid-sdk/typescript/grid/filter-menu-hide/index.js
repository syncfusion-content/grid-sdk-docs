ej.grids.Grid.Inject(ej.grids.Filter,ej.grids.Page);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Name' },
        { field: 'ShipName', headerText: 'Ship Name' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2' }
    ],
});     
grid.appendTo('#Grid');


let button = new ej.buttons.Button(
    { content: 'Filter Customer ID Column', }
  );
  button.appendTo('#performFilter');

  let buttonClear = new ej.buttons.Button(
    { content: 'Clear Filter', }
  );
  buttonClear.appendTo('#clearFilter');
  

document.getElementById('performFilter').onclick = function () {
    grid.filterByColumn('CustomerID', 'startswith', 'V');
};

document.getElementById('clearFilter').onclick = function () {
    grid.clearFiltering();
};