import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true},
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right',width: 120, validationRules: { required: true}, isPrimaryKey: true},
      { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true, minLength: 5 }, width: 150},
      { field: 'ShipCity', headerText: 'Ship City', validationRules: { required: true }, width: 150},
      { field: 'ShipName', headerText: 'Ship Name', validationRules: { required: true }, width: 150}
    ]
});
grid.appendTo('#Grid');

let button: Button = new Button(
    {
        content: 'Edit'
    }
  );
  button.appendTo('#Edit');

  let button1: Button = new Button(
    {
        content: 'Add'
    }
  );
  button1.appendTo('#Add');

  let button2: Button = new Button(
    {
        content: 'Delete'
    }
  );
  button2.appendTo('#Delete');

  let button3: Button = new Button(
    {
        content: 'update Row'
    }
  );
  button3.appendTo('#Updaterow');

  let button4: Button = new Button(
    {
        content: 'Update Cell'
    }
  );
  button4.appendTo('#Updatecell');

(<HTMLElement>document.getElementById('Edit')).onclick = function () {
    grid.startEdit();
};

(<HTMLElement>document.getElementById('Add')).onclick = function () {
    grid.addRecord({ "OrderID": Math.floor(Math.random() * 100000), "CustomerID": generateCustomerId(), 
    "ShipCity": generateShipCity(), "ShipName": generateShipName()  });
};

(<HTMLElement>document.getElementById('Delete')).onclick = function () {
    grid.deleteRecord();
};
(<HTMLElement>document.getElementById('Updaterow')).onclick = function () {
    grid.updateRow(0, {OrderID:10248,CustomerID: 'RTER', ShipCity: 'America', ShipName: 'Hanari'});

};
(<HTMLElement>document.getElementById('Updatecell')).onclick = function () {
    grid.setCellValue((grid.currentViewData[0]  as  columnDataType).OrderID,'CustomerID','Value Changed'); 
};

function generateCustomerId() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
// Generate a random ShipCity
function generateShipCity(){
    let cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
    return cities[Math.floor(Math.random() * cities.length)];
}
// Generate a random ShipName
function generateShipName() {
    let names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
    return names[Math.floor(Math.random() * names.length)];
}

export interface columnDataType
{
  OrderID:number;
  CustomerID:string;
  Freight:number;
  Role:string;
}