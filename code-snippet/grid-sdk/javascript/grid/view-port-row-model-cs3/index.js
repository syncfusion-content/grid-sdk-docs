ej.grids.Grid.Inject(ej.grids.DomVirtualization, ej.grids.Sort, ej.grids.Filter, ej.grids.Page, ej.grids.InfiniteScroll);

var pageSize = 50;

function buildPredicate(item) {
    if (!item.isComplex) {
        return new ej.data.Predicate(item.field, item.operator, item.value, item.ignoreCase, item.ignoreAccent);
    }
    var result = null;
    for (var sub of item.predicates || []) {
        var p = buildPredicate(sub);
        result = result === null ? p : (item.condition || 'and').toLowerCase() === 'or' ? result.or(p) : result.and(p);
    }
    return result;
}

// Simulates a server: applies filter, sort, and paging on the local dataset
// and returns only the rows requested by the viewport.
function processRequest(state) {
    var request = state;
    var manager = new ej.data.DataManager(chargingStationData);
    var requestType = request.action && request.action.requestType;
    if (request.dataSource && ['filterchoicerequest', 'filterSearchBegin', 'stringfilterrequest'].indexOf(requestType) !== -1) {
        if (request.action.query) {
            manager.executeQuery(request.action.query).then(function (e) {
                request.dataSource(e.result);
            });
        } else {
            var field = request.action.field;
            var seenValues = {};
            var choices = [];
            chargingStationData.forEach(function (item) {
                var value = item[field];
                var key = value instanceof Date ? 'date:' + value.getTime() : typeof value + ':' + value;
                if (!seenValues[key]) {
                    seenValues[key] = true;
                    var choice = {};
                    choice[field] = value;
                    choices.push(choice);
                }
            });
            request.dataSource(choices);
        }
        return;
    }
    var query = new ej.data.Query();
    if (request.where && request.where.length) {
        query.where(buildPredicate(request.where[0]));
    }
    if (request.sorted && request.sorted.length) {
        request.sorted.forEach(function (s) { query.sortBy(s.name, s.direction); });
    }
    var skip = request.skip || 0;
    var take = request.take || pageSize;
    query.page(Math.floor(skip / take) + 1, take).requiresCount();
    manager.executeQuery(query).then(function (e) {
        grid.dataSource = { result: e.result, count: e.count };
    });
}

let grid = new ej.grids.Grid({
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
