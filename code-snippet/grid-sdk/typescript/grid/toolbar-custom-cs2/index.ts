import { Grid, Toolbar, Edit } from '@syncfusion/ej2-grids';
import { AutoComplete, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, Edit);

var dropDownData= ['Reims',
  'Münster',
  'Rio de Janeiro',
  'Lyon',
  'Charleroi',
  'Bern',
  'Genève',
  'San Cristóbal',
  'Graz',
  'México D.F.',
  'Albuquerque',
  'Köln'
];

let grid: Grid = new Grid({
  dataSource: data,
  toolbar: [
    'Add',
    'Edit',
    'Delete',
    {
      template: '#toolbar-template',
      align: 'Left',
      tooltipText: 'Custom Component AutoComplete',
    },
  ],
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
    { field: 'ShipName', headerText: 'ShipName', width: 120 },
  ],
  height: 270,
});
grid.appendTo('#Grid');

var listObj = new AutoComplete({
  dataSource: dropDownData,
  placeholder: 'Search ShipCity',
  change: function (event:ChangeEventArgs) {
    const selectedCity = (event.value as string);
    // perform search action for ShipCity column.
    grid.search(selectedCity);
   }  
});
listObj.appendTo('#autoCompleteObj');