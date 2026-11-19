import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GridModule, HighlightService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GridModule],
  providers: [HighlightService],
  standalone: true,
  selector: 'app-root',
  template: `<div class="controls">
                <button class="e-btn" (click)="updatePrices()">Update prices</button>
            </div>
            <ejs-grid #grid id="Grid" [dataSource]='data' height='300' [enableHighlightOnDataChange]="true">
              <e-columns>
                <e-column field='Symbol' headerText='Symbol' width=110 [isPrimaryKey]='true'></e-column>
                <e-column field='Company' headerText='Company' width=180></e-column>
                <e-column field='Price' headerText='Price' width=120 format='C2' textAlign='Right'></e-column>
                <e-column field='Volume' headerText='Volume' width=140 format='N0' textAlign='Right'></e-column>
              </e-columns>
            </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
  }

  updatePrices(): void {
    const grid = this.grid as GridComponent;
    const symbols = ['AAPL', 'NVDA', 'TSLA'];
    symbols.forEach((symbol) => {
        grid.setCellValue(symbol, 'Price', +(100 + Math.random() * 150).toFixed(2));
    });
  }
}
