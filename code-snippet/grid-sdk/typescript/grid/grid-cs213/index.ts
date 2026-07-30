import { Fetch, L10n } from '@syncfusion/ej2-base';
import { Grid,Page} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
Grid.Inject(Page);

let frGrid: Grid = new Grid({
    dataSource: data,
    locale: 'fr-FR',
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 100, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ]
});

let enGrid: Grid = new Grid({
    dataSource: data,
    locale: 'fr-FR',
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 100, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ]
});

// Load the locale for EJ2.
new Fetch('https://cdn.jsdelivr.net/npm/@syncfusion/ej2-locale@26.1.35/src/fr.json','GET').send().then((frFRLocalization: any) => {
      L10n.load({ 'fr-FR': frFRLocalization.fr });
      frGrid.appendTo('#frGrid');
      enGrid.appendTo('#enGrid');
}).catch((error: any) => {
    console.error('fr locale error! => ', error);
  }
);