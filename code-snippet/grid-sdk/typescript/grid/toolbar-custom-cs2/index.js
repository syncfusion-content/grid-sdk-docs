ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Edit);

var dropDownData= [
  'Reims',
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

var grid = new ej.grids.Grid({
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
  editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
  
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 90,
      isPrimaryKey: true,
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
    { field: 'ShipName', headerText: 'ShipName', width: 120 },
  ],
  height: 270,
});
grid.appendTo('#Grid');

var listObj = new ej.dropdowns.AutoComplete({
  dataSource: dropDownData,
  placeholder: 'Search ShipCity',
  change: function (event) {
    const selectedCity = event.value;
    // perform search action for ShipCity column.
    grid.search(selectedCity);
   }  
});
listObj.appendTo('#autoCompleteObj');