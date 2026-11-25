import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { FilterService, GridComponent, GridModule, PageService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule, CheckBoxModule, DropDownListModule],
    providers: [PageService, FilterService],
    standalone: true,
    selector: 'app-root',
    template: `
        <div style="padding: 10px 0px">
            <ejs-checkbox label="Enable Presets" [checked]="false" (change)="onEnablePresetsChange($event)"></ejs-checkbox>
            <span style="margin-left: 10px">
                <ejs-checkbox label="Enable Custom Presets" [checked]="false" (change)="onCustomPresetsChange($event)"></ejs-checkbox>
            </span>
            <span style="margin-left: 10px">
                <ejs-dropdownlist [dataSource]='presetModes' value='Default' width='180px' placeholder='Preset Mode' (change)="onPresetModeChange($event)"></ejs-dropdownlist>
            </span>
        </div>
        <ejs-grid #grid id="grid" [dataSource]='data' allowPaging='true' allowFiltering='true' [filterSettings]='filterSettings'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='150'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='150' type='date' format='yMd' [filter]='orderDateFilter'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
            </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {
    @ViewChild('grid')
    public grid?: GridComponent;
    public data?: object[];
    public filterSettings?: Object;
    public orderDateFilter?: Object;
    public presetModes: string[] = ['Default', 'Custom', 'Both'];
    public enablePresets: boolean = false;
    public enableCustomPresets: boolean = false;
    public presetMode: any = 'Default';
    public customRanges: { [key: string]: Date }[] = [
        {
            label: 'Yesterday',
            start: new Date(new Date().setDate(new Date().getDate() - 1)),
            end: new Date(new Date().setDate(new Date().getDate() - 1))
        },
        {
            label: 'Today',
            start: new Date(),
            end: new Date()
        },
        {
            label: 'Last 5 Days',
            start: new Date(new Date().setDate(new Date().getDate() - 4)),
            end: new Date()
        },
        {
            label: 'Next 5 Days',
            start: new Date(),
            end: new Date(new Date().setDate(new Date().getDate() + 4))
        }
    ];

    ngOnInit(): void {
        this.data = data;
        this.filterSettings = { type: 'Menu' };
        this.orderDateFilter = {
            dateRanges: {
                enablePresets: this.enablePresets,
                presetMode: this.presetMode,
                customPresetRanges: this.enableCustomPresets ? this.customRanges : []
            }
        };
    }

    public onEnablePresetsChange(args: any): void {
        this.enablePresets = args.checked;
        this.updateDateRangeSettings();
    }

    public onCustomPresetsChange(args: any): void {
        this.enableCustomPresets = args.checked;
        this.updateDateRangeSettings();
    }

    public onPresetModeChange(args: any): void {
        this.presetMode = args.value;
        this.updateDateRangeSettings();
    }

    public updateDateRangeSettings(): void {
        const column: any = (this.grid as GridComponent).getColumnByField('OrderDate');
        column.filter = {
            dateRanges: {
                enablePresets: this.enablePresets,
                presetMode: this.presetMode,
                customPresetRanges: this.enableCustomPresets ? this.customRanges : []
            }
        };
        (this.grid as GridComponent).refreshColumns();
    }
}
