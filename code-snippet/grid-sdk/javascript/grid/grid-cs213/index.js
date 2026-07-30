ej.grids.Grid.Inject(ej.grids.Page);
var frGrid = new ej.grids.Grid({
    dataSource: data,
    locale: 'fr-FR',
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 100, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 273
});
var enGrid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 100, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 273
});
// Load the locale for EJ2.
new ej.base.Fetch( 'https://cdn.jsdelivr.net/npm/@syncfusion/ej2-locale@26.1.35/src/fr.json', 'GET').send().then((frFRLocalization) => {
      ej.base.L10n.load({ 'fr-FR': frFRLocalization.fr });
      frGrid.appendTo('#frGrid');
      enGrid.appendTo('#enGrid');
}).catch((error) => {
  console.error('fr locale error! => ', error);
});