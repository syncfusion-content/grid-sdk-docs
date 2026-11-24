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
                    <e-column field='ProductID' headerText='Product ID' width=120 textAlign='Right' isPrimaryKey='true' [validationRules]='ProductIDRules'></e-column>
                    <e-column field='ProductName' headerText='Product Name' width=170 [validationRules]='ProductNameRules'></e-column>
                    <e-column field='Category' headerText='Category' width=140 editType='dropdownedit'></e-column>
                    <e-column field='UnitPrice' headerText='Unit Price' width=120 editType='numericedit' format='C2' textAlign='Right' [validationRules]='UnitPriceRules'></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public ProductIDRules?: Object;
    public ProductNameRules?: Object;
    public UnitPriceRules?: Object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true, enableBatchUndoRedo: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'];
        this.ProductIDRules = { required: true, number: true };
        this.ProductNameRules = { required: true };
        this.UnitPriceRules = { required: true, min: 1 };
    }
}
