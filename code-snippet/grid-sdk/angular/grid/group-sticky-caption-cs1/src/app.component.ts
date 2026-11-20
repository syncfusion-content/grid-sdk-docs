import { Component, OnInit } from '@angular/core';
import { GridModule, GroupService, GroupSettingsModel } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
    imports: [GridModule],
    providers: [GroupService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupSettings' height='400'>
        <e-columns>
            <e-column field='accountId' headerText='Account ID' width='140'></e-column>
            <e-column field='fullName' headerText='Full Name' width='150'></e-column>
            <e-column field='state' headerText='State' width='130'></e-column>
            <e-column field='portfolioType' headerText='Portfolio Type' width='140'></e-column>
            <e-column field='balanceUsd' headerText='Balance (USD)' textAlign='Right' width='140'></e-column>
            <e-column field='ytdReturnPct' headerText='YTD Return %' textAlign='Right' width='130'></e-column>
            <e-column field='riskLevel' headerText='Risk Level' width='120'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupSettings?: GroupSettingsModel = { columns: ['state', 'portfolioType'], defaultExpanded: 1, enableSticky: true };

    ngOnInit(): void {
        this.data = data;
    }
}
