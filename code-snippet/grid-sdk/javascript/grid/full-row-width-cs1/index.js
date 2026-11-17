function isFullWidthStatus(status) {
    if (!status) {
        return false;
    }
    const normalizedStatus = status.trim().toLowerCase().replace(/[-_]/g, ' ');
    return normalizedStatus === 'not available' || normalizedStatus === 'leave' ||
        normalizedStatus === 'on leave' || normalizedStatus === 'resigned';
}

function doctorTemplate(data) {
    return '<div class="doctor-name">' + data.Name + '</div>' +
        '<div class="doctor-designation">' + data.Designation + '</div>' +
        (isFullWidthStatus(data.Status) ? '<div>' + data.Status + '</div>' : '');
}

function queryCellInfo(args) {
    const data = args.data;
    if (args.column.field === 'Name' && isFullWidthStatus(data.Status)) {
        args.colSpan = 12;
        args.cell.classList.add('full-width-row');
    }
}

var grid = new ej.grids.Grid({
    dataSource: shiftPlanData,
    gridLines: 'Both',
    allowTextWrap: true,
    textWrapSettings: { wrapMode: 'Content' },
    height: 315,
    width: 'auto',
    queryCellInfo: queryCellInfo,
    columns: [
        { field: 'Name', headerText: 'Doctor Name', width: 170, textAlign: 'Center', template: doctorTemplate },
        { field: 'Time9AM', headerText: '9:00 AM', width: 120, textAlign: 'Center' },
        { field: 'Time10AM', headerText: '10:00 AM', width: 120, textAlign: 'Center' },
        { field: 'Time11AM', headerText: '11:00 AM', width: 120, textAlign: 'Center' },
        { field: 'Time12PM', headerText: '12:00 PM', width: 120, textAlign: 'Center' },
        { field: 'Time1PM', headerText: '1:00 PM', width: 120, textAlign: 'Center' },
        { field: 'Time2PM', headerText: '2:00 PM', width: 120, textAlign: 'Center' },
        { field: 'Time3PM', headerText: '3:00 PM', width: 120, textAlign: 'Center' },
        { field: 'Time4PM', headerText: '4:00 PM', width: 120, textAlign: 'Center' },
        { field: 'Time5PM', headerText: '5:00 PM', width: 120, textAlign: 'Center' },
        { field: 'Time6PM', headerText: '6:00 PM', width: 120, textAlign: 'Center' },
        { field: 'Time7PM', headerText: '7:00 PM', width: 120, textAlign: 'Center' }
    ]
});

grid.appendTo('#Grid');
