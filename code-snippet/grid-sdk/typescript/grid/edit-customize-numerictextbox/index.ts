import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid(
    {
        dataSource: data,
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        height: 265,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
            { field: 'CustomerID', validationRules: { required: true }, headerText: 'CustomerID', width: 120 },
            {
                field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', edit: {
                    params: {
                        decimals: 0,
                        format: 'N',
                        showClearButton: true,
                        showSpinButton: false
                    }
                }, validationRules: { required: true, min: 1, max: 1000 }, width: 120
            },
            { field: 'ShipCity', headerText: 'Ship City', editType: 'dropdownedit', validationRules: { required: true }, width: 150 }
        ]
    });
grid.appendTo('#Grid');