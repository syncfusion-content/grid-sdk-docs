import { Grid } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
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

let button: Button = new Button();
button.appendTo('#sample');

(document.getElementById('sample')as HTMLElement).addEventListener('click', function () {
  changeDatasource();
});

function changeDatasource() {
  for (let i = 0; i < 5; i++) {
      let newRecord = {
          OrderID: generateOrderId(),
          CustomerID: generateCustomerId(),
          ShipCity: generateShipCity(),
          Freight: generateFreight(),
          ShipName: generateShipName()
      };
      grid.dataSource.unshift(newRecord);
      grid.setProperties({dataSource: grid.dataSource as object[] });
}

// Generate a random OrderID
function generateOrderId(): number {
  return Math.floor(10000 + Math.random() * 90000);
}

// Generate a random CustomerID
function generateCustomerId(): string {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Generate a random ShipCity
function generateShipCity(): string  {
  let cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
  return cities[Math.floor(Math.random() * cities.length)];
}

// Generate a random Freight value
function generateFreight(): number {
  return Math.random() * 100;
}

// Generate a random ShipName
function generateShipName(): string {
  let names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
  return names[Math.floor(Math.random() * names.length)];
}
}