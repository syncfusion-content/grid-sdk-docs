import { Component } from '@angular/core';
import { DomVirtualizationService, FilterService, GridModule, InfiniteScrollService, PageService, SortService, DataStateChangeEventArgs } from '@syncfusion/ej2-angular-grids';
import { DataManager, Predicate, Query } from '@syncfusion/ej2-data';
import { chargingStationData } from './datasource';

@Component({
    imports: [GridModule],
    providers: [DomVirtualizationService, SortService, FilterService, PageService, InfiniteScrollService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='gridData' (dataStateChange)='processRequest($event)' height=400 [enableInfiniteScrolling]='true'
                [domVirtualizationSettings]='domVirtualizationSettings' [pageSettings]='pageSettings'
                [allowSorting]='true' [allowFiltering]='true' [filterSettings]='filterSettings'>
                <e-columns>
                    <e-column field='StationID' headerText='Station ID' width=120 isPrimaryKey='true'></e-column>
                    <e-column field='City' headerText='Station Location' width=160></e-column>
                    <e-column field='ChargingSpeed' headerText='Charging Speed' width=160></e-column>
                    <e-column field='ActiveSessions' headerText='Active Slots' textAlign='Right' width=130></e-column>
                    <e-column field='AvailableSlots' headerText='Available Slots' textAlign='Right' width=150></e-column>
                    <e-column field='LastMaintenanceDate' headerText='Maintenance Date' textAlign='Right' type='date' format='dd/MM/yyyy' width=170 [allowFiltering]='false'></e-column>
                    <e-column field='Revenue' headerText='Revenue' textAlign='Right' format='C2' width=110></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent {
    public pageSize = 50;
    public gridData: any = { result: chargingStationData.slice(0, this.pageSize), count: chargingStationData.length };
    public domVirtualizationSettings: object = { rowBuffer: 5 };
    public pageSettings: object = { pageSize: this.pageSize };
    public filterSettings: object = { type: 'CheckBox' };

    private buildPredicate(item: any): Predicate {
        if (!item.isComplex) {
            return new Predicate(item.field, item.operator, item.value, item.ignoreCase, item.ignoreAccent);
        }
        let result: Predicate | null = null;
        for (const sub of item.predicates || []) {
            const p = this.buildPredicate(sub);
            result = result === null ? p : (item.condition || 'and').toLowerCase() === 'or' ? result.or(p) : result.and(p);
        }
        return result as Predicate;
    }

    // Simulates a server: applies filter, sort, and paging on the local dataset
    // and returns only the rows requested by the viewport.
    public processRequest(state: DataStateChangeEventArgs): void {
        const request: any = state;
        const manager = new DataManager(chargingStationData);
        const requestType = request.action && request.action.requestType;
        if (request.dataSource && ['filterchoicerequest', 'filterSearchBegin', 'stringfilterrequest'].indexOf(requestType) !== -1) {
            if (request.action.query) {
                manager.executeQuery(request.action.query).then((e: any) => {
                    request.dataSource(e.result);
                });
            } else {
                const field = request.action.field;
                const seenValues: any = {};
                const choices: any[] = [];
                chargingStationData.forEach((item: any) => {
                    const value = item[field];
                    const key = value instanceof Date ? `date:${value.getTime()}` : `${typeof value}:${value}`;
                    if (!seenValues[key]) {
                        seenValues[key] = true;
                        choices.push({ [field]: value });
                    }
                });
                request.dataSource(choices);
            }
            return;
        }
        const query = new Query();
        if (request.where && request.where.length) {
            query.where(this.buildPredicate(request.where[0]));
        }
        if (request.sorted && request.sorted.length) {
            request.sorted.forEach((s: any) => query.sortBy(s.name, s.direction));
        }
        const skip = request.skip || 0;
        const take = request.take || this.pageSize;
        query.page(Math.floor(skip / take) + 1, take).requiresCount();
        manager.executeQuery(query).then((e: any) => {
            this.gridData = { result: e.result, count: e.count };
        });
    }
}
