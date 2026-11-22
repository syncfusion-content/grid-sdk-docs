// Template function for Employee ID with icon
window.employeeIDDetail = function(e) {
    var container = document.createElement('div');
    container.className = 'emp-id-cell';
    container.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="8" cy="5" r="3" stroke="#5B9BD5" stroke-width="1.5" fill="none"/>' +
        '<path d="M2 14C2 11.24 4.69 9 8 9C11.31 9 14 11.24 14 14" stroke="#5B9BD5" stroke-width="1.5" stroke-linecap="round" fill="none"/>' +
        '</svg>' +
        '<span>' + e.EmployeeID + '</span>';
    return container.outerHTML;
};

// Template function for Employee Name with icon
window.employeeNameDetail = function(e) {
    var container = document.createElement('div');
    container.className = 'emp-name-cell';
    container.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="8" cy="5" r="3" stroke="#5B9BD5" stroke-width="1.5" fill="none"/>' +
        '<path d="M2 14C2 11.24 4.69 9 8 9C11.31 9 14 11.24 14 14" stroke="#5B9BD5" stroke-width="1.5" stroke-linecap="round" fill="none"/>' +
        '</svg>' +
        '<span>' + e.Employees + '</span>';
    return container.outerHTML;
};

// Template function for Designation with icon
window.designationDetail = function(e) {
    var container = document.createElement('div');
    container.className = 'designation-cell';
    container.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="2" y="6" width="12" height="8" rx="1" stroke="#5B9BD5" stroke-width="1.5" fill="none"/>' +
        '<path d="M5 6V4C5 3 5.9 2 7 2H9C10.1 2 11 3 11 4V6" stroke="#5B9BD5" stroke-width="1.5" stroke-linejoin="round" fill="none"/>' +
        '<path d="M2 10H14" stroke="#5B9BD5" stroke-width="1.5" stroke-linecap="round"/>' +
        '</svg>' +
        '<span>' + e.Designation + '</span>';
    return container.outerHTML;
};

// Template function for Location with icon
window.locationDetail = function(e) {
    var container = document.createElement('div');
    container.className = 'location-cell';
    container.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8 1C5.79 1 4 2.88 4 5.2C4 8.4 8 15 8 15C8 15 12 8.4 12 5.2C12 2.88 10.21 1 8 1Z" stroke="#5B9BD5" stroke-width="1.5" fill="none" stroke-linejoin="round"/>' +
        '<circle cx="8" cy="5" r="1.5" fill="#5B9BD5"/>' +
        '</svg>' +
        '<span>' + e.Location + '</span>';
    return container.outerHTML;
};

// Remote data service URL - fetches 100,000 employee records
var urlapi = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new ej.data.UrlAdaptor()
});

ej.grids.Grid.Inject(ej.grids.Selection, ej.grids.Sort, ej.grids.Filter, ej.grids.VirtualScroll, ej.grids.DomVirtualization);

var grid = new ej.grids.Grid({
    dataSource: urlapi,
    query: new ej.data.Query().addParams('dataCount', '100000'),
    allowSelection: true,
    allowFiltering: true,
    allowSorting: true,
    enableVirtualization: true,
    enableDomVirtualization: true,
    domVirtualizationSettings: { rowBuffer: 10 },
    pageSettings: { pageSize: 50 },
    filterSettings: { type: 'CheckBox' },
    height: 400,
    rowHeight: 50,
    clipMode: 'EllipsisWithTooltip',
    columns: [
        {
            field: 'EmployeeID', 
            visible: true, 
            headerText: 'Employee ID', 
            isPrimaryKey: true, 
            width: 150,
            template: '#employeeIDTemplate'
        },
        {
            field: 'Employees', 
            headerText: 'Employee Name', 
            width: 220,
            template: '#employeeNameTemplate'
        },
        {
            field: 'Designation', 
            headerText: 'Designation', 
            width: 180,
            template: '#designationTemplate'
        },
        {
            field: 'Mail', 
            headerText: 'Email', 
            width: 230
        },
        {
            field: 'Address', 
            headerText: 'Address', 
            width: 240
        },
        {
            field: 'Location', 
            width: 160, 
            headerText: 'Location',
            template: '#locationTemplate'
        }
    ]
});

grid.appendTo('#Grid');
