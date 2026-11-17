ej.grids.Grid.Inject(ej.grids.VirtualScroll);

var previousRevenue = new Map();

function revenueTemplate(props) {
    var revenue = props.Revenue == null ? 0 : props.Revenue;
    var previousValue = previousRevenue.get(props.StationID);
    var previous = previousValue == null ? revenue : previousValue;
    var isUp = revenue - previous >= 0;
    return '<div class="revenue-cell ' + (isUp ? 'above-0' : 'below-0') + '">' +
        '<span class="rowcell-left">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="' + (isUp ? 'green' : 'red') + '">' +
        '<path d="' + (isUp ? 'M12 4l-8 8h6v8h4v-8h6z' : 'M12 20l8-8h-6V4h-4v8H4z') + '" /></svg>$' + revenue.toFixed(2) +
        '</span><span class="rowcell-right">Prev: $' + previous.toFixed(2) + '</span></div>';
}

let grid = new ej.grids.Grid({
    dataSource: chargingStationData,
    height: 480,
    enableVirtualization: true,
    columns: [
        { field: 'StationID', headerText: 'Station ID', isPrimaryKey: true, width: 120 },
        { field: 'City', headerText: 'Station Location', width: 160 },
        { field: 'ChargingSpeed', headerText: 'Charging Speed', width: 160 },
        { field: 'ActiveSessions', headerText: 'Active Slots', textAlign: 'Right', width: 130 },
        { field: 'AvailableSlots', headerText: 'Available Slots', textAlign: 'Right', width: 150 },
        { field: 'Revenue', headerText: 'Revenue', textAlign: 'Center', template: revenueTemplate, format: 'C2', width: 180 },
        { field: 'LastMaintenanceDate', headerText: 'Maintenance Date', textAlign: 'Right', type: 'date', format: 'dd/MM/yyyy', width: 140 }
    ]
});
grid.appendTo('#Grid');

new ej.buttons.Button({ cssClass: 'e-outline' }, '#normalUpdate');
new ej.buttons.Button({ cssClass: 'e-outline' }, '#asyncUpdate');

document.getElementById('normalUpdate').addEventListener('click', function () {
    var start = performance.now();
    var visibleStations = grid.getCurrentViewRecords();
    chargingStationData.forEach(function (station) {
        previousRevenue.set(station.StationID, station.Revenue);
        station.Revenue = station.Revenue + 10;
    });
    setTimeout(function () {
        visibleStations.forEach(function (station) {
            grid.setCellValue(station.StationID, 'Revenue', station.Revenue);
        });
        document.getElementById('syncTime').textContent = 'Sync Update took ' + (performance.now() - start).toFixed(2) + ' ms';
    });
});

document.getElementById('asyncUpdate').addEventListener('click', async function () {
    var start = performance.now();
    var visibleStations = grid.getCurrentViewRecords();
    chargingStationData.forEach(function (station) {
        previousRevenue.set(station.StationID, station.Revenue);
        station.Revenue = station.Revenue + 20;
    });
    await Promise.all(visibleStations.map(function (station) {
        return grid.setCellValueAsync(station.StationID, 'Revenue', station.Revenue, 0);
    }));
    document.getElementById('asyncTime').textContent = 'Async Update took ' + (performance.now() - start).toFixed(2) + ' ms';
});
