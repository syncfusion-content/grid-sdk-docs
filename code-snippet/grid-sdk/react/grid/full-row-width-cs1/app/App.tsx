import { ColumnDirective, ColumnsDirective, GridComponent, QueryCellInfoEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { shiftPlanData, ShiftPlan } from './datasource';

function isFullWidthStatus(status?: string): boolean {
    if (!status) {
        return false;
    }
    const normalizedStatus = status.trim().toLowerCase().replace(/[-_]/g, ' ');
    return normalizedStatus === 'not available' || normalizedStatus === 'leave' ||
        normalizedStatus === 'on leave' || normalizedStatus === 'resigned';
}

function App() {
    const doctorAccessor = (field: string, data: ShiftPlan) => {
        const status = isFullWidthStatus(data.Status) ? `<div>${data.Status}</div>` : '';
        return `<div class="doctor-name">${data.Name}</div><div class="doctor-designation">${data.Designation}</div>${status}`;
    };

    const queryCellInfo = (args: QueryCellInfoEventArgs) => {
        const data = args.data as { Status: string };
        if (args.column.field === 'Name' && isFullWidthStatus(data.Status)) {
            args.colSpan = 12;
            args.cell.classList.add('full-width-row');
        }
    };

    return (
        <GridComponent dataSource={shiftPlanData} gridLines='Both' allowTextWrap={true} textWrapSettings={{ wrapMode: 'Content' }}
            height={315} queryCellInfo={queryCellInfo}>
            <ColumnsDirective>
                <ColumnDirective field='Name' headerText='Doctor Name' width='170' textAlign='Center' valueAccessor={doctorAccessor} disableHtmlEncode={false} />
                <ColumnDirective field='Time9AM' headerText='9:00 AM' width='120' textAlign='Center' />
                <ColumnDirective field='Time10AM' headerText='10:00 AM' width='120' textAlign='Center' />
                <ColumnDirective field='Time11AM' headerText='11:00 AM' width='120' textAlign='Center' />
                <ColumnDirective field='Time12PM' headerText='12:00 PM' width='120' textAlign='Center' />
                <ColumnDirective field='Time1PM' headerText='1:00 PM' width='120' textAlign='Center' />
                <ColumnDirective field='Time2PM' headerText='2:00 PM' width='120' textAlign='Center' />
                <ColumnDirective field='Time3PM' headerText='3:00 PM' width='120' textAlign='Center' />
                <ColumnDirective field='Time4PM' headerText='4:00 PM' width='120' textAlign='Center' />
                <ColumnDirective field='Time5PM' headerText='5:00 PM' width='120' textAlign='Center' />
                <ColumnDirective field='Time6PM' headerText='6:00 PM' width='120' textAlign='Center' />
                <ColumnDirective field='Time7PM' headerText='7:00 PM' width='120' textAlign='Center' />
            </ColumnsDirective>
        </GridComponent>
    );
}

export default App;
