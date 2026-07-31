import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

let dropData = ['USA', 'Germany', 'Brazil', 'France', 'Belgium','Switzerland','Venezuela','Austria', 'Mexico'];
let grid: Grid = new Grid({
  dataSource: data,
  height: 315,
  columns: [
      { field: 'OrderID', headerText: 'Order ID', width: 80 },
      { field: 'CustomerID', headerText: 'Customer Name', width: 100 },
      { field: 'Freight', headerText: 'Freight', width: 80 }
  ],
  queryCellInfo: function(args: QueryCellInfoEventArgs) {
      if (args.column.field === 'ShipCountry') {
          let dropDownList = new DropDownList({
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

let addButton: Button = new Button();
addButton.appendTo('#button');

(document.getElementById('button') as HTMLElement).onclick = function () {
  let newColumn = {
    field: 'ShipCountry',
    headerText: 'Ship Country',
    width: 100,
    headerTemplate: '#headerTemplate',
    template: '#columnTemplate'
};
grid.columns.push(newColumn);
grid.refreshColumns();
};