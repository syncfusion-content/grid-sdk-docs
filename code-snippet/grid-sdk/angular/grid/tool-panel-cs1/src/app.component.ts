import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridModule, FilterService, ReorderService, ColumnChooserService, SideBarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule],
    providers: [FilterService, ReorderService, ColumnChooserService, SideBarService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='320px' [allowFiltering]='true' [allowReordering]='true'
                    [enableToolPanel]='true' [toolPanelSettings]='toolPanelSettings' [columnChooserSettings]='columnChooserSettings'>
                <e-columns>
                    <e-column field='CustomerID' headerText='Customer ID' width='110'></e-column>
                    <e-column field='CompanyName' headerText='Company Name' width='140'></e-column>
                    <e-column field='ContactName' headerText='Contact Name' width='140'></e-column>
                    <e-column field='City' headerText='City' width='140'></e-column>
                    <e-column field='Orders' headerText='Orders' width='140' textAlign="Right"></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    public toolPanelSettings?: object;
    public columnChooserSettings?: object;

    ngOnInit(): void {
        this.data = data;
        this.toolPanelSettings = {
            position: 'Right',
            isOpen: true,
            defaultToolPanel: 'filters',
            toolPanels: [
                { id: 'columns', type: 'Columns', headerText: 'Columns' },
                { id: 'filters', type: 'Filters', headerText: 'Filters' }
            ]
        };
        this.columnChooserSettings = { allowReordering: true };
    }
}
