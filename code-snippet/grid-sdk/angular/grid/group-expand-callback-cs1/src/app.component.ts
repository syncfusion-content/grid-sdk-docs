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
            <e-column field='ProductID' headerText='Product ID' textAlign='Right' width='120'></e-column>
            <e-column field='ProductName' headerText='Product Name' width='150'></e-column>
            <e-column field='Category' headerText='Category' width='140'></e-column>
            <e-column field='Region' headerText='Region' width='130'></e-column>
            <e-column field='UnitPrice' headerText='Unit Price' textAlign='Right' width='120'></e-column>
            <e-column field='UnitsInStock' headerText='Units In Stock' textAlign='Right' width='140'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupSettings?: GroupSettingsModel = { columns: ['Category', 'Region'], isGroupOpenByDefault: (args: any) => args.level === 1 && args.key === 'Beverages' };

    ngOnInit(): void {
        this.data = data;
    }
}
