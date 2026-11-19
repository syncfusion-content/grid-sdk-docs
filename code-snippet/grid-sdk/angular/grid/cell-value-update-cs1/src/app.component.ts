import { NgClass } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FilterService, GridComponent, GridModule, PageService, SortService } from '@syncfusion/ej2-angular-grids';
import { tasksData } from './datasource';

@Component({
    imports: [GridModule, ButtonModule, NgClass],
    providers: [SortService, FilterService, PageService],
    standalone: true,
    selector: 'app-root',
    template: `<div style="margin: 10px">
                <button ejs-button cssClass="e-outline" style="margin-right: 10px" (click)="updateOneCell()">Update One Cell</button>
                <button ejs-button cssClass="e-outline" (click)="updateMultipleCells()">Update Multiple Cells</button>
               </div>
               <ejs-grid #grid [dataSource]='data' [allowSorting]='true' [allowFiltering]='true' [filterSettings]='filterSettings'
                [allowPaging]='true' [pageSettings]='pageSettings'>
                <e-columns>
                    <e-column field='TaskNumber' headerText='Task ID' textAlign='Right' width=100 isPrimaryKey='true'></e-column>
                    <e-column field='TaskName' headerText='Title' width=130 clipMode='EllipsisWithTooltip'></e-column>
                    <e-column field='AssignedTo' headerText='Assignee' width=110 clipMode='EllipsisWithTooltip'></e-column>
                    <e-column field='Priority' headerText='Priority' width=100></e-column>
                    <e-column field='Progress' headerText='Progress' textAlign='Right' format='P' width=110>
                        <ng-template #template let-data>
                            <div class="progress-cell" [ngClass]="progressClass(data.Progress)">{{ percent(data.Progress) }}%</div>
                        </ng-template>
                    </e-column>
                    <e-column field='Status' headerText='State' width=110></e-column>
                    <e-column field='Department' headerText='Department' width=130 clipMode='EllipsisWithTooltip'></e-column>
                    <e-column field='AssignedDate' headerText='Assigned Date' width=130 type='date' format='yMd' textAlign='Right'></e-column>
                    <e-column field='Deadline' headerText='Deadline' width=120 type='date' format='yMd' textAlign='Right'></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent {
    @ViewChild('grid') public grid?: GridComponent;
    public data: object[] = tasksData;
    public filterSettings: object = { type: 'Excel' };
    public pageSettings: object = { pageSize: 8, pageCount: 4 };

    public percent(progress: number | null): string {
        return ((progress == null ? 0 : progress) * 100).toFixed(0);
    }

    public progressClass(progress: number | null): string {
        const value = progress == null ? 0 : progress;
        if (value >= 0.9) { return 'progress-excellent'; }
        if (value >= 0.75) { return 'progress-high'; }
        if (value >= 0.5) { return 'progress-medium'; }
        if (value >= 0.25) { return 'progress-low'; }
        return 'progress-very-low';
    }

    public updateOneCell(): void {
        const tasks = this.data as { TaskNumber: number }[];
        this.grid!.setCellValue(tasks[2].TaskNumber, 'Progress', Math.random());
    }

    public async updateMultipleCells(): Promise<void> {
        const tasks = this.data as { TaskNumber: number }[];
        const updates = [0, 1, 3].map((index) => ({
            key: tasks[index].TaskNumber,
            field: 'Progress',
            value: Math.random()
        }));
        for (const update of updates) {
            await this.grid!.setCellValueAsync(update.key, update.field, update.value, 0);
        }
    }
}
