ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Filter);

var customRanges = [
    {
        label: 'Yesterday',
        start: new Date(new Date().setDate(new Date().getDate() - 1)),
        end: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    {
        label: 'Today',
        start: new Date(),
        end: new Date()
    },
    {
        label: 'Last 5 Days',
        start: new Date(new Date().setDate(new Date().getDate() - 4)),
        end: new Date()
    },
    {
        label: 'Next 5 Days',
        start: new Date(),
        end: new Date(new Date().setDate(new Date().getDate() + 4))
    }
];

var enablePresets = false;
var enableCustomPresets = false;
var presetMode = 'Default';

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowFiltering: true,
    filterSettings: {
        type: 'Menu'
    },
    columns: [
        {
            field: 'OrderID',
            headerText: 'Order ID',
            width: 120,
            textAlign: 'Right'
        },
        {
            field: 'CustomerID',
            headerText: 'Customer ID',
            width: 150
        },
        {
            field: 'OrderDate',
            headerText: 'Order Date',
            width: 150,
            type: 'date',
            format: 'yMd',
            filter: {
                dateRanges: {
                    enablePresets: enablePresets,
                    presetMode: presetMode,
                    customPresetRanges: enableCustomPresets ? customRanges : []
                }
            }
        },
        {
            field: 'Freight',
            headerText: 'Freight',
            width: 120,
            format: 'C2',
            textAlign: 'Right'
        },
        {
            field: 'ShipCountry',
            headerText: 'Ship Country',
            width: 150
        }
    ]
});

grid.appendTo('#Grid');

new ej.buttons.CheckBox({
    label: 'Enable Presets',
    checked: false,
    change: function (args) {
        enablePresets = args.checked;
        updateDateRangeSettings();
    }
}).appendTo('#enablePreset');

new ej.buttons.CheckBox({
    label: 'Enable Custom Presets',
    checked: false,
    change: function (args) {
        enableCustomPresets = args.checked;
        updateDateRangeSettings();
    }
}).appendTo('#customPreset');

new ej.dropdowns.DropDownList({
    dataSource: ['Default', 'Custom', 'Both'],
    value: 'Default',
    width: '180px',
    placeholder: 'Preset Mode',
    change: function (args) {
        presetMode = args.value;
        updateDateRangeSettings();
    }
}).appendTo('#presetMode');

function updateDateRangeSettings() {
    var column = grid.getColumnByField('OrderDate');

    column.filter = {
        dateRanges: {
            enablePresets: enablePresets,
            presetMode: presetMode,
            customPresetRanges: enableCustomPresets ? customRanges : []
        }
    };

    grid.refreshColumns();
}
