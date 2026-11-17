import { ColumnDirective, ColumnsDirective, GridComponent, Filter, Page, Sort, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { tasksData } from './datasource';

function App() {
    let grid: GridComponent | null;
    const filterSettings: Object = { type: 'Excel' };
    const pageSettings: Object = { pageSize: 8, pageCount: 4 };

    const updateOneCell = (): void => {
        const tasks = tasksData as { TaskNumber: number }[];
        grid!.setCellValue(tasks[2].TaskNumber, 'Progress', Math.random());
        grid!.renderTemplates();
    };

    const updateMultipleCells = async (): Promise<void> => {
        const tasks = tasksData as { TaskNumber: number }[];
        const updates = [0, 1, 3].map((index) => ({
            key: tasks[index].TaskNumber,
            field: 'Progress',
            value: Math.random()
        }));
        for (const update of updates) {
            await grid!.setCellValueAsync(update.key, update.field, update.value, 0);
            grid!.renderTemplates();
        }
    };

    const progressTemplate = (props: any): JSX.Element => {
        const progress = props.Progress == null ? 0 : props.Progress;
        let cls = 'progress-very-low';
        if (progress >= 0.9) cls = 'progress-excellent';
        else if (progress >= 0.75) cls = 'progress-high';
        else if (progress >= 0.5) cls = 'progress-medium';
        else if (progress >= 0.25) cls = 'progress-low';
        return <div className={`progress-cell ${cls}`}>{(progress * 100).toFixed(0)}%</div>;
    };

    return (<div>
        <div style={{ margin: '10px' }}>
            <ButtonComponent cssClass='e-outline' style={{ marginRight: '10px' }} onClick={updateOneCell}>Update One Cell</ButtonComponent>
            <ButtonComponent cssClass='e-outline' onClick={updateMultipleCells}>Update Multiple Cells</ButtonComponent>
        </div>
        <GridComponent ref={g => grid = g} dataSource={tasksData} allowSorting={true} allowFiltering={true}
            filterSettings={filterSettings} allowPaging={true} pageSettings={pageSettings}>
            <ColumnsDirective>
                <ColumnDirective field='TaskNumber' headerText='Task ID' textAlign='Right' width={100} isPrimaryKey={true} />
                <ColumnDirective field='TaskName' headerText='Title' width={130} clipMode='EllipsisWithTooltip' />
                <ColumnDirective field='AssignedTo' headerText='Assignee' width={110} clipMode='EllipsisWithTooltip' />
                <ColumnDirective field='Priority' headerText='Priority' width={100} />
                <ColumnDirective field='Progress' headerText='Progress' textAlign='Right' template={progressTemplate} format='P' width={110} />
                <ColumnDirective field='Status' headerText='State' width={110} />
                <ColumnDirective field='Department' headerText='Department' width={130} clipMode='EllipsisWithTooltip' />
                <ColumnDirective field='AssignedDate' headerText='Assigned Date' width={130} type='date' format='yMd' textAlign='Right' />
                <ColumnDirective field='Deadline' headerText='Deadline' width={120} type='date' format='yMd' textAlign='Right' />
            </ColumnsDirective>
            <Inject services={[Sort, Filter, Page]} />
        </GridComponent>
    </div>);
}
export default App;
