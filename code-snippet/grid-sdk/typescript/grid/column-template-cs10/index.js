
var dropData = ['USA', 'Germany', 'Brazil', 'France', 'Belgium','Switzerland','Venezuela','Austria', 'Mexico'];
var grid = new ej.grids.Grid({
  dataSource: data,
  height: 315,
  columns: [
      { field: 'OrderID', headerText: 'Order ID', width: 80 },
      { field: 'CustomerID', headerText: 'Customer Name', width: 100 },
      { field: 'Freight', headerText: 'Freight', width: 80 }
  ],
  queryCellInfo: function(args) {
      if (args.column.field === 'ShipCountry') {
          var dropDownList = new ej.dropdowns.DropDownList({
              dataSource: dropData,
              fields: { text: 'ShipCountry', value: 'ShipCountry' },
              value: args.data['ShipCountry'],
              index:0
          });
          dropDownList.appendTo(args.cell.querySelector('#dropElement'));
      }
  }
});
grid.appendTo('#Grid');

var addButton = new ej.buttons.Button();
addButton.appendTo('#button');

document.getElementById('button').onclick = function () {
  var newColumn = {
    field: 'ShipCountry',
    headerText: 'Ship Country',
    width: 100,
    headerTemplate: '#headerTemplate',
    template: '#columnTemplate'
};
grid.columns.push(newColumn);
grid.refreshColumns();
};