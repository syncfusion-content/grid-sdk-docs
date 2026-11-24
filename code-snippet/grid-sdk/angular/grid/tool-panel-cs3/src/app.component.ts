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
                    <e-column field='ProductID' headerText='Product ID' width='140' textAlign='Right'></e-column>
                    <e-column field='ProductName' headerText='Product Name' width='140'></e-column>
                    <e-column field='Category' headerText='Category' width='140'></e-column>
                    <e-column field='UnitPrice' headerText='Unit Price' width='140' textAlign='Right' format='C2'></e-column>
                    <e-column field='UnitsInStock' headerText='Units In Stock' width='140' textAlign='Right'></e-column>
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
