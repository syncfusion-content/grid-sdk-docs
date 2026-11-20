import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { EditService, EditSettingsModel, GridModule, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule],
    providers: [EditService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='CustomerID' headerText='Customer ID' [validationRules]='customerIDRules'
                    isPrimaryKey='true' width=120></e-column>
                    <e-column field='CompanyName' headerText='Company Name' [validationRules]='requiredRules' width=170></e-column>
                    <e-column field='ContactName' headerText='Contact Name' [validationRules]='requiredRules' width=150></e-column>
                    <e-column field='Country' headerText='Country' editType='dropdownedit' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public customerIDRules?: Object;
    public requiredRules?: Object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'];
        this.customerIDRules = { required: true, minLength: 3 };
        this.requiredRules = { required: true };
    }
}
