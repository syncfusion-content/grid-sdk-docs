var hostUrl = 'https://services.syncfusion.com/js/production/api/orders';
var selectedTimezone = -12;
var timeZones = [
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

var dropdown = new ej.dropdowns.DropDownList({
  dataSource: timeZones,
  fields: { text: 'text', value: 'value' },
  index: 0, 
  width: 150,
  change: onTimezoneChange
});
dropdown.appendTo('#timezone');
dropdown.value = selectedTimezone;

var checkbox = new ej.buttons.CheckBox({
  label: "Prevent Timezone Conversion",
  change: onCheckboxChange
});
checkbox.appendTo('#timezoneCheckbox');

function onTimezoneChange(event) {
  selectedTimezone = Number(event.value);
  ej.data.DataUtil.serverTimezoneOffset = checkbox.checked ? 0 : selectedTimezone
  grid.setProperties({
    dataSource: new ej.data.DataManager({
      url: hostUrl,
      adaptor: new ej.data.WebApiAdaptor(),
      crossDomain: true
    })
  });
  grid.refresh();
}

function onCheckboxChange(event) {
  ej.data.DataUtil.serverTimezoneOffset = checkbox.checked ? 0 : selectedTimezone;
  grid.setProperties({
    dataSource: new ej.data.DataManager({
      url: hostUrl,
      adaptor: new ej.data.WebApiAdaptor(),
      crossDomain: true
    })
  });
  grid.refresh();
}

var grid = new ej.grids.Grid({
  dataSource: new ej.data.DataManager({
    url: hostUrl,
    adaptor: new ej.data.WebApiAdaptor(),
    crossDomain: true
  }),
  height: 315,
  load: function () {
    ej.data.DataUtil.serverTimezoneOffset = checkbox.checked ? 0 : selectedTimezone;
  },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C', width: 120 },
    { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140 }
  ]
});
grid.appendTo('#Grid');