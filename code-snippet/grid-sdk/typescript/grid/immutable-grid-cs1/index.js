var grid = new ej.grids.Grid({
    dataSource: data,
    height: 350,
    allowPaging: true,
    enableHover: false,
    enableImmutableMode: true,
    pageSettings: { pageSize: 50 },
    selectionSettings: { type: 'Multiple' },
    queryCellInfo: function (args) {
        if ( args.column.field === 'ShipName' && args.data.ShipName === 'Gems Chevalier') {
            args.cell.style.backgroundColor = 'rgb(210, 226, 129)';
        }
    },
    rowDataBound: function (args) {
        args.row.style.backgroundColor = args.data.isNewlyAdded ? '' : 'rgb(208, 255, 255)';
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, width: '120', textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: '120' },
        { field: 'Freight', headerText: 'Freight', width: '120' },
        { field: 'ShipName', headerText: 'Ship Name', width: '120' },
    ],
});
grid.appendTo('#Grid');

var message = document.getElementById('message');
message.innerHTML = `Initial rows rendered: ${data.length}`;

document.getElementById('addtop').addEventListener('click', function () {  
    grid.getAllDataRows().forEach(row => {
        row.style.backgroundColor = 'rgb(208, 255, 255)';
    });
    var count = 0;
    if (count < 1) {
        var newRowData = [];
        var addedRecords = {
            OrderID: generateOrderId(),
            CustomerID: generateCustomerId(),
            ShipCity: generateShipCity(),
            Freight: generateFreight(),
            ShipName: generateShipName(),
            isNewlyAdded: true,
        };
        newRowData.push(addedRecords);
        grid.dataSource = [...newRowData, ...grid.dataSource];
        count++;
        message.innerHTML = count + ' rows rendered after performing the add action';
    }
});

document.getElementById('delete').addEventListener('click', function () {
    var count = 0;
    if (count < 1 && data.length > 0) {
        grid.dataSource = grid.dataSource.slice(1);
        count++;
        message.innerHTML = count + ' rows deleted after performing delete action';
    }
});

document.getElementById('update').addEventListener('click', function () {
    var count = 0;
    var newRowData = grid.dataSource.map(function (row) {
        if (row.ShipName === 'Bueno Foods') {
            count++;
            return { ...row, ShipName: 'Gems Chevalier' };
        } else {
            return row;
        }
    });
    grid.dataSource = newRowData;
    message.innerHTML = count + ' rows updated after performing update action';
});

function generateOrderId() {
    return Math.floor(10000 + Math.random() * 90000);
}

function generateCustomerId() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateShipCity() {
    var cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
    return cities[Math.floor(Math.random() * cities.length)];
}

function generateFreight() {
    var randomValue = Math.random() * 100;
    return parseFloat(randomValue.toFixed(2));
}

function generateShipName() {
    var names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
    return names[Math.floor(Math.random() * names.length)];
}