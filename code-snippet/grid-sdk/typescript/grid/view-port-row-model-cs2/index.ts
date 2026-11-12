import { Grid, DomVirtualization, Sort, Filter, Toolbar, VirtualScroll } from '@syncfusion/ej2-grids';
import { DataManager, UrlAdaptor, Query } from '@syncfusion/ej2-data';
Grid.Inject(DomVirtualization, Sort, Filter, Toolbar, VirtualScroll);

const dataManager: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new UrlAdaptor()
});
const query: Query = new Query().addParams('dataCount', '100000');

function vpCell(args: any) {
    const d = args.data;
    const field = args.column.field;
    if (field === 'EmployeeID') {
        args.cell.innerHTML = '<span>' + d.EmployeeID + '</span>';
    } else if (field === 'Employees' || field === 'Designation' || field === 'Location') {
        args.cell.innerHTML = '<span class="vp-ellipsis">' + d[field] + '</span>';
    } else if (field === 'Status') {
        const icons: any = { Active: '●', Inactive: '○', 'On Leave': '⊘', Retired: '✕' };
        const cls = (d.Status || 'Active').replace(' ', '');
        args.cell.innerHTML = '<div class="vp-badge vp-status-' + cls + '"><span>' + (icons[d.Status] || icons.Active) + '</span><span>' + d.Status + '</span></div>';
    } else if (field === 'Trustworthiness') {
        args.cell.innerHTML = '<div class="vp-badge vp-trust-' + d.Trustworthiness + '">' + d.Trustworthiness + '</div>';
    } else if (field === 'Software') {
        let v = Math.round(Math.min(100, Math.max(0, Number(d.Software == null ? 0 : d.Software))));
        if (d.Trustworthiness === 'Perfect' && v < 70) { v = 70; }
        else if (d.Trustworthiness === 'Sufficient') { v = Math.min(69, Math.max(40, v)); }
        else if (d.Trustworthiness === 'Insufficient' && v > 39) { v = 39; }
        const color = v < 40 ? '#dc2626' : v < 70 ? '#f59e0b' : '#059669';
        args.cell.innerHTML = '<div class="vp-progress"><div class="vp-progress-bar"><div style="width: ' + v + '%; background-color: ' + color + ';"></div></div><span>' + v + '%</span></div>';
    } else if (field === 'Rating') {
        let r = Math.min(5, Math.max(0, Number(d.Rating == null ? 0 : d.Rating)));
        if (d.Trustworthiness === 'Perfect') { r = Math.min(5, Math.max(4, r)); }
        else if (d.Trustworthiness === 'Sufficient') { r = 3; }
        else if (d.Trustworthiness === 'Insufficient') { r = Math.min(2, Math.max(1, r)); }
        const color = r >= 4 ? '#059669' : r >= 3 ? '#f59e0b' : '#dc2626';
        args.cell.innerHTML = '<span style="color: ' + color + '; font-weight: 600;">★ ' + r.toFixed(1) + '</span>';
    } else if (field === 'CurrentSalary') {
        args.cell.innerHTML = '<span class="vp-salary">' + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(d.CurrentSalary || 0) + '</span>';
    }
}

let grid: Grid = new Grid({
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
        { field: 'Employees', headerText: 'Employee Name', width: 160, textAlign: 'Left', clipMode: 'EllipsisWithTooltip' },
        { field: 'Designation', headerText: 'Designation', width: 140, textAlign: 'Left', clipMode: 'EllipsisWithTooltip' },
        { field: 'Mail', headerText: 'Email', width: 190, textAlign: 'Left', clipMode: 'EllipsisWithTooltip' },
        { field: 'Address', headerText: 'Address', width: 190, textAlign: 'Left', clipMode: 'EllipsisWithTooltip' },
        { field: 'Location', headerText: 'Location', width: 130, textAlign: 'Center', clipMode: 'EllipsisWithTooltip' },
        { field: 'Status', headerText: 'Status', width: 120, textAlign: 'Center', clipMode: 'EllipsisWithTooltip' },
        { field: 'Trustworthiness', headerText: 'Trustworthiness', width: 140, textAlign: 'Center', clipMode: 'EllipsisWithTooltip' },
        { field: 'Software', headerText: 'Software Skills', width: 130, textAlign: 'Right', clipMode: 'EllipsisWithTooltip', type: 'number' },
        { field: 'Rating', headerText: 'Performance Rating', width: 140, textAlign: 'Center', clipMode: 'EllipsisWithTooltip', type: 'number' },
        { field: 'CurrentSalary', headerText: 'Current Salary', width: 140, textAlign: 'Right', clipMode: 'EllipsisWithTooltip', type: 'number' }
    ],
    queryCellInfo: vpCell
});
grid.appendTo('#Grid');
