import { ColumnDirective, ColumnsDirective, DomVirtualization, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { taskData, taskDetails } from './datasource';

function App() {
    const setRowHeight = (row: { data: taskDetails }): number => {
        if (row.data.priority === 'Critical') {
            return 60;
        } else if (row.data.priority === 'High') {
            return 50;
        }
        return 36;
    };

    return (
        <GridComponent dataSource={taskData} enableDomVirtualization={true}  setRowHeight={setRowHeight}>
            <ColumnsDirective>
                <ColumnDirective field='issueId' headerText='Issue ID' width='130' textAlign='Left' />
                <ColumnDirective field='title' headerText='Title' width='260' textAlign='Left' />
                <ColumnDirective field='priority' headerText='Priority' width='100' textAlign='Center' />
                <ColumnDirective field='status' headerText='Status' width='110' textAlign='Center' />
                <ColumnDirective field='reporter' headerText='Reported By' width='150' textAlign='Left' />
            </ColumnsDirective>
            <Inject services={[DomVirtualization]} />
        </GridComponent>
    );
}

export default App;
