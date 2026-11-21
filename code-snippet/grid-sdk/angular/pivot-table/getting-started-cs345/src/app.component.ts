import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview';
import { Component, OnInit } from '@angular/core';
import { IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
  imports: [
    PivotViewAllModule,
    PivotFieldListAllModule
  ],
  standalone: true,
  selector: 'app-container',
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings width='100%'></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: DataSourceSettingsModel;

  ngOnInit(): void {
    this.dataSourceSettings = {
      dataSource: Pivot_Data as IDataSet[],
      rows: [{ name: 'Country' }],
      columns: [{ name: 'Products' }],
      values: [
        { name: 'OrderDate', caption: 'Earliest Order', type: 'Min' },
        { name: 'OrderDate', caption: 'Order Count', type: 'Count' },
        { name: 'Amount', caption: 'Total Amount', type: 'Sum' }
      ],
      formatSettings: [
        { name: 'OrderDate', type: 'date', format: 'dd/MM/yyyy' },
        { name: 'Amount', format: 'C0' }
      ]
    };
  }
}
