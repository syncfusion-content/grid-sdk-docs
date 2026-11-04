import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridModule, FindService, PageService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule ],
    providers: [FindService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [findSettings]='findSettings' height='272px' [toolbar]='toolbarOptions' allowPaging='true' [pageSettings]='pageSettings'>
                <e-columns>
                    <e-column field='TicketID' headerText='Ticket ID' textAlign='Right' width=90></e-column>
                    <e-column field='Customer' headerText='Customer' textAlign='Left' width=120></e-column>
                    <e-column field='Subject' headerText='Subject' textAlign='Left' width=200></e-column>
                    <e-column field='Status' headerText='Status' textAlign='Left' width=100></e-column>
                    <e-column field='Priority' headerText='Priority' textAlign='Left' width=90></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public findSettings?: object;
    public toolbarOptions?: ToolbarItems[];
    public pageSettings?: object;

    ngOnInit(): void {
        this.data = data;
        this.findSettings = { caseSensitive: true, currentPageOnly: true };
        this.toolbarOptions = ['Find'];
        this.pageSettings = { pageSize: 8 };
    }
}
