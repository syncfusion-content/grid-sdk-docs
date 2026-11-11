import { Component } from '@angular/core';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import { DomVirtualizationService, FilterService, GridModule, SortService, ToolbarService, VirtualScrollService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule],
    providers: [DomVirtualizationService, SortService, FilterService, ToolbarService, VirtualScrollService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [query]='query' height=450 clipMode='EllipsisWithTooltip'
                [enableDomVirtualization]='true' [domVirtualizationSettings]='domVirtualizationSettings' [pageSettings]='pageSettings'
                [enableVirtualMaskRow]='true' [enableVirtualization]='true' [allowSorting]='true' [allowFiltering]='true'
                [filterSettings]='filterSettings' [toolbar]='toolbar'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' width=110 textAlign='Right' clipMode='EllipsisWithTooltip' isPrimaryKey='true' type='number'>
                        <ng-template #template let-data><span>{{ data.EmployeeID }}</span></ng-template>
                    </e-column>
                    <e-column field='Employees' headerText='Employee Name' width=160 textAlign='Left' clipMode='EllipsisWithTooltip'>
                        <ng-template #template let-data><span class="vp-ellipsis">{{ data.Employees }}</span></ng-template>
                    </e-column>
                    <e-column field='Designation' headerText='Designation' width=140 textAlign='Left' clipMode='EllipsisWithTooltip'>
                        <ng-template #template let-data><span class="vp-ellipsis">{{ data.Designation }}</span></ng-template>
                    </e-column>
                    <e-column field='Mail' headerText='Email' width=190 textAlign='Left' clipMode='EllipsisWithTooltip'></e-column>
                    <e-column field='Address' headerText='Address' width=190 textAlign='Left' clipMode='EllipsisWithTooltip'></e-column>
                    <e-column field='Location' headerText='Location' width=130 textAlign='Center' clipMode='EllipsisWithTooltip'>
                        <ng-template #template let-data><span class="vp-ellipsis">{{ data.Location }}</span></ng-template>
                    </e-column>
                    <e-column field='Status' headerText='Status' width=120 textAlign='Center' clipMode='EllipsisWithTooltip'>
                        <ng-template #template let-data>
                            <div [class]="'vp-badge vp-status-' + statusClass(data.Status)">
                                <span>{{ statusIcon(data.Status) }}</span><span>{{ data.Status }}</span>
                            </div>
                        </ng-template>
                    </e-column>
                    <e-column field='Trustworthiness' headerText='Trustworthiness' width=140 textAlign='Center' clipMode='EllipsisWithTooltip'>
                        <ng-template #template let-data>
                            <div [class]="'vp-badge vp-trust-' + data.Trustworthiness">{{ data.Trustworthiness }}</div>
                        </ng-template>
                    </e-column>
                    <e-column field='Software' headerText='Software Skills' width=130 textAlign='Right' clipMode='EllipsisWithTooltip' type='number'>
                        <ng-template #template let-data>
                            <div class="vp-progress">
                                <div class="vp-progress-bar"><div [style.width]="softValue(data) + '%'" [style.backgroundColor]="softColor(data)"></div></div>
                                <span>{{ softValue(data) }}%</span>
                            </div>
                        </ng-template>
                    </e-column>
                    <e-column field='Rating' headerText='Performance Rating' width=140 textAlign='Center' clipMode='EllipsisWithTooltip' type='number'>
                        <ng-template #template let-data>
                            <span [style.color]="ratingColor(data)" style="font-weight: 600">★ {{ ratingValue(data).toFixed(1) }}</span>
                        </ng-template>
                    </e-column>
                    <e-column field='CurrentSalary' headerText='Current Salary' width=140 textAlign='Right' clipMode='EllipsisWithTooltip' type='number'>
                        <ng-template #template let-data>
                            <span class="vp-salary">{{ salary(data.CurrentSalary) }}</span>
                        </ng-template>
                    </e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent {
    public data: DataManager = new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
        adaptor: new UrlAdaptor()
    });
    public query: Query = new Query().addParams('dataCount', '100000');
    public domVirtualizationSettings: object = { rowBuffer: 6, autoRowHeight: true, virtualDomType: 'Row' };
    public pageSettings: object = { pageSize: 50 };
    public filterSettings: object = { type: 'CheckBox' };
    public toolbar: string[] = ['Search'];

    public statusClass(status: string): string {
        return (status || 'Active').replace(' ', '');
    }

    public statusIcon(status: string): string {
        const icons: any = { Active: '●', Inactive: '○', 'On Leave': '⊘', Retired: '✕' };
        return icons[status] || icons.Active;
    }

    public softValue(data: any): number {
        let v = Math.round(Math.min(100, Math.max(0, Number(data.Software == null ? 0 : data.Software))));
        if (data.Trustworthiness === 'Perfect' && v < 70) { v = 70; }
        else if (data.Trustworthiness === 'Sufficient') { v = Math.min(69, Math.max(40, v)); }
        else if (data.Trustworthiness === 'Insufficient' && v > 39) { v = 39; }
        return v;
    }

    public softColor(data: any): string {
        const v = this.softValue(data);
        return v < 40 ? '#dc2626' : v < 70 ? '#f59e0b' : '#059669';
    }

    public ratingValue(data: any): number {
        let r = Math.min(5, Math.max(0, Number(data.Rating == null ? 0 : data.Rating)));
        if (data.Trustworthiness === 'Perfect') { r = Math.min(5, Math.max(4, r)); }
        else if (data.Trustworthiness === 'Sufficient') { r = 3; }
        else if (data.Trustworthiness === 'Insufficient') { r = Math.min(2, Math.max(1, r)); }
        return r;
    }

    public ratingColor(data: any): string {
        const r = this.ratingValue(data);
        return r >= 4 ? '#059669' : r >= 3 ? '#f59e0b' : '#dc2626';
    }

    public salary(value: number): string {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value || 0);
    }
}
