import { Component, OnInit } from '@angular/core';
import { GridModule, DomVirtualizationService } from '@syncfusion/ej2-angular-grids';
import { issueData, IssueData } from './datasource';

@Component({
    imports: [GridModule],
    providers: [DomVirtualizationService],
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-grid [dataSource]="data" [enableDomVirtualization]="true" height="400px" [setRowHeight]="setRowHeight">
            <e-columns>
                <e-column field="issueId" headerText="Issue ID" width="130" textAlign="Left"></e-column>
                <e-column field="title" headerText="Title" width="260" textAlign="Left"></e-column>
                <e-column field="priority" headerText="Priority" width="100" textAlign="Center"></e-column>
                <e-column field="status" headerText="Status" width="110" textAlign="Center"></e-column>
                <e-column field="reporter" headerText="Reported By" width="150" textAlign="Left"></e-column>
            </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: IssueData[];

    public ngOnInit(): void {
        this.data = issueData;
    }

    public setRowHeight = (row: { data: IssueData }): number => {
        if (row.data.priority === 'Critical') {
            return 60;
        } else if (row.data.priority === 'High') {
            return 50;
        }
        return 36;
    };
}