var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID',  width: 120 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },
    { field: 'Freight', headerText: 'Freight', width: 80 }
],
height: '100%'
});
grid.appendTo('#Grid');

var widthsize = new ej.inputs.NumericTextBox({
  min : 400,
  max : 650,
  placeholder : '400',
  step : 5,
  width : 120
});
widthsize.appendTo('#WidthTextBox');

var heightsize = new ej.inputs.NumericTextBox({
  min : 200,
  max : 650,
  placeholder : '200',
  step : 5,
  width : 120
});
heightsize.appendTo('#HeightTextBox');

var button = new ej.buttons.Button({
  cssClass: 'e-outline',
});
button.appendTo('#resizeButton');
 
document.getElementById('resizeButton').onclick = function () {
  var parentDiv = document.getElementById('parent');
  parentDiv.style.width = widthsize.element.value + 'px';
  parentDiv.style.height = heightsize.element.value + 'px';
};