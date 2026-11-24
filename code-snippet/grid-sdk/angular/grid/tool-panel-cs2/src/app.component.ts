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
                    <e-column field='EmployeeID' headerText='Employee ID' width='140' textAlign='Right' [isPrimaryKey]='true'></e-column>
                    <e-column field='Name' headerText='Name' width='140'></e-column>
                    <e-column field='Title' headerText='Title' width='140'></e-column>
                    <e-column field='Country' headerText='Country' width='140'></e-column>
                    <e-column field='Salary' headerText='Salary' width='140' textAlign='Right' format='C0'></e-column>
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
            width: 300,
            toolPanels: [
                'Edit',
                'Columns'
            ]
        };
        this.editSettings = { allowEditing: true, mode: 'Normal' };
        this.selectionSettings = { type: 'Multiple' };
    }
}
