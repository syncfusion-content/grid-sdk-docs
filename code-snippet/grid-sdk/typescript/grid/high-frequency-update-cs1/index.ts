import { Grid, VirtualScroll } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { chargingStationData } from './datasource.ts';
Grid.Inject(VirtualScroll);

const previousRevenue: { [key: string]: number } = {};

let grid: Grid = new Grid({
    dataSource: chargingStationData,
    height: 480,
    enableVirtualization: true,
    columns: [
        { field: 'StationID', headerText: 'Station ID', isPrimaryKey: true, width: 120 },
        { field: 'City', headerText: 'Station Location', width: 160 },
        { field: 'ChargingSpeed', headerText: 'Charging Speed', width: 160 },
        { field: 'ActiveSessions', headerText: 'Active Slots', textAlign: 'Right', width: 130 },
        { field: 'AvailableSlots', headerText: 'Available Slots', textAlign: 'Right', width: 150 },
        { field: 'Revenue', headerText: 'Revenue', textAlign: 'Center', format: 'C2', width: 180 },
        { field: 'LastMaintenanceDate', headerText: 'Maintenance Date', textAlign: 'Right', type: 'date', format: 'dd/MM/yyyy', width: 140 }
    ],
    queryCellInfo: (args: any) => {
        if (args.column.field === 'Revenue') {
            const revenue = args.data.Revenue == null ? 0 : args.data.Revenue;
            const previousValue = previousRevenue[args.data.StationID];
            const previous = previousValue == null ? revenue : previousValue;
            const isUp = revenue - previous >= 0;
            const arrow = isUp ? 'M12 4l-8 8h6v8h4v-8h6z' : 'M12 20l8-8h-6V4h-4v8H4z';
            args.cell.innerHTML = '<div class="revenue-cell ' + (isUp ? 'above-0' : 'below-0') + '">' +
                '<span class="rowcell-left"><svg width="12" height="12" viewBox="0 0 24 24" fill="' + (isUp ? 'green' : 'red') + '">' +
                '<path d="' + arrow + '" /></svg>$' + revenue.toFixed(2) + '</span>' +
                '<span class="rowcell-right">Prev: $' + previous.toFixed(2) + '</span></div>';
        }
    }
});
grid.appendTo('#Grid');

new Button({ cssClass: 'e-outline' }, '#normalUpdate');
new Button({ cssClass: 'e-outline' }, '#asyncUpdate');

document.getElementById('normalUpdate').addEventListener('click', () => {
    const start = performance.now();
    const visibleStations: any[] = grid.getCurrentViewRecords();
    chargingStationData.forEach((station: any) => {
        previousRevenue[station.StationID] = station.Revenue;
        station.Revenue = station.Revenue + 10;
    });
    setTimeout(() => {
        visibleStations.forEach((station: any) => {
            grid.setCellValue(station.StationID, 'Revenue', station.Revenue);
        });
        document.getElementById('syncTime').textContent = 'Sync Update took ' + (performance.now() - start).toFixed(2) + ' ms';
    });
});

document.getElementById('asyncUpdate').addEventListener('click', () => {
    const start = performance.now();
    const visibleStations: any[] = grid.getCurrentViewRecords();
    chargingStationData.forEach((station: any) => {
        previousRevenue[station.StationID] = station.Revenue;
        station.Revenue = station.Revenue + 20;
    });
    Promise.all(visibleStations.map((station: any) =>
        grid.setCellValueAsync(station.StationID, 'Revenue', station.Revenue, 0)
    )).then(() => {
        document.getElementById('asyncTime').textContent = 'Async Update took ' + (performance.now() - start).toFixed(2) + ' ms';
    });
});
