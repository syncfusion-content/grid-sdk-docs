import { Component, OnInit } from '@angular/core';
import { PivotViewAllModule, FlatLayoutService, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
    imports: [PivotViewAllModule],
    standalone: true,
    selector: 'app-container',
    providers: [FlatLayoutService],
    template: `<ejs-pivotview #pivotview id='PivotView' height='450' width='100%' [dataSourceSettings]='dataSourceSettings' [gridSettings]='gridSettings' [flatSettings]='flatSettings'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings: any;
    public gridSettings: any;
    public flatSettings: any;

    ngOnInit(): void {
        this.dataSourceSettings = { dataSource: Pivot_Data as IDataSet[] };
        this.gridSettings = { layout: 'Flat' };
        this.flatSettings = {
    columns: [
    { field: 'Country', headerText: 'Country', width: 140 },
    { field: 'Products', headerText: 'Products', width: 160 },
    { field: 'Year', headerText: 'Year', width: 120 },
    { field: 'Sold', headerText: 'Units Sold', width: 120 },
    { field: 'Amount', headerText: 'Sold Amount', width: 140 }
],
    allowSorting: true,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageSize: 10 }
};
    }
}
