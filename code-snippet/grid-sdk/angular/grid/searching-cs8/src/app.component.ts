import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DropDownListModule, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { Column, GridComponent, GridModule, SearchSettingsModel, SearchService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule, DropDownListModule ],
    providers: [SearchService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template: `<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <label for="searchMode">Search Mode</label>
                <ejs-dropdownlist id="searchMode" [dataSource]="searchModes" [fields]="ddlFields" value="OnEnter" (change)="searchModeChange($event)" width="140px"></ejs-dropdownlist>
               </div>
               <ejs-grid #grid [dataSource]='data' [toolbar]='toolbarOptions' [searchSettings]='searchSettings' height='273' width='100%'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public searchModes = [
        { text: 'OnEnter', value: 'OnEnter' },
        { text: 'Immediate', value: 'Immediate' }
    ];
    public ddlFields = { text: 'text', value: 'value' };
    public searchSettings: SearchSettingsModel = { mode: 'OnEnter' };
    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['Search'];
    }
    searchModeChange(args: ChangeEventArgs) {
        const mode = args.value as 'OnEnter' | 'Immediate';
        this.searchSettings = mode === 'Immediate' ? { mode, immediateModeDelay: 1500 } : { mode };
    }
}
