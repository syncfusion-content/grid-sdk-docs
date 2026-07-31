var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
      { field: 'OrderID', headerText: 'OrderID', textAlign: 'Right', width: 90 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format:'C2', width: 90 },
      { field: 'ShipCity', headerText: 'Ship City', width: 120 },
    ],
    height: 280
});
grid.appendTo('#Grid');

var button = new ej.buttons.Button();
 button.appendTo('#sample');

document.getElementById('sample').addEventListener('click', function () {
  changeDatasource();
});

function changeDatasource() {
  for (var i = 0; i < 5; i++) {
      var newRecord = {
          OrderID: generateOrderId(),
          CustomerID: generateCustomerId(),
          ShipCity: generateShipCity(),
          Freight: generateFreight(),
          ShipName: generateShipName()
      };
 
      grid.dataSource.unshift(newRecord);
      grid.setProperties({dataSource: grid.dataSource});
  }
}

// Generate a random OrderID
function generateOrderId() {
  return Math.floor(10000 + Math.random() * 90000);
}

// Generate a random CustomerID
function generateCustomerId() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Generate a random ShipCity
function generateShipCity() {
  var cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
  return cities[Math.floor(Math.random() * cities.length)];
}

// Generate a random Freight value
function generateFreight() {
  return Math.random() * 100;
}

// Generate a random ShipName
function generateShipName() {
  var names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
  return names[Math.floor(Math.random() * names.length)];
}