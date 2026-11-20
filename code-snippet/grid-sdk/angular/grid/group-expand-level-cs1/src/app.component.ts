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
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='120'></e-column>
            <e-column field='CustomerName' headerText='Customer Name' width='160'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='140'></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width='140'></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' width='120'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupSettings?: GroupSettingsModel = { columns: ['ShipCountry', 'ShipCity'], defaultExpanded: 1 };

    ngOnInit(): void {
        this.data = data;
    }
}
