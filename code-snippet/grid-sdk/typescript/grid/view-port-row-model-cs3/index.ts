import { Grid, DomVirtualization, Sort, Filter, Page, InfiniteScroll } from '@syncfusion/ej2-grids';
import { DataManager, Query, Predicate } from '@syncfusion/ej2-data';
import { chargingStationData } from './datasource.ts';
Grid.Inject(DomVirtualization, Sort, Filter, Page, InfiniteScroll);

const pageSize = 50;

function buildPredicate(item: any): Predicate {
    if (!item.isComplex) {
        return new Predicate(item.field, item.operator, item.value, item.ignoreCase, item.ignoreAccent);
    }
    let result: Predicate = null;
    const subs = item.predicates || [];
    for (let i = 0; i < subs.length; i++) {
        const p = buildPredicate(subs[i]);
        result = result === null ? p : (item.condition || 'and').toLowerCase() === 'or' ? result.or(p) : result.and(p);
    }
    return result;
}

// Simulates a server: applies filter, sort, and paging on the local dataset
// and returns only the rows requested by the viewport.
function processRequest(request: any) {
    const manager = new DataManager(chargingStationData);
    const requestType = request.action && request.action.requestType;
    if (request.dataSource && ['filterchoicerequest', 'filterSearchBegin', 'stringfilterrequest'].indexOf(requestType) !== -1) {
        if (request.action.query) {
            manager.executeQuery(request.action.query).then((e: any) => {
                request.dataSource(e.result);
            });
        } else {
            const field = request.action.field;
            const seenValues: any = {};
            const choices: any[] = [];
            chargingStationData.forEach((item: any) => {
                const value = item[field];
                const key = value instanceof Date ? 'date:' + value.getTime() : typeof value + ':' + value;
                if (!seenValues[key]) {
                    seenValues[key] = true;
                    const choice: any = {};
                    choice[field] = value;
                    choices.push(choice);
                }
            });
            request.dataSource(choices);
        }
        return;
    }
    const query = new Query();
    if (request.where && request.where.length) {
        query.where(buildPredicate(request.where[0]));
    }
    if (request.sorted && request.sorted.length) {
        request.sorted.forEach((s: any) => query.sortBy(s.name, s.direction));
    }
    const skip = request.skip || 0;
    const take = request.take || pageSize;
    query.page(Math.floor(skip / take) + 1, take).requiresCount();
    manager.executeQuery(query).then((e: any) => {
        grid.dataSource = { result: e.result, count: e.count };
    });
}

let grid: Grid = new Grid({
    dataSource: { result: chargingStationData.slice(0, pageSize), count: chargingStationData.length },
    dataStateChange: processRequest,
    height: 400,
    enableInfiniteScrolling: true,
    domVirtualizationSettings: { rowBuffer: 5 },
    pageSettings: { pageSize: pageSize },
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'CheckBox' },
    columns: [
        { field: 'StationID', headerText: 'Station ID', width: 120, isPrimaryKey: true },
        { field: 'City', headerText: 'Station Location', width: 160 },
        { field: 'ChargingSpeed', headerText: 'Charging Speed', width: 160 },
        { field: 'ActiveSessions', headerText: 'Active Slots', textAlign: 'Right', width: 130 },
        { field: 'AvailableSlots', headerText: 'Available Slots', textAlign: 'Right', width: 150 },
        { field: 'LastMaintenanceDate', headerText: 'Maintenance Date', textAlign: 'Right', type: 'date', format: 'dd/MM/yyyy', width: 170, allowFiltering: false },
        { field: 'Revenue', headerText: 'Revenue', textAlign: 'Right', format: 'C2', width: 110 }
    ]
});
grid.appendTo('#Grid');
