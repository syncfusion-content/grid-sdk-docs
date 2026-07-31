
import { TreeGrid, Page, Freeze } from '@syncfusion/ej2-treegrid';
import { columnSpanData } from './datasource.ts';

TreeGrid.Inject(Page, Freeze);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: columnSpanData,
    childMapping: 'children',
    height: 315,
    treeColumnIndex: 0,
    enableColumnSpan: true,
    rowHeight: 50,
    gridLines: 'Both',
    clipMode: 'EllipsisWithTooltip',
    enableHover: false,
    allowSelection: false,
    allowPaging: true,
    pageSettings: { pageSize: 18, pageSizeMode: 'All' },
    columns: [
        { field: 'activityName', headerText: 'Phase Name', width: 250, freeze: 'Left' },
        {
            headerText: 'Schedule', textAlign: 'Center', columns: [
                { field: 'startDate', headerText: 'Start Date', type: 'date', format: 'MM/dd/yyyy', width: 140, textAlign: 'Center' },
                { field: 'endDate', headerText: 'End Date', type: 'date', format: 'MM/dd/yyyy', width: 140, textAlign: 'Center' },
            ]
        },
        {
            headerText: 'Work Status', textAlign: 'Center', columns: [
                { field: 'status', headerText: 'Status', width: 180, textAlign: 'Center' },
            ]
        },
        {
            headerText: 'Compliance', textAlign: 'Center', columns: [
                { field: 'permitStatus', headerText: 'Permit Status', width: 160, textAlign: 'Center' },
                { field: 'inspectionDate', headerText: 'Inspection Date', width: 180, type: 'date', format: 'MM/dd/yyyy', textAlign: 'Center' },
                { field: 'inspectionStatus', headerText: 'Inspection Status', width: 180, textAlign: 'Center' },
                { field: 'punchListStatus', headerText: 'Punch List Status', width: 180, textAlign: 'Center' },
            ]
        },
        {
            headerText: 'Personnel', textAlign: 'Center', columns: [
                {
                    field: 'supervisor',
                    headerText: 'Supervisor',
                    width: 180,
                },
                { field: 'team', headerText: 'Crew', width: 200 },
            ]
        },
        {
            headerText: 'Materials', textAlign: 'Center', columns: [
                { field: 'materialUsed', headerText: 'Materials Used', width: 180, textAlign: 'Center' },
                { field: 'materialCost', headerText: 'Material Cost', width: 140, format: 'C2', textAlign: 'Right', enableColumnSpan: false },
            ]
        },
        {
            headerText: 'Cost Summary', textAlign: 'Center', columns: [
                { field: 'totalBudget', headerText: 'Planned Budget', width: 140, format: 'C2', textAlign: 'Center', enableColumnSpan: false },
                { field: 'paidToDate', headerText: 'Actual Spend', width: 140, format: 'C2', textAlign: 'Center', enableColumnSpan: false },
            ]
        },
    ]
});

treeGridObj.appendTo('#TreeGrid');



