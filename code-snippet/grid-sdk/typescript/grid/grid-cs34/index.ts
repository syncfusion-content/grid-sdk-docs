import { Grid, Edit, Page, Toolbar } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar, Page);

let countryElement;
let countryObj;
let stateElement;
let stateObj;

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        {
            field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit',
            edit:
            {
                create: function () {
                    countryElement = document.createElement('input');
                    return countryElement;
                },
                destroy: function () {
                    countryObj.destroy();
                },
                read: function () {
                    return countryObj.text;
                },
                write: function () {
                    countryObj = new DropDownList({
                        dataSource: new DataManager(country),
                        fields: { value: 'countryId', text: 'countryName' },
                        change: () => {
                            stateObj.enabled = true;
                            let tempQuery = new Query().where('countryId', 'equal', countryObj.value);
                            stateObj.query = tempQuery;
                            stateObj.text = '';
                            stateObj.dataBind();
                        },
                        placeholder: 'Select a country',
                        floatLabelType: 'Never'
                    });
                    countryObj.appendTo(countryElement);
                }
            },
            width: 150
        },
        {
            field: 'ShipState', headerText: 'Ship State', editType: 'dropdownedit',
            edit:
            {
                create: function () {
                    stateElement = document.createElement('input');
                    return stateElement;
                },
                destroy: function () {
                    stateObj.destroy();
                },
                read: function () {
                    return stateObj.text;
                },
                write: function () {
                    stateObj = new DropDownList({
                        dataSource: new DataManager(state),
                        fields: { value: 'stateId', text: 'stateName' },
                        enabled: false,
                        placeholder: 'Select a state',
                        floatLabelType: 'Never'
                    });
                    stateObj.appendTo(stateElement);
                }
            },
            width: 120
        },
        { field: 'OrderDate', headerText: 'OrderDate', type: 'date', format: 'yMd', editType: 'datepickeredit', width: 150 }
    ],
    pageSettings: { pageSize: 7 },
    height: 273
});
grid.appendTo('#Grid');

let state = [
    { stateName: 'New York', countryId: '1', stateId: '101' },
    { stateName: 'Virginia ', countryId: '1', stateId: '102' },
    { stateName: 'Washington', countryId: '1', stateId: '103' },
    { stateName: 'Queensland', countryId: '2', stateId: '104' },
    { stateName: 'Tasmania ', countryId: '2', stateId: '105' },
    { stateName: 'Victoria', countryId: '2', stateId: '106' }
];

let country = [
    { countryName: 'United States', countryId: '1' },
    { countryName: 'Australia', countryId: '2' }
];