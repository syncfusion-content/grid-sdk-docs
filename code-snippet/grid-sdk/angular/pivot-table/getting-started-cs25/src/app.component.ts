import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component, OnInit } from '@angular/core';
import { IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { DataManager } from '@syncfusion/ej2-data';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: DataSourceSettingsModel;
  public data?: DataManager;
  public width?: string;

  ngOnInit(): void {
    this.width = '100%';
    this.dataSourceSettings = {
      url: 'https://bi.syncfusion.com/productservice/api/sales',
      type: 'CSV',
      delimiter: ',',
      enableQuotedLineBreaks: true,
      expandAll: false,
      enableSorting: true,
      // tslint:disable-next-line:max-line-length
      formatSettings: [{ name: 'Total Revenue', format: 'C0' }, { name: 'Total Profit', format: 'C0' }],
      rows: [
        { name: 'Region' },
        { name: 'Country' }
      ],
      columns: [
        { name: 'Item Type' },
        { name: 'Sales Channel' }
      ],
      values: [
        { name: 'Total Revenue' },
        { name: 'Total Profit' }
      ]
    };
  }
}



