import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridModule, EditService, SelectionService, ColumnChooserService, SideBarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule],
    providers: [EditService, SelectionService, ColumnChooserService, SideBarService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='320px' [enableToolPanel]='true' [toolPanelSettings]='toolPanelSettings' [editSettings]='editSettings' [selectionSettings]='selectionSettings'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right' [isPrimaryKey]='true'></e-column>
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
    public editSettings?: object;
    public selectionSettings?: object;

    ngOnInit(): void {
        this.data = data;
        this.toolPanelSettings = {
            position: 'Right',
            isOpen: true,
            defaultToolPanel: 'editing',
            toolPanels: [
                {
                    id: 'editing',
                    type: 'Edit',
                    headerText: 'Editing'
                },
                {
                    id: 'columns',
                    type: 'Columns',
                    headerText: 'Columns'
                }
            ]
        };
        this.editSettings = { allowEditing: true, mode: 'Normal' };
        this.selectionSettings = { type: 'Multiple' };
    }
}
