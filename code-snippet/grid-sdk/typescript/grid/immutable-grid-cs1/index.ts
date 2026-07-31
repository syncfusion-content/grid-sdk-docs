import { Grid, Page, RowDataBoundEventArgs, CustomRowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    height: 350,
    allowPaging: true,
    enableHover: false,
    enableImmutableMode: true,
    pageSettings: { pageSize: 50 },
    selectionSettings: { type: 'Multiple' },
    queryCellInfo: function (args: CustomRowDataBoundEventArgs) {
        if ( args.column.field === 'ShipName' && args.data.ShipName === 'Gems Chevalier') {
            (args.cell as HTMLElement).style.backgroundColor = 'rgb(210, 226, 129)';
        }
    },
    rowDataBound: function (args: RowDataBoundEventArgs) {
        (args.row as HTMLElement).style.backgroundColor = (args.data as DataType).isNewlyAdded ? '' : 'rgb(208, 255, 255)';
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, width: '120', textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: '120' },
        { field: 'Freight', headerText: 'Freight', width: '120' },
        { field: 'ShipName', headerText: 'Ship Name', width: '120' },
    ],
});
grid.appendTo('#Grid');

let message = document.getElementById('message')as HTMLElement;
message.innerHTML = `Initial rows rendered: ${data.length}`;

(document.getElementById('addtop')as HTMLElement).addEventListener('click', function () {
    let count = 0;
    grid.getAllDataRows().forEach(row => {
        (row as HTMLElement).style.backgroundColor = 'rgb(208, 255, 255)';
});

    if (count < 1) {
        let newRowData: object[] = [];
        let addedRecords: object = {
          'OrderID': generateOrderId(),
          'CustomerID': generateCustomerId(),
          'ShipCity': generateShipCity(),
          'Freight': generateFreight(),
          'ShipName': generateShipName(),
          'isNewlyAdded': true
        };
        newRowData.push(addedRecords);
        grid.dataSource = ([...newRowData, ...grid.dataSource as DataType[]]as DataType[]);
        count++;
        message.innerHTML = count + ' rows rendered after performing the add action';
    }
});

(document.getElementById('delete')as HTMLElement).addEventListener('click', function () {
    let count = 0;
    if (count < 1 && (data as DataType[]).length > 0) {
        grid.dataSource = (grid.dataSource as DataType[]).slice(1);
        count++;
        message.innerHTML = count + ' rows deleted after performing delete action';
    }
});

(document.getElementById('update')as HTMLElement).addEventListener('click', function () {
    let count = 0;
    let newRowData = (grid.dataSource as DataType[]).map(function (row) {
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
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateShipCity() {
    let cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
    return cities[Math.floor(Math.random() * cities.length)];
}

function generateFreight() {
    let randomValue = Math.random() * 100;
    return parseFloat(randomValue.toFixed(2));
}

function generateShipName() {
    var names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
    return names[Math.floor(Math.random() * names.length)];
}

interface CustomRowDataBoundEventArgs extends RowDataBoundEventArgs {
    column: {
      field: string;
    };
    cell: HTMLElement;
    data: DataType;
  }

  interface DataType {
    OrderID: number;
    CustomerID: string;
    Freight: number;
    ShipName: string;
    ShipCity: string;
    isNewlyAdded: boolean;
  }