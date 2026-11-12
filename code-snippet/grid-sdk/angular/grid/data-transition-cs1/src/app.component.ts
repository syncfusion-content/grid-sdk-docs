import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { EditService, EditSettingsModel, FilterService, GridComponent, GridModule, PageService, SortService } from '@syncfusion/ej2-angular-grids';
import { productSalesDetails } from './datasource';

@Component({
    imports: [GridModule, ButtonModule],
    providers: [SortService, FilterService, PageService, EditService],
    standalone: true,
    selector: 'app-root',
    template: `<div style="display: flex; gap: 10px; flex-wrap: wrap; margin: 5px">
                <button ejs-button cssClass="e-outline" (click)="addRecord()">Add Record</button>
                <button ejs-button cssClass="e-outline" (click)="deleteRecord()">Delete Selected Record</button>
                <button ejs-button cssClass="e-outline" (click)="addRecordAsync()">Add Record (Async)</button>
                <button ejs-button cssClass="e-outline" (click)="updateRecordAsync()">Update Record (Async)</button>
                <button ejs-button cssClass="e-outline" (click)="deleteRecordAsync()">Delete Selected Record (Async)</button>
               </div>
               <ejs-grid #grid [dataSource]='data' [allowSorting]='true' [allowFiltering]='true' [filterSettings]='filterSettings'
                [allowPaging]='true' [pageSettings]='pageSettings' [editSettings]='editSettings'>
                <e-columns>
                    <e-column field='SaleID' headerText='Sale ID' width=100 isPrimaryKey='true' textAlign='Right'></e-column>
                    <e-column field='ProductName' headerText='Product Name' width=120></e-column>
                    <e-column field='Category' headerText='Category' clipMode='EllipsisWithTooltip' width=100></e-column>
                    <e-column field='SalesPerson' headerText='Sales Person' width=110></e-column>
                    <e-column field='UnitsSold' headerText='Units Sold' width=100 textAlign='Right'></e-column>
                    <e-column field='UnitPrice' headerText='Unit Price' format='C2' width=110 textAlign='Right'></e-column>
                    <e-column field='TotalRevenue' headerText='Revenue' format='C2' width=110 textAlign='Right'></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent {
    @ViewChild('grid') public grid?: GridComponent;
    public data: object[] = productSalesDetails;
    public filterSettings: object = { type: 'Excel' };
    public pageSettings: object = { pageSize: 8, pageCount: 4 };
    public editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };

    private randomId(): string {
        return `S-${Math.floor(1000 * Math.random())}`;
    }

    public addRecord(): void {
        this.grid!.addRecord({
            SaleID: this.randomId(), ProductName: 'Smart Lamp', UnitsSold: Math.floor(20 * Math.random()) + 1,
            UnitPrice: 120.5, TotalRevenue: 2410, IsDiscounted: false, Category: 'Home Tech', Region: 'Central', SalesPerson: 'Bob'
        });
    }

    public deleteRecord(): void {
        this.grid!.deleteRecord();
    }

    public async addRecordAsync(): Promise<void> {
        const records = [
            { SaleID: this.randomId(), ProductName: 'Smart Watch', UnitsSold: 12, UnitPrice: 250, TotalRevenue: 3000, IsDiscounted: false, Category: 'Wearables', Region: 'East', SalesPerson: 'Julia' },
            { SaleID: this.randomId(), ProductName: 'Gaming Laptop', UnitsSold: 6, UnitPrice: 1200, TotalRevenue: 7200, IsDiscounted: true, Category: 'Electronics', Region: 'West', SalesPerson: 'Charlie' }
        ];
        await Promise.all(records.map((record) => this.grid!.addRecordAsync(record)));
    }

    public async updateRecordAsync(): Promise<void> {
        const row: any = this.grid!.getCurrentViewRecords()[1];
        await this.grid!.updateRowAsync(1, {
            SaleID: row.SaleID,
            ProductName: 'Phone Pro',
            UnitsSold: Math.floor(5 * Math.random()) + 1,
            UnitPrice: Math.floor(1000 * Math.random()) + 500
        });
    }

    public async deleteRecordAsync(): Promise<void> {
        await this.grid!.deleteRecordAsync();
    }
}
