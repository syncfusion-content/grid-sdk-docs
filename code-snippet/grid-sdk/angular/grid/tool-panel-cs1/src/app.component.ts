import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridModule, FilterService, ReorderService, ColumnChooserService, SideBarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule],
    providers: [FilterService, ReorderService, ColumnChooserService, SideBarService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='320px' [enableToolPanel]='true' [toolPanelSettings]='toolPanelSettings' [allowFiltering]='true' [allowReordering]='true' [columnChooserSettings]='columnChooserSettings'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width='140'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width='140'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='140'></e-column>
                    <e-column field='Freight' headerText='Freight' width='140' textAlign='Right' format='C2'></e-column>
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
            defaultToolPanel: 'columns',
            toolPanels: [
                {
                    id: 'columns',
                    type: 'Columns',
                    headerText: 'Columns'
                },
                {
                    id: 'filters',
                    type: 'Filters',
                    headerText: 'Filters'
                }
            ]
        };
        this.columnChooserSettings = { allowReordering: true };
    }
}
