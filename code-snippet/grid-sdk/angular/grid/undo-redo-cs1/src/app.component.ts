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
                    <e-column field='OrderID' headerText='Order ID' width=120 textAlign='Right' isPrimaryKey='true' [validationRules]='OrderIDRules'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140 [validationRules]='CustomerIDRules'></e-column>
                    <e-column field='Freight' headerText='Freight' width=120 editType='numericedit' format='C2' textAlign='Right' [validationRules]='FreightRules'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150 editType='dropdownedit'></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public OrderIDRules?: Object;
    public CustomerIDRules?: Object;
    public FreightRules?: Object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', enableUndoRedo: true, undoRedoLimit: 10 };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'];
        this.OrderIDRules = { required: true, number: true };
        this.CustomerIDRules = { required: true, minLength: 3 };
        this.FreightRules = { required: true, min: 1, max: 1000 };
    }
}
