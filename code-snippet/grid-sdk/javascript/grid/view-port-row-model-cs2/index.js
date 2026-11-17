ej.grids.Grid.Inject(ej.grids.DomVirtualization, ej.grids.Sort, ej.grids.Filter, ej.grids.Toolbar, ej.grids.VirtualScroll);

let dataManager = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new ej.data.UrlAdaptor()
});
let query = new ej.data.Query().addParams('dataCount', '100000');
function statusTemplate(props) {
    var icons = { Active: '●', Inactive: '○', 'On Leave': '⊘', Retired: '✕' };
    var cls = (props.Status || 'Active').replace(' ', '');
    return '<div class="vp-badge vp-status-' + cls + '"><span>' + (icons[props.Status] || icons.Active) + '</span><span>' + props.Status + '</span></div>';
}
function trustTemplate(props) {
    return '<div class="vp-badge vp-trust-' + props.Trustworthiness + '">' + props.Trustworthiness + '</div>';
}
function softTemplate(props) {
    var v = Math.round(Math.min(100, Math.max(0, Number(props.Software == null ? 0 : props.Software))));
    if (props.Trustworthiness === 'Perfect' && v < 70) v = 70;
    else if (props.Trustworthiness === 'Sufficient') v = Math.min(69, Math.max(40, v));
    else if (props.Trustworthiness === 'Insufficient' && v > 39) v = 39;
    var color = v < 40 ? '#dc2626' : v < 70 ? '#f59e0b' : '#059669';
    return '<div class="vp-progress"><div class="vp-progress-bar"><div style="width:' + v + '%;background-color:' + color + '"></div></div><span>' + v + '%</span></div>';
}
function ratingTemplate(props) {
    var r = Math.min(5, Math.max(0, Number(props.Rating == null ? 0 : props.Rating)));
    if (props.Trustworthiness === 'Perfect') r = Math.min(5, Math.max(4, r));
    else if (props.Trustworthiness === 'Sufficient') r = 3;
    else if (props.Trustworthiness === 'Insufficient') r = Math.min(2, Math.max(1, r));
    var color = r >= 4 ? '#059669' : r >= 3 ? '#f59e0b' : '#dc2626';
    return '<span style="color:' + color + ';font-weight:600">★ ' + r.toFixed(1) + '</span>';
}
function salaryTemplate(props) {
    return '<span class="vp-salary">' + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.CurrentSalary || 0) + '</span>';
}
function ellipsisTemplate(field) {
    return function (props) { return '<span class="vp-ellipsis">' + props[field] + '</span>'; };
}

let grid = new ej.grids.Grid({
    dataSource: dataManager,
    query: query,
    height: 450,
    clipMode: 'EllipsisWithTooltip',
    enableDomVirtualization: true,
    domVirtualizationSettings: { rowBuffer: 6, autoRowHeight: true, virtualDomType: 'Row' },
    pageSettings: { pageSize: 50 },
    enableVirtualMaskRow: true,
    enableVirtualization: true,
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'CheckBox' },
    toolbar: ['Search'],
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', width: 110, textAlign: 'Right', clipMode: 'EllipsisWithTooltip', isPrimaryKey: true, type: 'number' },
        { field: 'Employees', headerText: 'Employee Name', width: 160, textAlign: 'Left', clipMode: 'EllipsisWithTooltip', template: ellipsisTemplate('Employees') },
        { field: 'Designation', headerText: 'Designation', width: 140, textAlign: 'Left', clipMode: 'EllipsisWithTooltip', template: ellipsisTemplate('Designation') },
        { field: 'Mail', headerText: 'Email', width: 190, textAlign: 'Left', clipMode: 'EllipsisWithTooltip' },
        { field: 'Address', headerText: 'Address', width: 190, textAlign: 'Left', clipMode: 'EllipsisWithTooltip' },
        { field: 'Location', headerText: 'Location', width: 130, textAlign: 'Center', clipMode: 'EllipsisWithTooltip', template: ellipsisTemplate('Location') },
        { field: 'Status', headerText: 'Status', width: 120, textAlign: 'Center', clipMode: 'EllipsisWithTooltip', template: statusTemplate },
        { field: 'Trustworthiness', headerText: 'Trustworthiness', width: 140, textAlign: 'Center', clipMode: 'EllipsisWithTooltip', template: trustTemplate },
        { field: 'Software', headerText: 'Software Skills', width: 130, textAlign: 'Right', clipMode: 'EllipsisWithTooltip', type: 'number', template: softTemplate },
        { field: 'Rating', headerText: 'Performance Rating', width: 140, textAlign: 'Center', clipMode: 'EllipsisWithTooltip', type: 'number', template: ratingTemplate },
        { field: 'CurrentSalary', headerText: 'Current Salary', width: 140, textAlign: 'Right', clipMode: 'EllipsisWithTooltip', type: 'number', template: salaryTemplate }
    ]
});
grid.appendTo('#Grid');
