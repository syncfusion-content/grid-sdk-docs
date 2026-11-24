import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridModule, ColumnChooserService, SideBarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule],
    providers: [ColumnChooserService, SideBarService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='320px' [enableToolPanel]='true' [toolPanelSettings]='toolPanelSettings'>
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

    ngOnInit(): void {
        this.data = data;
        this.toolPanelSettings = {
            position: 'Left',
            isOpen: true,
            defaultToolPanel: 'columns',
            toolPanels: [
                {
                    id: 'columns',
                    type: 'Columns',
                    headerText: 'Columns'
                },
                {
                    id: 'summary',
                    type: 'Custom',
                    headerText: 'Summary',
                    iconCss: 'e-icons e-description',
                    template: '#customPanelTemplate'
                }
            ]
        };
    }
}
