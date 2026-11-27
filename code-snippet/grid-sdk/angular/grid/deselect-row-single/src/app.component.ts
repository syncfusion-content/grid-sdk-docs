import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GridComponent, GridModule, PageService, PageSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule, ButtonModule ],
    providers: [PageService],
    standalone: true,
    selector: 'app-root',
    template: `<div style="padding: 20px 0px 0px 0px">
                <button ejs-button id="button" (click)='deselectRow()'>Deselect Row at Index 2</button>
                </div>
                <div style="padding: 20px 0px 0px 0px">
                    <ejs-grid #grid [dataSource]='data' [selectedRowIndex]=1 allowPaging=true 
                    [selectionSettings]='selectionOptions' [pageSettings]='pageOptions'>
                        <e-columns>
                            <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                            width=120></e-column>
                            <e-column field='CustomerID' headerText='Customer ID' width=120>
                            </e-column>
                            <e-column field='ShipCountry' headerText='Ship Country' width=130>
                            </e-column>
                            <e-column field='Freight' headerText='Freight' format= 'C2' 
                            width=100></e-column>
                        </e-columns>
                    </ejs-grid>
                </div>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public selectionOptions?: SelectionSettingsModel;
    public pageOptions?: PageSettingsModel;

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { mode: 'Row', type: 'Multiple' };
        this.pageOptions = { pageSize: 5 };
    }
    deselectRow(): void {
        (this.grid as GridComponent).selectionModule.deselectRow(2);
    }
}
