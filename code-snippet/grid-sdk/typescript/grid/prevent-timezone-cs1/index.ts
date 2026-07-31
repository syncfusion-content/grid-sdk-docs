import { Grid } from '@syncfusion/ej2-grids';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { CheckBox, ChangeEventArgs as CheckBoxChangeEventArgs } from '@syncfusion/ej2-buttons';
import { DataManager, WebApiAdaptor, DataUtil } from '@syncfusion/ej2-data';

let hostUrl: string = 'https://services.syncfusion.com/js/production/api/orders';
let selectedTimezone: number = -12;
let timeZones: { value: number, text: string }[] = [
    { value: -12, text: "-12:00 UTC" }, { value: -11, text: "-11:00 UTC" },
    { value: -10, text: "-10:00 UTC" }, { value: -9, text: "-09:00 UTC" },
    { value: -8, text: "-08:00 UTC" }, { value: -7, text: "-07:00 UTC" },
    { value: -6, text: "-06:00 UTC" }, { value: -5, text: "-05:00 UTC" },
    { value: -4, text: "-04:00 UTC" }, { value: -3, text: "-03:00 UTC" },
    { value: -2, text: "-02:00 UTC" }, { value: -1, text: "-01:00 UTC" },
    { value: 0, text: "+00:00 UTC" }, { value: 1, text: "+01:00 UTC" },
    { value: 2, text: "+02:00 UTC" }, { value: 3, text: "+03:00 UTC" },
    { value: 4, text: "+04:00 UTC" }, { value: 5, text: "+05:00 UTC" },
    { value: 5.5, text: "+05:30 UTC" }, { value: 6, text: "+06:00 UTC" },
    { value: 7, text: "+07:00 UTC" }, { value: 8, text: "+08:00 UTC" },
    { value: 9, text: "+09:00 UTC" }, { value: 10, text: "+10:00 UTC" },
    { value: 11, text: "+11:00 UTC" }, { value: 12, text: "+12:00 UTC" },
    { value: 13, text: "+13:00 UTC" }, { value: 14, text: "+14:00 UTC" }
];

let dropdown = new DropDownList({
    dataSource: timeZones,
    fields: { text: 'text', value: 'value' },
    index: 0, 
    width: 150,
    change: onTimezoneChange
});
dropdown.appendTo('#timezone');
dropdown.value = selectedTimezone;

let checkbox = new CheckBox({
    label: "Prevent Timezone Conversion",
    change: onCheckboxChange
});
checkbox.appendTo('#timezoneCheckbox');

function onTimezoneChange(event: ChangeEventArgs): void {
    selectedTimezone = Number(event.value);
    DataUtil.serverTimezoneOffset = checkbox.checked ? 0 : selectedTimezone;
    grid.setProperties({ dataSource: new DataManager({
        url: hostUrl,
        adaptor: new WebApiAdaptor(),
        crossDomain: true
    }) });
    grid.refresh();
}

function onCheckboxChange(event: CheckBoxChangeEventArgs): void {
    DataUtil.serverTimezoneOffset = checkbox.checked ? 0 : selectedTimezone;
    grid.setProperties({ dataSource: new DataManager({
        url: hostUrl,
        adaptor: new WebApiAdaptor(),
        crossDomain: true
    }) });
    grid.refresh();
}

let grid = new Grid({
    dataSource: new DataManager({
        url: hostUrl,
        adaptor: new WebApiAdaptor(),
        crossDomain: true
    }),
    height: 315,
    load: function () {
        DataUtil.serverTimezoneOffset = checkbox.checked ? 0 : selectedTimezone;
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140 }
    ]
});
grid.appendTo('#Grid');
