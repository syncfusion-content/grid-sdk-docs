import { Component, OnInit } from '@angular/core';
import { GridModule, InfiniteScrollService, InfiniteScrollSettingsModel, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
    imports: [ GridModule ],
    providers: [ InfiniteScrollService ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height=300 [enableInfiniteScrolling]='true' [pageSettings]='pageSettings' [infiniteScrollSettings]='infiniteScrollSettings'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=100></e-column>
                    <e-column field='Employees' headerText='Employee Name' width=120></e-column>
                    <e-column field='Designation' headerText='Designation' width=100></e-column>
                    <e-column field='Location' headerText='Location' width=100></e-column>
                    <e-column field='CurrentSalary' headerText='Salary' format='C2' textAlign='Right' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: DataManager;
    public pageSettings?: PageSettingsModel;
    public infiniteScrollSettings?: InfiniteScrollSettingsModel;
    ngOnInit(): void {
        this.data = new DataManager({
            url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
            adaptor: new UrlAdaptor()
        });
        this.pageSettings = { pageSize: 50 };
        this.infiniteScrollSettings = { enableCountLessMode: true };
    }
}
