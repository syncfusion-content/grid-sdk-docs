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
                    <e-column field='EmployeeID' headerText='Employee ID' width=120 textAlign='Right' isPrimaryKey='true' [validationRules]='EmployeeIDRules'></e-column>
                    <e-column field='Name' headerText='Name' width=160 [validationRules]='NameRules'></e-column>
                    <e-column field='Department' headerText='Department' width=140 editType='dropdownedit'></e-column>
                    <e-column field='Salary' headerText='Salary' width=120 editType='numericedit' format='C0' textAlign='Right' [validationRules]='SalaryRules'></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public EmployeeIDRules?: Object;
    public NameRules?: Object;
    public SalaryRules?: Object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', enableUndoRedo: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.EmployeeIDRules = { required: true, number: true };
        this.NameRules = { required: true };
        this.SalaryRules = { required: true, min: 1000 };
    }
}
