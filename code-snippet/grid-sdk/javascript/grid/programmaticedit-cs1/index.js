var isAddable = true;
ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, validationRules: { required: true }, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true, minLength: 5 }, width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', validationRules: { required: true }, width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', validationRules: { required: true }, width: 150 }
    ]
});
grid.appendTo('#Grid');

var button = new ej.buttons.Button({
    content: 'Edit',
});
button.appendTo('#Edit');

var button1 = new ej.buttons.Button({
    content: 'Add',
});
button1.appendTo('#Add');

var button2 = new ej.buttons.Button({
    content: 'Delete',
});
button2.appendTo('#Delete');

var button3 = new ej.buttons.Button({
    content: 'update Row',
});
button3.appendTo('#Updaterow');

var button4 = new ej.buttons.Button({
    content: 'Update Cell',
});
button4.appendTo('#Updatecell');

document.getElementById('Edit').onclick = function () {
    grid.startEdit();
};

document.getElementById('Add').onclick = function () {
    grid.addRecord({
        "OrderID": Math.floor(Math.random() * 100000), "CustomerID": generateCustomerId(),
        "ShipCity": generateShipCity(), "ShipName": generateShipName()
    });
};

document.getElementById('Delete').onclick = function () {
    grid.deleteRecord();
};
document.getElementById('Updaterow').onclick = function () {
    grid.updateRow(0, { OrderID: 10248, CustomerID: 'RTER', ShipCity: 'America', ShipName: 'Hanari' });

};
document.getElementById('Updatecell').onclick = function () {
    grid.setCellValue((grid.currentViewData[0]).OrderID, 'CustomerID', 'Value Changed');
};

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
// Generate a random ShipName
function generateShipName() {
    var names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
    return names[Math.floor(Math.random() * names.length)];
}