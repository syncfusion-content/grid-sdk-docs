import { CrudService } from './crud.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataStateChangeEventArgs, FilterService, GridAllModule, GridComponent, InfiniteScrollService, SearchService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { Query } from '@syncfusion/ej2-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <p>Server requests made: {{ requestCount }}</p>
    <ejs-grid #grid [dataSource]='data | async' enableInfiniteScrolling="true" [infiniteScrollSettings]="infiniteOptions"
    [pageSettings]="pageOptions" allowSorting="true" [sortSettings]="sortOptions" allowFiltering="true" [toolbar]='toolbar'
    (dataStateChange)= 'dataStateChange($event)' height='315px'>
      <e-columns>
        <e-column field='id' headerText='Order ID' width='90' textAlign='Right' isPrimaryKey='true'></e-column>
        <e-column field="CustomerName" headerText="Customer Name" width="100"></e-column>
        <e-column field='ProductID' headerText='Product ID' width=100></e-column>
        <e-column field='ProductName' headerText='Product Name' width='160'></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,
  standalone: true,
  imports: [
    CommonModule,
    GridAllModule,
  ],
  providers: [ToolbarService, SortService, FilterService, InfiniteScrollService, SearchService, CrudService]
})
export class AppComponent implements OnInit {
  public data?: Observable<any>;
  public toolbar?: string[];
  public requestCount: number = 0;
  @ViewChild('grid')
  public grid?: GridComponent;
  public infiniteOptions?: object;
  public pageOptions?: object;
  public sortOptions?: object;
  constructor(public crudService: CrudService) {
  }

  // triggers only when the requested data is not available in the cache
  dataStateChange(state: DataStateChangeEventArgs): void {
    this.requestCount++;
    const query = (this.grid as GridComponent).getDataModule().generateQuery();
    this.crudService.execute(state, query);
  }

  public ngOnInit(): void {
    this.infiniteOptions = { enableCache: true, initialBlocks: 3, maxBlocks: 3 };
    this.pageOptions = { pageSize: 12 };
    this.sortOptions = { columns: [{ field: 'ProductID', direction: 'Descending' }] };
    this.toolbar = ['Search'];
    const state = { skip: 0, take: 36, sorted: [{ name: 'ProductID', direction: 'Descending' }] };
    this.data = this.crudService.state$;
    this.requestCount++;
    this.crudService.execute(state, new Query());
  }
}
