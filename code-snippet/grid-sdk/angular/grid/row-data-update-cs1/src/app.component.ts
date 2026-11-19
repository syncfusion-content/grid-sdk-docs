import { NgClass } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FilterService, GridComponent, GridModule, PageService, SortService } from '@syncfusion/ej2-angular-grids';
import { restaurantMenu } from './datasource';

@Component({
    imports: [GridModule, ButtonModule, NgClass],
    providers: [SortService, FilterService, PageService],
    standalone: true,
    selector: 'app-root',
    template: `<div style="margin: 10px">
                <button ejs-button cssClass="e-outline" style="margin-right: 10px" (click)="updateSingleRow()">Update Single Data</button>
                <button ejs-button cssClass="e-outline" (click)="updateMultipleRows()">Update Multiple Data</button>
               </div>
               <ejs-grid #grid [dataSource]='data' [allowSorting]='true' [allowFiltering]='true' [filterSettings]='filterSettings'
                [allowPaging]='true' [pageSettings]='pageSettings'>
                <e-columns>
                    <e-column field='ItemID' headerText='Item ID' width=100 isPrimaryKey='true'></e-column>
                    <e-column field='ItemName' headerText='Dish Name' width=130 clipMode='EllipsisWithTooltip'></e-column>
                    <e-column field='Category' headerText='Category' width=120></e-column>
                    <e-column field='Price' headerText='Cost' width=100 format='C2' textAlign='Right'>
                        <ng-template #template let-data>
                            <div class="price-cell" [ngClass]="priceClass(data.Price)">{{ '$' + formatPrice(data.Price) }}</div>
                        </ng-template>
                    </e-column>
                    <e-column field='SpiceLevel' headerText='Spiciness' width=110></e-column>
                    <e-column field='Description' headerText='Description' width=260 clipMode='EllipsisWithTooltip'></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent {
    @ViewChild('grid') public grid?: GridComponent;
    public data: object[] = restaurantMenu;
    public filterSettings: object = { type: 'Excel' };
    public pageSettings: object = { pageSize: 8, pageCount: 4 };

    private randomPrice(price: number): number {
        return Number(Math.min(Math.max(price + (12 * Math.random() - 6), 4), 32).toFixed(2));
    }

    private findItem(id: string): any {
        return (restaurantMenu as any[]).find((item: any) => item.ItemID === id);
    }

    public formatPrice(price: number | null): string {
        return (price == null ? 0 : price).toFixed(2);
    }

    public priceClass(price: number | null): string {
        const value = price == null ? 0 : price;
        if (value > 25) { return 'price-premium'; }
        if (value > 20) { return 'price-high'; }
        if (value > 15) { return 'price-mid-high'; }
        if (value > 10) { return 'price-mid'; }
        return 'price-low';
    }

    public updateSingleRow(): void {
        const item = this.findItem('ITEM-1002');
        this.grid!.setRowData('ITEM-1002', { ...item, Price: this.randomPrice(item.Price), Description: item.Description });
    }

    public async updateMultipleRows(): Promise<void> {
        const updates = [
            { ...this.findItem('ITEM-1001'), Price: this.randomPrice(this.findItem('ITEM-1001').Price), Description: 'Spicy Paneer Tikka Masala' },
            { ...this.findItem('ITEM-1002'), Price: this.randomPrice(this.findItem('ITEM-1002').Price), Description: 'Caesar Salad' },
            { ...this.findItem('ITEM-1003'), Price: this.randomPrice(this.findItem('ITEM-1003').Price), Description: 'Cheesecake with honey' }
        ];
        for (const row of updates) {
            await this.grid!.setRowDataAsync(row.ItemID, row, 0);
        }
    }
}
