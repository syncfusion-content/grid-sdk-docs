import { NgClass } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GridComponent, GridModule, VirtualScrollService } from '@syncfusion/ej2-angular-grids';
import { chargingStationData } from './datasource';

@Component({
    imports: [GridModule, ButtonModule, NgClass],
    providers: [VirtualScrollService],
    standalone: true,
    selector: 'app-root',
    template: `<div style="display: flex; gap: 20px; margin: 5px; align-items: center">
                <button ejs-button cssClass="e-outline" (click)="normalUpdate()">Normal update</button>
                <span style="font-weight: bold; color: #555">{{ syncTime }}</span>
                <button ejs-button cssClass="e-outline" (click)="asyncUpdate()">Async update</button>
                <span style="font-weight: bold; color: #555">{{ asyncTime }}</span>
               </div>
               <ejs-grid #grid [dataSource]='data' height=480 [enableVirtualization]='true'>
                <e-columns>
                    <e-column field='StationID' headerText='Station ID' isPrimaryKey='true' width=120></e-column>
                    <e-column field='City' headerText='Station Location' width=160></e-column>
                    <e-column field='ChargingSpeed' headerText='Charging Speed' width=160></e-column>
                    <e-column field='ActiveSessions' headerText='Active Slots' textAlign='Right' width=130></e-column>
                    <e-column field='AvailableSlots' headerText='Available Slots' textAlign='Right' width=150></e-column>
                    <e-column field='Revenue' headerText='Revenue' textAlign='Center' format='C2' width=180>
                        <ng-template #template let-data>
                            <div class="revenue-cell" [ngClass]="isUp(data) ? 'above-0' : 'below-0'">
                                <span class="rowcell-left">
                                    <svg width="12" height="12" viewBox="0 0 24 24" [attr.fill]="isUp(data) ? 'green' : 'red'">
                                        <path [attr.d]="isUp(data) ? 'M12 4l-8 8h6v8h4v-8h6z' : 'M12 20l8-8h-6V4h-4v8H4z'" />
                                    </svg>\${{ revenueOf(data).toFixed(2) }}
                                </span>
                                <span class="rowcell-right">Prev: \${{ previousOf(data).toFixed(2) }}</span>
                            </div>
                        </ng-template>
                    </e-column>
                    <e-column field='LastMaintenanceDate' headerText='Maintenance Date' textAlign='Right' type='date' format='dd/MM/yyyy' width=140></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent {
    @ViewChild('grid') public grid?: GridComponent;
    public data: object[] = chargingStationData;
    public syncTime = '';
    public asyncTime = '';
    private previousRevenue: Map<string, number> = new Map();

    public revenueOf(data: any): number {
        return data.Revenue == null ? 0 : data.Revenue;
    }

    public previousOf(data: any): number {
        const previous = this.previousRevenue.get(data.StationID);
        return previous == null ? this.revenueOf(data) : previous;
    }

    public isUp(data: any): boolean {
        return this.revenueOf(data) - this.previousOf(data) >= 0;
    }

    public normalUpdate(): void {
        const start = performance.now();
        const visibleStations: any[] = this.grid!.getCurrentViewRecords();
        (chargingStationData as any[]).forEach((station: any) => {
            this.previousRevenue.set(station.StationID, station.Revenue);
            station.Revenue = station.Revenue + 10;
        });
        setTimeout(() => {
            visibleStations.forEach((station: any) => {
                this.grid!.setCellValue(station.StationID, 'Revenue', station.Revenue);
            });
            this.syncTime = `Sync Update took ${(performance.now() - start).toFixed(2)} ms`;
        });
    }

    public async asyncUpdate(): Promise<void> {
        const start = performance.now();
        const visibleStations: any[] = this.grid!.getCurrentViewRecords();
        (chargingStationData as any[]).forEach((station: any) => {
            this.previousRevenue.set(station.StationID, station.Revenue);
            station.Revenue = station.Revenue + 20;
        });
        await Promise.all(visibleStations.map((station: any) =>
            this.grid!.setCellValueAsync(station.StationID, 'Revenue', station.Revenue, 0)
        ));
        this.asyncTime = `Async Update took ${(performance.now() - start).toFixed(2)} ms`;
    }
}
