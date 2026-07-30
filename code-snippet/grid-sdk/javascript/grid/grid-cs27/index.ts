
import { Grid, Edit, Toolbar  } from '@syncfusion/ej2-grids';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let country =  [
    { countryName: 'United States', countryId: '1' },
    { countryName: 'Australia', countryId: '2' },
    { countryName: 'India', countryId: '3' }
];

let grid: Grid = new Grid(
    {
        dataSource: data,
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', validationRules: { required: true, number: true }, textAlign: 'Right', isPrimaryKey: true, width: 100 },
            { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 120},
            { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit',validationRules: { required: true }, width: 150, edit: { 
                    params: {
                        dataSource: new DataManager(country),
                        fields: { text: 'countryName', value: 'countryName' },
                        query:  new Query(),
                        actionComplete: () => false
                    }
                }
            }
        ],
        height: 273
    });
grid.appendTo('#Grid');